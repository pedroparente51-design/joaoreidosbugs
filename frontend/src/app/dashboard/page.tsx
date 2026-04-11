"use client";

import { useEffect, useState, useMemo } from "react";
import { GreetingSection } from "@/components/dashboard/GreetingSection";
import { BasePeopleCard, MetricCard } from "@/components/cards/MetricCard";
import { FinanceEvolution, CapitalDistribution, RecentActivity } from "@/components/dashboard/FinanceSection";
import { ServerOperations } from "@/components/dashboard/ServerOperations";
import { DollarSign, Activity, Target, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDashboard } from "@/components/layout/DashboardContext";
import api from "@/lib/api";

// --- Types ---
interface DailyRecord {
  id: string;
  date: string;
  investment: number;
  withdraw: number;
}

interface Sheet {
  id: string;
  records: DailyRecord[];
  proxyCost: number;
  smsCost: number;
}

interface Expense {
  amount: number;
}

type Period = '1D' | '7D' | '15D' | '30D' | 'TUDO';

export default function DashboardPage() {
  const { formatValue } = useDashboard();
  const [summary, setSummary] = useState({
    investment: 0,
    revenue: 0,
    profit: 0,
    roi: 0
  });

  // API Fetching
  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const { data } = await api.get('/dashboard-summary');
        setSummary(data);
      } catch (e) {
        console.error("Error loading dashboard data", e);
      }
    };
    loadDashboardData();
  }, []);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
  };

  return (
    <div className="space-y-6 md:space-y-10 animate-fade-in-up pb-20">
      <GreetingSection />
      


      <BasePeopleCard />

      {/* Metrics Section - Real Merged Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        <MetricCard 
          title="Faturamento" 
          value={formatValue(formatCurrency(summary.revenue))} 
          icon={DollarSign} 
          variant="primary" 
        />
        <MetricCard 
          title="Investimento" 
          value={formatValue(formatCurrency(summary.investment))} 
          icon={Target} 
          variant="gold" 
        />
        <MetricCard 
          title="Lucro Líquido" 
          value={formatValue(formatCurrency(summary.profit))} 
          icon={Activity} 
          variant="emerald" 
        />
        <MetricCard 
          title="ROI Global" 
          value={formatValue(`${summary.roi.toFixed(1)}%`)} 
          icon={Crown} 
          variant="emerald" 
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 flex flex-col">
          <FinanceEvolution />
        </div>
        <div className="flex flex-col gap-6">
          <CapitalDistribution />
          <RecentActivity />
        </div>
      </div>

      <ServerOperations />
    </div>
  );
}
