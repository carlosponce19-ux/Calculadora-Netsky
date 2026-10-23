create table if not exists public.technician_ratings (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid not null unique,
  technician text not null check (technician in (
    'Juan Carlos Troncoso',
    'Felipe Ojeda Lobos',
    'Rodrigo Caro Obando'
  )),
  punctuality smallint not null check (punctuality between 1 and 7),
  clarity smallint not null check (clarity between 1 and 7),
  cleanliness smallint not null check (cleanliness between 1 and 7),
  questions smallint not null check (questions between 1 and 7),
  kindness smallint not null check (kindness between 1 and 7),
  recommendation smallint not null check (recommendation between 1 and 7),
  comment text not null default '' check (char_length(comment) <= 2000),
  email_sent_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists technician_ratings_created_at_idx
  on public.technician_ratings (created_at desc);

create table if not exists public.evaluation_rate_limits (
  ip_hash text primary key,
  window_started_at timestamptz not null,
  submissions integer not null
);

alter table public.technician_ratings enable row level security;
alter table public.evaluation_rate_limits enable row level security;

revoke all on public.technician_ratings from anon, authenticated;
grant select on public.technician_ratings to authenticated;
grant all on public.technician_ratings to service_role;
revoke all on public.evaluation_rate_limits from anon, authenticated;
grant all on public.evaluation_rate_limits to service_role;

drop policy if exists "Company email can read technician ratings" on public.technician_ratings;
create policy "Company email can read technician ratings"
  on public.technician_ratings
  for select
  to authenticated
  using (lower(auth.jwt() ->> 'email') = 'ventas01netsky@gmail.com');

create or replace function public.consume_evaluation_rate_limit(p_ip_hash text)
returns boolean
language plpgsql
security definer
set search_path = pg_catalog, public
as $function$
declare
  request_count integer;
begin
  delete from public.evaluation_rate_limits
  where window_started_at < now() - interval '1 day';

  insert into public.evaluation_rate_limits (ip_hash, window_started_at, submissions)
  values (p_ip_hash, now(), 1)
  on conflict (ip_hash) do update set
    window_started_at = case
      when public.evaluation_rate_limits.window_started_at < now() - interval '15 minutes' then now()
      else public.evaluation_rate_limits.window_started_at
    end,
    submissions = case
      when public.evaluation_rate_limits.window_started_at < now() - interval '15 minutes' then 1
      else public.evaluation_rate_limits.submissions + 1
    end
  returning submissions into request_count;

  return request_count <= 5;
end;
$function$;

revoke all on function public.consume_evaluation_rate_limit(text) from public, anon, authenticated;
grant execute on function public.consume_evaluation_rate_limit(text) to service_role;
