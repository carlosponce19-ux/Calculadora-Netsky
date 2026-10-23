import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import {
  companyEmail,
  htmlEscape,
  jsonResponse,
  ratingFields,
  sendEmail,
  type RatingField,
} from '../_shared/email.ts';

type ReportRating = { technician: string } & Record<RatingField, number>;

const labels: Record<typeof ratingFields[number], string> = {
  punctuality: 'Puntualidad',
  clarity: 'Explicación',
  cleanliness: 'Orden y limpieza',
  questions: 'Dudas resueltas',
  kindness: 'Amabilidad y trato',
  recommendation: 'Recomendación',
};

Deno.serve(async (request) => {
  if (request.method !== 'POST') return jsonResponse(request, { error: 'Method not allowed.' }, 405);
  const expectedSecret = Deno.env.get('MONTHLY_REPORT_CRON_SECRET');
  if (!expectedSecret || request.headers.get('x-monthly-report-secret') !== expectedSecret) {
    return jsonResponse(request, { error: 'Unauthorized.' }, 401);
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse(request, { error: 'Report service is not configured.' }, 503);
  }
  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const end = new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), 1));
  const start = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth() - 1, 1));
  const ratings: ReportRating[] = [];
  for (let offset = 0; ; offset += 1000) {
    const { data, error } = await admin
      .from('technician_ratings')
      .select('technician,punctuality,clarity,cleanliness,questions,kindness,recommendation')
      .gte('created_at', start.toISOString())
      .lt('created_at', end.toISOString())
      .range(offset, offset + 999);
    if (error) {
      console.error('Could not load monthly evaluation report:', error.message);
      return jsonResponse(request, { error: 'Could not load the monthly report.' }, 503);
    }
    ratings.push(...data);
    if (data.length < 1000) break;
  }

  const grouped = new Map<string, ReportRating[]>();
  for (const rating of ratings) {
    const group = grouped.get(rating.technician) ?? [];
    group.push(rating);
    grouped.set(rating.technician, group);
  }
  const monthLabel = new Intl.DateTimeFormat('es-CL', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(start);
  const report = [...grouped.entries()]
    .sort(([first], [second]) => first.localeCompare(second, 'es'))
    .map(([technician, items]) => {
      const average = (field: typeof ratingFields[number]) =>
        items.reduce((total, item) => total + item[field], 0) / items.length;
      const overall = items.reduce((sum, item) =>
        sum + ratingFields.reduce((rowSum, field) => rowSum + item[field], 0), 0) / (items.length * ratingFields.length);
      return { technician, count: items.length, average, overall };
    });

  const text = [
    `Resumen mensual de evaluaciones Netsky · ${monthLabel}`,
    ...report.flatMap(({ technician, count, average, overall }) => [
      '',
      `${technician} · ${count} evaluación(es) · promedio general ${overall.toFixed(2)}/7`,
      ...ratingFields.map((field) => `${labels[field]}: ${average(field).toFixed(2)}/7`),
    ]),
    ...(report.length ? [] : ['', 'No se recibieron evaluaciones este mes.']),
  ].join('\n');
  const htmlRows = report.map(({ technician, count, average, overall }) =>
    `<tr><th style="text-align:left;padding:8px;border:1px solid #ddd">${htmlEscape(technician)}</th><td style="padding:8px;border:1px solid #ddd">${count}</td>${ratingFields.map((field) => `<td style="padding:8px;border:1px solid #ddd">${average(field).toFixed(2)}</td>`).join('')}<td style="padding:8px;border:1px solid #ddd"><strong>${overall.toFixed(2)}</strong></td></tr>`
  ).join('');
  const html = `<h1>Resumen mensual de evaluaciones · ${htmlEscape(monthLabel)}</h1>${report.length ? `<table style="border-collapse:collapse"><thead><tr><th style="padding:8px;border:1px solid #ddd">Técnico</th><th style="padding:8px;border:1px solid #ddd">Respuestas</th>${ratingFields.map((field) => `<th style="padding:8px;border:1px solid #ddd">${htmlEscape(labels[field])} / 7</th>`).join('')}<th style="padding:8px;border:1px solid #ddd">General / 7</th></tr></thead><tbody>${htmlRows}</tbody></table>` : '<p>No se recibieron evaluaciones este mes.</p>'}`;

  try {
    await sendEmail(
      `Resumen Netsky · ${monthLabel}`,
      text,
      html,
      `netsky-monthly-report-${start.toISOString().slice(0, 7)}`,
    );
  } catch (sendError) {
    console.error('Monthly report email delivery failed:', sendError);
    return jsonResponse(request, { error: `Could not send the monthly report to ${companyEmail}.` }, 503);
  }
  return jsonResponse(request, { success: true, month: start.toISOString().slice(0, 7), technicians: report.length });
});
