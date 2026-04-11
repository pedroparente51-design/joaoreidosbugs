"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, ArrowRight, TrendingUp, AlertCircle } from "lucide-react";
import { loginRequest, saveSession, isAuthenticated } from "@/lib/auth";
import { useDashboard } from "@/components/layout/DashboardContext";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { refreshUser } = useDashboard();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Se já está logado, redirecionar direto
  useEffect(() => {
    if (isAuthenticated()) {
      router.replace("/dashboard");
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      console.log("🚀 Iniciando login para:", email);
      const { token, user } = await loginRequest(email, password);
      console.log("✅ Login bem-sucedido, salvando sessão...");
      
      saveSession(token, user);
      refreshUser();
      
      console.log("📂 Sessão salva, redirecionando para o dashboard...");

      // Redirecionar para o destino original se vier de rota protegida
      const next = searchParams.get("next");
      router.push(next && next.startsWith("/") ? next : "/dashboard");
    } catch (err: any) {
      console.error("❌ Erro durante o login:", err);
      setError(err.message || "Credenciais inválidas ou erro de rede.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full grid-overlay opacity-30 pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-accent-cyan/10 rounded-full blur-[100px] animate-pulse-glow" />

      <div className="w-full max-w-[450px] z-10 animate-fade-in">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/20 text-primary mb-6 backdrop-blur-md border border-primary/30">
            <TrendingUp size={40} />
          </div>
          <h1 className="text-4xl font-black text-white mb-3 tracking-tight font-mono">
            REI DO BUG
          </h1>
          <p className="text-gray-400 font-medium">
            Logue na sua conta de alta performance
          </p>
        </div>

        <div className="gateway-card rounded-[32px] p-10 border-white/10">
          {/* Error Banner */}
          {error && (
            <div className="flex items-start gap-3 bg-primary/10 border border-primary/30 rounded-2xl p-4 mb-6 animate-fade-in">
              <AlertCircle size={16} className="text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-primary font-semibold leading-snug">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-8">
            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                E-mail de Acesso
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="login-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  className="gateway-input block w-full pl-12 pr-4 py-4 rounded-2xl text-sm font-medium"
                  placeholder="seu@email.com"
                  autoComplete="email"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Senha */}
            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Senha Secreta
                </label>
                <a href="#" className="text-[11px] font-bold text-primary hover:text-white transition-colors">
                  Esqueceu?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="login-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  className="gateway-input block w-full pl-12 pr-4 py-4 rounded-2xl text-sm font-medium"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  disabled={loading}
                />
              </div>
            </div>

            <button
              id="login-submit"
              type="submit"
              disabled={loading}
              className="gateway-btn-primary w-full flex items-center justify-center py-4 px-6 rounded-2xl text-[15px] shadow-[0_10px_30px_rgba(251,191,36,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span className="font-bold uppercase tracking-wider">Autenticando...</span>
                </div>
              ) : (
                <span className="flex items-center gap-2 font-bold uppercase tracking-wider">
                  Entrar no Dashboard <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 font-medium">
              Não tem acesso?{" "}
              <Link
                href="/register"
                className="text-white hover:text-primary font-bold transition-colors underline-offset-4 hover:underline"
              >
                Solicitar conta / Registrar
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-10 text-center text-[11px] text-gray-600 font-bold uppercase tracking-[0.2em]">
          Plataforma Segura SSL 256-bit
        </p>
      </div>
    </div>
  );
}
