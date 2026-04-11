/**
 * auth.ts — Funções centrais de autenticação
 * Usadas pelo login, register, guards e logout.
 */

const TOKEN_KEY = "token";
const USER_KEY = "user";

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
}

// ── Salvar sessão ──────────────────────────────────────────────────────────
export function saveSession(token: string, user: AuthUser): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

// ── Limpar sessão ──────────────────────────────────────────────────────────
export function clearSession(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

// ── Buscar token ───────────────────────────────────────────────────────────
export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

// ── Buscar usuário ─────────────────────────────────────────────────────────
export function getUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

// ── Verificar autenticação ─────────────────────────────────────────────────
export function isAuthenticated(): boolean {
  return !!getToken();
}

// ── Verificar se é ADMIN ───────────────────────────────────────────────────
export function isAdmin(): boolean {
  return getUser()?.role === "ADMIN";
}

// ── Chamada de login (retorna token + user) ────────────────────────────────
export async function loginRequest(
  email: string,
  password: string
): Promise<{ token: string; user: AuthUser }> {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Pragma": "no-cache"
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || "Credenciais inválidas.");
  }
  return { token: data.token, user: data.user };
}

// ── Chamada de register ────────────────────────────────────────────────────
export async function registerRequest(
  name: string,
  email: string,
  password: string
): Promise<void> {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "ngrok-skip-browser-warning": "true",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Pragma": "no-cache"
    },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json();
  if (!res.ok) {
    if (data.error === "User already exists") {
      throw new Error("Este e-mail já está cadastrado. Faça login.");
    }
    throw new Error(data.error || "Erro ao registrar.");
  }
}
