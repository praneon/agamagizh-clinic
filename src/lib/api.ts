// Base URL of the backend (Express server on the Oracle VM) that handles
// appointment/inquiry storage and WhatsApp sending. Set VITE_API_BASE_URL
// in your .env (see .env.example) once the backend is deployed.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

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
}

export interface InquiryPayload {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

export const submitAppointment = (payload: AppointmentPayload) =>
  post<{ id: string }>('/api/appointments', payload);

export const submitInquiry = (payload: InquiryPayload) =>
  post<{ id: string }>('/api/inquiries', payload);
