// Base URL of the backend (Express server on the Oracle VM) that handles
// appointment/inquiry storage and WhatsApp sending. Set VITE_API_BASE_URL
// in your .env (see .env.example) once the backend is deployed.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';
const CHATWOOT_PUBLIC_API = 'https://admin.agamagizhnaturecure.com/public/api/v1';
const CHATWOOT_WEBSITE_TOKEN = 'CqbKHGZveVSYcsHx9vLLabyg';
export const isBackendConfigured = Boolean(API_BASE_URL);

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

async function post<T>(path: string, body: unknown): Promise<T> {
  if (!API_BASE_URL) {
    throw new ApiError(
      'Booking service is not configured yet. Please message us on WhatsApp instead.',
      0
    );
  }

  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new ApiError(data.error ?? 'Something went wrong. Please try again.', res.status);
  }

  return res.json();
}

export interface AppointmentPayload {
  name: string;
  age?: string;
  phone: string;
  concern?: string;
  sessionLabel?: string;
  consultationMode?: 'online' | 'clinic';
  preferredDate?: string;
  preferredTime?: string;
  whatsappConsent: boolean;
}

export interface InquiryPayload {
  name: string;
  phone: string;
  email?: string;
  message: string;
  whatsappConsent: boolean;
}

export async function submitAppointment(payload: AppointmentPayload) {
  const res = await fetch(`${CHATWOOT_PUBLIC_API}/appointment_requests`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      appointment_request: {
        name: payload.name,
        age: payload.age || null,
        phone: payload.phone,
        concern: payload.concern,
        consultation_mode: payload.consultationMode,
        preferred_date: payload.preferredDate,
        preferred_time: payload.preferredTime,
        whatsapp_consent: payload.whatsappConsent,
        website_token: CHATWOOT_WEBSITE_TOKEN,
      },
    }),
  });
  if (!res.ok) throw new ApiError('We could not save your appointment request. Please call or WhatsApp us.', res.status);
  return res.json() as Promise<{ id: number; status: string }>;
}

export const submitInquiry = (payload: InquiryPayload) =>
  post<{ id: string }>('/api/inquiries', payload);

export interface DataDeletionPayload {
  name: string;
  phone: string;
  email?: string;
  details?: string;
  website?: string;
}

export async function submitDataDeletionRequest(payload: DataDeletionPayload) {
  const res = await fetch('https://admin.agamagizhnaturecure.com/public/api/v1/data_deletion_requests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data_deletion_request: { ...payload, website_token: CHATWOOT_WEBSITE_TOKEN } }),
  });
  if (!res.ok) throw new ApiError('We could not submit your request. Please call or WhatsApp us.', res.status);
  return res.json() as Promise<{ id: number; status: string; message: string }>;
}

/**
 * Real Chatwoot agent presence, via our own bridge (the widget SDK has no
 * public API for this). Returns null — not "offline" — when the bridge
 * isn't configured/reachable, so callers can fall back to neutral copy
 * instead of asserting a status we don't actually know.
 */
export async function fetchChatAvailability(): Promise<{ online: boolean } | null> {
  if (!API_BASE_URL) return null;
  try {
    const res = await fetch(`${API_BASE_URL}/api/status`, { signal: AbortSignal.timeout(4000) });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
