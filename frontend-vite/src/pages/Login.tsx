import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Lock, Mail, ArrowRight, TrendingUp, AlertCircle } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useDashboard } from "../context/DashboardContext";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, refreshUser } = useDashboard();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/dashboard";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;
      
      await refreshUser();
      navigate(from, { replace: true });
    } catch (err: any) {
      console.error("Login Error:", err);
      setError(err.message || "Credenciais inválidas ou erro de rede.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-background">
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
          {error && (
            <div className="flex items-start gap-3 bg-primary/10 border border-primary/30 rounded-2xl p-4 mb-6">
              <AlertCircle size={16} className="text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-primary font-semibold leading-snug">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                E-mail de Acesso
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  className="gateway-input block w-full pl-12 pr-4 py-4 rounded-2xl text-sm font-medium"
                  placeholder="seu@email.com"
                  disabled={loading}
                />
              </div>
            </div>

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
                  type="password"
                  required
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  className="gateway-input block w-full pl-12 pr-4 py-4 rounded-2xl text-sm font-medium"
                  placeholder="••••••••"
                  disabled={loading}
                />
              </div>
            </div>

            <button
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
              <Link to="/register" className="text-white hover:text-primary font-bold transition-colors underline-offset-4 hover:underline">
                Solicitar conta / Registrar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
