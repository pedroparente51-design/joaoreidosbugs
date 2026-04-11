"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  variant?: 'emerald' | 'primary' | 'gold';
}

import { Users, RefreshCw } from "lucide-react";
import { useDashboard } from "../layout/DashboardContext";
import { useEffect, useState } from "react";

export function MetricCard({ title, value, icon: Icon, variant = 'primary' }: MetricCardProps) {
  const { formatValue, isValuesVisible } = useDashboard();
  const iconVariants = {
    emerald: "bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20",
    primary: "bg-primary/10 text-primary border-primary/20",
    gold: "bg-accent-gold/10 text-accent-gold border-accent-gold/20",
  };

  return (
    <div className="glass-card p-4 md:p-6 flex-1 group transition-all duration-300 hover:border-white/10 shadow-sm">
      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <div className={cn("p-2 md:p-2.5 rounded-xl border transition-colors", iconVariants[variant])}>
          <Icon size={18} className="md:size-[18px]" />
        </div>
        <h3 className="text-[10px] md:text-[11px] font-black text-slate-500 uppercase tracking-[0.15em]">{title}</h3>
      </div>
      
      <div className="relative">
        <p className="text-2xl md:text-[32px] font-black text-white tracking-tighter leading-none">
          {formatValue(value)}
        </p>
      </div>
    </div>
  );
}

// ----- BasePeopleCard -----

export function BasePeopleCard() {
  const { userCount, formatValue, isValuesVisible } = useDashboard();
  const [isPulsing, setIsPulsing] = useState(false);
  const [summary, setSummary] = useState<{ profit: number; revenue: number; investment: number; roi: number } | null>(null);

  // Fetch real dashboard data
  useEffect(() => {
    const loadData = async () => {
      try {
        const api = (await import("@/lib/api")).default;
        const { data } = await api.get('/dashboard-summary');
        setSummary(data);
      } catch {}
    };
    loadData();
  }, []);

  // Animation effect when count changes
  useEffect(() => {
    if (userCount > 11725) {
      setIsPulsing(true);
      const timer = setTimeout(() => setIsPulsing(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [userCount]);

  // Calcula performance: ROI clampado entre 0-100 para a barra
  const roi = summary?.roi ?? 0;
  const barPercent = Math.max(0, Math.min(roi, 100));
  const isPositive = (summary?.profit ?? 0) >= 0;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  return (
    <div className="glass-card p-5 md:p-8 mb-6 relative overflow-hidden group">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-4 mb-8 md:mb-10">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-2xl text-primary border border-primary/20 shadow-[0_0_15px_rgba(251,191,36,0.1)] transition-transform group-hover:scale-105 duration-300">
             <Users size={24} />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[14px] md:text-[15px] font-black text-white tracking-tight leading-tight">Desempenho Geral da Operação</h3>
            <span className="text-[10px] md:text-[11px] text-slate-500 font-bold uppercase tracking-[0.1em]">Lucro vs Investimento</span>
          </div>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 py-2 md:py-2.5 px-4 md:px-5 rounded-xl transition-all group/btn"
        >
          <RefreshCw size={14} className="text-slate-400 group-hover/btn:rotate-180 transition-transform duration-500" />
          <span className="text-[10px] md:text-[11px] font-black text-slate-300 uppercase tracking-widest">Atualizar</span>
        </button>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-end gap-2">
          <div className="flex flex-col gap-2">
             <span className="text-[9px] md:text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">Lucro Geral</span>
             <p className={cn(
               "text-3xl md:text-5xl font-black tracking-tighter leading-none transition-all duration-500",
               isPositive ? "text-accent-emerald" : "text-red-500",
               isPulsing && "scale-105"
             )}>
               {summary ? formatValue(formatCurrency(summary.profit)) : '...'}
             </p>
          </div>
          <div className="flex flex-col items-end gap-2">
             <span className="text-[9px] md:text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">ROI</span>
             <p className={cn(
               "text-2xl md:text-[42px] font-black tracking-tighter leading-none",
               isPositive ? "text-primary" : "text-red-400"
             )}>
               {summary ? formatValue(`${roi.toFixed(1)}%`) : '...'}
             </p>
          </div>
        </div>

        <div className="h-2.5 md:h-3 w-full bg-slate-900 rounded-full p-0.5 border border-white/5 overflow-hidden">
          <div 
            className={cn(
              "h-full rounded-full transition-all duration-1000",
              isPositive 
                ? "bg-gradient-to-r from-accent-emerald to-primary shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                : "bg-gradient-to-r from-red-600 to-red-400 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
            )}
            style={{ width: `${barPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
