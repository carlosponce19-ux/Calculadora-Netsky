export const companyEmail = 'ventas01netsky@gmail.com';
export const technicians = [
  'Juan Carlos Troncoso',
  'Felipe Ojeda Lobos',
  'Rodrigo Caro Obando',
];

export const ratingFields = [
  'punctuality',
  'clarity',
  'cleanliness',
  'questions',
  'kindness',
  'recommendation',
] as const;

export type RatingField = typeof ratingFields[number];
export type Rating = Record<RatingField, number> & {
  submission_id: string;
  technician: string;
  comment: string;
};

export function corsHeaders(request: Request) {
  const origin = request.headers.get('origin') ?? '';
  const configuredOrigin = Deno.env.get('ALLOWED_ORIGIN');
  const allowed = origin === configuredOrigin
    || origin.startsWith('http://localhost:')
    || origin.startsWith('http://127.0.0.1:');

  return {
    'Access-Control-Allow-Origin': allowed ? origin : 'null',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Vary': 'Origin',
  };
}

export function jsonResponse(request: Request, body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(request), 'Content-Type': 'application/json' },
  });
}

export function isRating(value: unknown): value is Rating {
  if (!value || typeof value !== 'object') return false;
  const rating = value as Record<string, unknown>;
  return typeof rating.submission_id === 'string'
    && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(rating.submission_id)
    && typeof rating.technician === 'string'
    && technicians.includes(rating.technician)
    && ratingFields.every((field) => {
      const score = rating[field];
      return typeof score === 'number'
        && Number.isInteger(score)
        && score >= 1
        && score <= 7;
    })
    && typeof rating.comment === 'string'
    && rating.comment.length <= 2000;
}

export function htmlEscape(value: string) {
  const entities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return value.replace(/[&<>"']/g, (character) => entities[character]);
}

export async function sendEmail(subject: string, text: string, html: string, idempotencyKey: string) {
  const apiKey = Deno.env.get('RESEND_API_KEY');
  const from = Deno.env.get('RESEND_FROM_EMAIL');
  if (!apiKey || !from) throw new Error('RESEND_API_KEY and RESEND_FROM_EMAIL must be configured.');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'Idempotency-Key': idempotencyKey,
    },
    body: JSON.stringify({
      from,
      to: [companyEmail],
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Resend rejected the email (${response.status}): ${error}`);
  }
}
