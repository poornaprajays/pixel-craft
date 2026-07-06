export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

type Json = Record<string, unknown>;

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = (data && (data.error as string)) || `Request failed with ${res.status}`;
    throw new Error(message);
  }
  return data as T;
}

export const authApi = {
  signup: (payload: { username: string; email: string; password: string }) =>
    request<{ message: string; user: { id: string; username: string; email: string } }>(
      '/api/auth/signup',
      { method: 'POST', body: JSON.stringify(payload) }
    ),
  login: (payload: { email: string; password: string }) =>
    request<{ token: string; user: { id: string; username: string; email: string } }>(
      '/api/auth/login',
      { method: 'POST', body: JSON.stringify(payload) }
    ),
};


