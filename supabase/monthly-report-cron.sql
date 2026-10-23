create extension if not exists pg_cron with schema pg_catalog;
create extension if not exists pg_net with schema extensions;

select cron.schedule(
  'netsky-monthly-technician-report',
  '0 12 1 * *',
  $job$
    select net.http_post(
      url := (
        select decrypted_secret
        from vault.decrypted_secrets
        where name = 'netsky_monthly_report_url'
      ),
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'x-monthly-report-secret', (
          select decrypted_secret
          from vault.decrypted_secrets
          where name = 'netsky_monthly_report_secret'
        )
      ),
      body := '{}'::jsonb
    );
  $job$
);
