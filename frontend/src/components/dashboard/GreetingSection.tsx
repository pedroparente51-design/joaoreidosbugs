"use client";

import { useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";
import api from "@/lib/api";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Bom dia";
  if (hour < 18) return "Boa tarde";
  return "Boa noite";
}

function formatCompact(value: number): string {
  if (value >= 1_000_000) return `+R$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `+R$${(value / 1_000).toFixed(0)}K`;
  return `+R$${value.toFixed(0)}`;
}

export function GreetingSection() {
  const [userName, setUserName] = useState("Usuário");
  const [totalMovimentado, setTotalMovimentado] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load user name
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (user.name) setUserName(user.name.split(" ")[0]);
    } catch (e) {}

    // Fetch real operacional value
    const fetchOperacional = async () => {
      try {
        const { data } = await api.get("/dashboard-summary");
        setTotalMovimentado(data.totalMovimentado ?? data.revenue ?? 0);
      } catch (e) {
        setTotalMovimentado(0);
      } finally {
        setLoading(false);
      }
    };
    fetchOperacional();
  }, []);

  return (
    <div className="flex flex-col gap-2 mb-6 md:mb-10 pt-2 md:pt-4 animate-fade-in">
      {/* Operacional Badge */}
      <div className="flex items-center gap-2 bg-accent-emerald/10 text-accent-emerald px-3 py-1.5 rounded-full w-fit border border-accent-emerald/20 mb-2 md:mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
        </span>
        <span className="text-[10px] font-black uppercase tracking-widest pl-1">
          Operacional Ativo
        </span>
        {!loading && totalMovimentado !== null && (
          <>
            <span className="text-accent-emerald/40 text-[10px] font-bold">·</span>
            <span className="flex items-center gap-1 text-[10px] font-black text-accent-emerald">
              <TrendingUp size={11} />
              {formatCompact(totalMovimentado)} movimentado
            </span>
          </>
        )}
        {loading && (
          <>
            <span className="text-accent-emerald/40 text-[10px] font-bold">·</span>
            <span className="text-[10px] font-black text-accent-emerald/60 animate-pulse">
              Carregando...
            </span>
          </>
        )}
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl lg:text-[54px] font-black text-white leading-[1.1] tracking-tighter">
            {getGreeting()},{" "}
            <span className="text-primary text-glow">{userName}</span>
          </h2>
          <p className="text-slate-500 text-xs md:text-sm font-medium mt-1">
            Seja bem-vindo de volta ao seu dashboard operacional.
          </p>
        </div>
      </div>
    </div>
  );
}
