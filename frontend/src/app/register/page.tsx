"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Lock,
  Mail,
  User,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { registerRequest, loginRequest, saveSession } from "@/lib/auth";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState<"idle" | "registering" | "logging-in" | "done">("idle");

  const clearError = () => setError("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setLoading(true);

    try {
      // 1. Criar conta
      setStep("registering");
      await registerRequest(name, email, password);

      // 2. Login automático com as mesmas credenciais
      setStep("logging-in");
      const { token, user } = await loginRequest(email, password);

      // 3. Salvar sessão
      saveSession(token, user);

      // 4. Redirecionar para o dashboard
      setStep("done");
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Erro ao criar conta. Tente novamente.");
      setStep("idle");
      setLoading(false);
    }
  };

  const stepLabel = {
    idle: null,
    registering: "Criando conta...",
    "logging-in": "Entrando automaticamente...",
    done: "Redirecionando...",
  }[step];

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-background font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full grid-overlay opacity-30 pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-accent-cyan/10 rounded-full blur-[100px] animate-pulse-glow" />

      <div className="w-full max-w-[450px] z-10 animate-fade-in">
        <div className="text-center mb-10">
          <div>
            <TrendingUp size={40} />
          </div>
          <h1 className="text-4xl font-black text-white mb-3 tracking-tight font-mono uppercase">
            CRIAR CONTA
          </h1>
          <p className="text-gray-400 font-medium">
            Junte-se à elite dos bugs agora mesmo.
          </p>
        </div>

        <div className="gateway-card rounded-[32px] p-10 border-white/10">
          {/* Error Banner */}
          {error && (
            <div className="flex items-start gap-3 bg-primary/10 border border-primary/30 rounded-2xl p-4 mb-6">
              <AlertCircle size={16} className="text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-primary font-semibold leading-snug">{error}</p>
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-6">
            {/* Nome */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Nome Completo
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-500" />
                </div>
                <input
                  id="register-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => { setName(e.target.value); clearError(); }}
                  className="gateway-input block w-full pl-12 pr-4 py-4 rounded-2xl text-sm font-medium"
                  placeholder="Seu Nome"
                  autoComplete="name"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                E-mail de Acesso
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-500" />
                </div>
                <input
                  id="register-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); clearError(); }}
                  className="gateway-input block w-full pl-12 pr-4 py-4 rounded-2xl text-sm font-medium"
                  placeholder="seu@email.com"
                  autoComplete="email"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Senha */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
                Senha Secreta (mín. 6)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-500" />
                </div>
                <input
                  id="register-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); clearError(); }}
                  className="gateway-input block w-full pl-12 pr-4 py-4 rounded-2xl text-sm font-medium"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  disabled={loading}
                />
              </div>
              {password.length > 0 && password.length < 6 && (
                <p className="text-[11px] text-primary/80 font-semibold ml-1">
                  {6 - password.length} caractere(s) para o mínimo
                </p>
              )}
            </div>

            <button
              id="register-submit"
              type="submit"
              disabled={loading}
              className="gateway-btn-primary w-full flex items-center justify-center py-4 px-6 rounded-2xl text-[14px] shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition-all active:scale-95"
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span className="font-bold uppercase tracking-widest text-[13px]">
                    {stepLabel}
                  </span>
                </div>
              ) : (
                <span className="flex items-center gap-2 font-bold uppercase tracking-widest">
                  REGISTRAR AGORA <ArrowRight size={16} />
                </span>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 font-medium">
              Já tem uma conta?{" "}
              <Link
                href="/login"
                className="text-white hover:text-primary font-bold transition-colors underline-offset-4 hover:underline"
              >
                Fazer Login
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-10 text-center text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
          Plataforma Segura SSL 256-bit
        </p>
      </div>
    </div>
  );
}
