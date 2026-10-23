import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import {
  companyEmail,
  corsHeaders,
  htmlEscape,
  isRating,
  jsonResponse,
  ratingFields,
  sendEmail,
  type Rating,
} from '../_shared/email.ts';

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders(request) });
  }
  if (request.method !== 'POST') return jsonResponse(request, { error: 'Method not allowed.' }, 405);

  let rating: unknown;
  try {
    rating = await request.json();
  } catch {
    return jsonResponse(request, { error: 'Request body must be valid JSON.' }, 400);
  }
  if (!isRating(rating)) return jsonResponse(request, { error: 'Evaluation data is invalid.' }, 400);

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse(request, { error: 'Evaluation storage is not configured.' }, 503);
  }
  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const clientIp = request.headers.get('cf-connecting-ip')
    ?? request.headers.get('x-real-ip')
    ?? request.headers.get('x-forwarded-for')?.split(',')[0].trim();
  if (!clientIp) return jsonResponse(request, { error: 'Could not verify the submission source.' }, 400);
  const ipDigest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(clientIp));
  const ipHash = [...new Uint8Array(ipDigest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
  const { data: allowed, error: rateLimitError } = await admin.rpc('consume_evaluation_rate_limit', {
    p_ip_hash: ipHash,
  });
  if (rateLimitError) {
    console.error('Could not apply evaluation rate limit:', rateLimitError.message);
    return jsonResponse(request, { error: 'Evaluation service is temporarily unavailable.' }, 503);
  }
  if (!allowed) return jsonResponse(request, { error: 'Se alcanzó el límite temporal. Inténtalo nuevamente más tarde.' }, 429);

  const { data: inserted, error: insertError } = await admin
    .from('technician_ratings')
    .upsert(rating, { onConflict: 'submission_id', ignoreDuplicates: true })
    .select('id,email_sent_at')
    .maybeSingle();
  if (insertError) {
    console.error('Could not save technician evaluation:', insertError.message);
    return jsonResponse(request, { error: 'The evaluation could not be saved.' }, 503);
  }

  const { data: saved, error: lookupError } = inserted
    ? { data: inserted, error: null }
    : await admin
      .from('technician_ratings')
      .select('id,email_sent_at')
      .eq('submission_id', rating.submission_id)
      .maybeSingle();
  if (lookupError || !saved) {
    console.error('Could not retrieve saved technician evaluation:', lookupError?.message);
    return jsonResponse(request, { error: 'The saved evaluation could not be verified.' }, 503);
  }
  if (saved.email_sent_at) return jsonResponse(request, { success: true, email_sent: true, duplicate: true });

  const labels: Record<typeof ratingFields[number], string> = {
    punctuality: 'Puntualidad',
    clarity: 'Explicación del servicio',
    cleanliness: 'Orden y limpieza',
    questions: 'Dudas resueltas',
    kindness: 'Amabilidad y trato',
    recommendation: 'Probabilidad de recomendación',
  };
  const rows = ratingFields.map((field) => ({
    label: labels[field],
    score: rating[field],
  }));
  const text = [
    'Nueva evaluación de instalación Netsky',
    `Técnico: ${rating.technician}`,
    ...rows.map(({ label, score }) => `${label}: ${score}/7`),
    `Comentario: ${rating.comment || 'Sin comentario'}`,
  ].join('\n');
  const htmlRows = rows.map(({ label, score }) =>
    `<tr><th style="text-align:left;padding:8px;border:1px solid #ddd">${htmlEscape(label)}</th><td style="padding:8px;border:1px solid #ddd">${score}/7</td></tr>`
  ).join('');
  const html = `<h1>Nueva evaluación de instalación</h1><p><strong>Técnico:</strong> ${htmlEscape(rating.technician)}</p><table style="border-collapse:collapse">${htmlRows}</table><p><strong>Comentario:</strong><br>${htmlEscape(rating.comment || 'Sin comentario').replace(/\n/g, '<br>')}</p>`;

  try {
    await sendEmail(
      `Evaluación de instalación · ${rating.technician}`,
      text,
      html,
      `netsky-evaluation-${rating.submission_id}`,
    );
  } catch (error) {
    console.error('Evaluation email delivery failed:', error);
    return jsonResponse(request, {
      success: false,
      saved: true,
      email_sent: false,
      error: `La evaluación quedó guardada, pero no se pudo enviar el correo a ${companyEmail}.`,
    }, 503);
  }

  const { error: updateError } = await admin
    .from('technician_ratings')
    .update({ email_sent_at: new Date().toISOString() })
    .eq('id', saved.id);
  if (updateError) console.error('Could not mark evaluation email as sent:', updateError.message);
  return jsonResponse(request, { success: true, email_sent: true });
});
