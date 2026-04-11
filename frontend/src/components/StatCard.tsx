"use client";

import { LucideIcon, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  trendUp?: boolean;
  icon: LucideIcon;
  variant?: 'primary' | 'cyan' | 'pink' | 'emerald';
}

const variants = {
  primary: "bg-primary/20 text-primary-glow border-primary/20 bg-glow-primary",
  cyan: "bg-accent-cyan/20 text-accent-cyan border-accent-cyan/20 bg-glow-cyan",
  pink: "bg-accent-pink/20 text-accent-pink border-accent-pink/20 bg-glow-pink",
  emerald: "bg-accent-emerald/20 text-accent-emerald border-accent-emerald/20 bg-glow-emerald",
};

export function StatCard({ title, value, trend, trendUp = true, icon: Icon, variant = 'primary' }: StatCardProps) {
  return (
    <div className="gateway-card rounded-2xl p-6 relative overflow-hidden group">
      {/* Background Glow */}
      <div className={cn(
        "absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-20 transition-transform group-hover:scale-150",
        variant === 'primary' && "bg-primary",
        variant === 'cyan' && "bg-accent-cyan",
        variant === 'pink' && "bg-accent-pink",
        variant === 'emerald' && "bg-accent-emerald",
      )} />

      <div className="flex items-center justify-between mb-4 relative z-10">
        <h3 className="text-gray-400 font-medium text-sm tracking-wide">{title}</h3>
        <div className={cn("p-2.5 rounded-xl border", variants[variant])}>
          <Icon size={18} />
        </div>
      </div>

      <div className="relative z-10">
        <p className="text-2xl font-bold font-mono text-white tracking-tight">{value}</p>
        <div className="flex items-center gap-1.5 mt-2">
          <div className={cn(
            "flex items-center justify-center p-0.5 rounded-full",
            trendUp ? "text-green-400" : "text-red-400"
          )}>
            <TrendingUp size={12} className={cn(!trendUp && "rotate-180")} />
          </div>
          <span className={cn("text-xs font-bold", trendUp ? "text-green-400" : "text-red-400")}>
            {trend}
          </span>
          <span className="text-[11px] text-gray-500 font-medium ml-1">vs mês anterior</span>
        </div>
      </div>
    </div>
  );
}
