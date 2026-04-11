"use client";

import { Clock, Eye, EyeOff, LogOut, Menu, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDashboard } from "../layout/DashboardContext";
import { cn } from "@/lib/utils";
import api from "@/lib/api";
import { clearSession } from "@/lib/auth";

function formatCompact(value: number): string {
  if (value >= 1_000_000) return `+R$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `+R$${(value / 1_000).toFixed(0)}K`;
  return `+R$${value.toFixed(0)}`;
}

interface DashboardHeaderProps {
  onMenuClick?: () => void;
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const { isValuesVisible, toggleVisibility, formatValue, userName, userImage } = useDashboard();
  const [time, setTime] = useState(new Date());
  const [totalMovimentado, setTotalMovimentado] = useState<number | null>(null);
  const [userEmail, setUserEmail] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('user');
      if (stored) {
        try {
          const u = JSON.parse(stored);
          setUserEmail(u.email || "");
        } catch {}
      }
    }
  }, []);

  useEffect(() => {
    api.get('/dashboard-summary')
      .then(({ data }) => setTotalMovimentado(data.totalMovimentado ?? data.revenue ?? 0))
      .catch(() => setTotalMovimentado(null));
  }, []);

  const handleLogout = () => {
    clearSession();
    router.push('/login');
  };

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const formattedDate = time.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long'
  });

  return (
    <header
      className="h-16 md:h-20 border-b border-white/5 backdrop-blur-xl flex items-center justify-between px-4 md:px-8 z-50 shrink-0 sticky top-0 transition-all duration-300"
      style={{
        background: 'linear-gradient(to right, rgba(15, 11, 0, 0.9) 0%, rgba(15, 11, 0, 0.1) 260px, rgba(15, 11, 0, 0) 50%, rgba(0, 0, 0, 0.3) 100%)'
      }}
    >
      {/* Left side: Mobile Menu + Brand + Clock Integration */}
      <div className="flex items-center gap-2 md:gap-8">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="p-2 md:hidden hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors mr-1"
        >
          <Menu size={22} />
        </button>

        {/* Brand Identity */}
        <div className="flex items-center gap-3 md:pr-8 md:border-r md:border-white/5">
          <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
            <Image
              src="/img/logo1.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <h1 className="font-extrabold text-[14px] md:text-[16px] tracking-tight text-white leading-none">
              Rei dos Bugs <span className="text-primary text-[10px] align-top font-black">PRO</span>
            </h1>
            <div className="hidden sm:flex items-center gap-2 mt-1">
              <span className="text-[10px] text-gray-400 font-mono underline decoration-primary/30 truncate max-w-[150px]">{userName}</span>
            </div>
          </div>
        </div>

        {/* Clock & Info - Hidden on very small screens (iPhone SE) */}
        <div className="hidden xs:flex items-center gap-3 bg-white/5 border border-white/5 px-4 py-1.5 rounded-xl backdrop-blur-sm ml-2 md:ml-0">
          <div className="p-1.5 bg-primary/10 rounded-lg text-primary flex items-center gap-2">
            <Clock size={16} />
            <span className="text-[10px] font-bold border-l border-primary/20 pl-2">
              {isValuesVisible ? "🔓" : "🔒"}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] md:text-sm font-black text-white tracking-tighter leading-none">{formattedTime}</span>
            <span className="hidden md:block text-[9px] text-slate-500 font-bold uppercase tracking-widest">{formattedDate}</span>
          </div>
        </div>
      </div>

      {/* Right side: Actions & Status */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Movimentação - Compact on tablet, hidden on very small */}
        <div className="hidden sm:flex items-center gap-1 md:gap-2 bg-white/5 border border-white/10 rounded-xl px-2 md:px-3 py-1.5 md:py-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse"></span>
          <span className="text-white/70 text-[10px] md:text-xs font-medium truncate max-w-[60px] md:max-w-none">Operacional</span>
          <span className="text-white font-black text-[10px] md:text-xs flex items-center gap-1">
            <TrendingUp size={11} className="text-accent-emerald" />
            {totalMovimentado !== null
              ? formatValue(formatCompact(totalMovimentado))
              : <span className="animate-pulse opacity-50">···</span>}
          </span>
        </div>

        <a
          href="https://wa.me/5512981502272"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-lg border border-primary/20 hover:bg-primary/20 transition-all font-bold text-[11px] uppercase tracking-wider"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Suporte
        </a>

        <button
          onClick={() => {
            console.log("👆 CLIQUE NO OLHO DETECTADO");
            toggleVisibility();
          }}
          className={cn(
            "p-1.5 md:p-2 rounded-lg transition-all duration-300 flex items-center gap-2",
            isValuesVisible
              ? "hover:bg-white/5 text-slate-400"
              : "bg-primary/20 text-white border border-primary/30 shadow-[0_0_10px_rgba(251,191,36,0.2)]"
          )}
          title={isValuesVisible ? "Ocultar valores" : "Mostrar valores"}
        >
          {isValuesVisible ? <Eye size={18} /> : <EyeOff size={18} />}
          {!isValuesVisible && <span className="text-[10px] font-black">OCULTO</span>}
        </button>

        <button
          onClick={handleLogout}
          title="Sair"
          className="p-1.5 md:p-2 hover:bg-primary/10 hover:text-primary rounded-lg text-slate-400 transition-colors"
        >
          <LogOut size={18} />
        </button>

        <div className="hidden md:flex items-center pl-4 border-l border-white/5 ml-2">
          {userImage ? (
            <div className="relative w-10 min-w-[2.5rem] h-10 rounded-full border-2 border-primary/30 overflow-hidden shadow-[0_0_15px_rgba(251,191,36,0.2)]">
               <Image src={userImage} alt="Profile" fill className="object-cover" />
            </div>
          ) : (
            <div className="w-10 min-w-[2.5rem] h-10 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center text-primary font-black text-xs shadow-[0_0_15px_rgba(251,191,36,0.1)]">
               {userName?.[0]?.toUpperCase() || "U"}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
