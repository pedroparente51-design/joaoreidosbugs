"use client";

import { Activity, PieChart, History, TrendingUp, TrendingDown, DollarSign, RefreshCw, WifiOff } from "lucide-react";
import {
  ResponsiveContainer,
  PieChart as RePieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { useDashboard } from "@/components/layout/DashboardContext";
import { useEffect, useState } from "react";
import api from "@/lib/api";

const pieData = [
  { name: 'Afiliados', value: 45, color: '#e11d48' },
  { name: 'Direto', value: 30, color: '#0ea5e9' },
  { name: 'Outros', value: 25, color: '#6366f1' },
];

// Formats a number as BRL currency string
const formatBRL = (val: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Math.abs(val));

// Relative time string in Portuguese
function relativeTime(dateStr: string): string {
  const diffMs = Date.now() - new Date(dateStr).getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return "agora";
  if (diffMin < 60) return `${diffMin} min atrás`;
  const diffH = Math.floor(diffMin / 60);
  if (diffH < 24) return `${diffH}h atrás`;
  const diffD = Math.floor(diffH / 24);
  return `${diffD}d atrás`;
}

// -- Finance Evolution (keeps static chart for visual) --
export function FinanceEvolution() {
  const [chartData, setChartData] = useState([
    { name: 'Seg', valor: 0 },
    { name: 'Ter', valor: 0 },
    { name: 'Qua', valor: 0 },
    { name: 'Qui', valor: 0 },
    { name: 'Sex', valor: 0 },
    { name: 'Sáb', valor: 0 },
    { name: 'Dom', valor: 0 },
  ]);

  useEffect(() => {
    // Load real weekly data from daily records
    const fetchWeekData = async () => {
      try {
        const { data } = await api.get('/daily-sheets');
        if (!data || data.length === 0) return;

        const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        const totals: Record<string, number> = {};
        dayNames.forEach(d => { totals[d] = 0; });

        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);

        data.forEach((sheet: any) => {
          (sheet.records || []).forEach((r: any) => {
            const d = new Date(r.date);
            if (d >= sevenDaysAgo) {
              const name = dayNames[d.getDay()];
              totals[name] = (totals[name] || 0) + r.withdraw;
            }
          });
        });

        // Build ordered last-7-days labels
        const ordered = [];
        for (let i = 6; i >= 0; i--) {
          const d = new Date();
          d.setDate(d.getDate() - i);
          const name = dayNames[d.getDay()];
          ordered.push({ name, valor: Math.round(totals[name] || 0) });
        }
        setChartData(ordered);
      } catch (_) {}
    };
    fetchWeekData();
  }, []);

  return (
    <div className="glass-card p-5 md:p-8 flex-1 min-h-[350px] md:min-h-[450px] flex flex-col relative overflow-hidden group">
      <div className="mb-8 flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <h3 className="text-xs md:text-sm font-black text-white flex items-center gap-2 uppercase tracking-wide">
            <Activity size={16} className="text-primary" /> Evolução Financeira
          </h3>
          <p className="text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            Saques nos últimos 7 dias
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
          <TrendingUp size={12} className="text-emerald-500" />
          <span className="text-[10px] font-black text-emerald-500">Livro Diário</span>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#e11d48" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#e11d48" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#475569', fontSize: 10, fontWeight: 'bold' }}
              dy={10}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#0e1117', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
              itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
              formatter={(v: any) => [`R$ ${v?.toLocaleString('pt-BR') || '0,00'}`, 'Saque']}
            />
            <Area
              type="monotone"
              dataKey="valor"
              stroke="#e11d48"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function CapitalDistribution() {
  return (
    <div className="glass-card p-5 md:p-8 min-h-[250px] md:min-h-[300px] flex flex-col group transition-all">
      <div className="flex items-center gap-2 mb-6 md:mb-8">
        <PieChart size={16} className="text-primary" />
        <h3 className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">Distribuição de Lucro</h3>
      </div>

      <div className="flex-1 flex items-center justify-center relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Global</span>
          <span className="text-lg font-black text-white">100%</span>
        </div>
        <ResponsiveContainer width="100%" height={160}>
          <RePieChart>
            <Pie
              data={pieData}
              innerRadius={55}
              outerRadius={75}
              paddingAngle={8}
              dataKey="value"
              stroke="none"
              animationBegin={0}
              animationDuration={1500}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} className="outline-none" />
              ))}
            </Pie>
          </RePieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {pieData.map(item => (
          <div key={item.name} className="flex flex-col items-center gap-1">
            <span className="text-[8px] font-black text-slate-500 uppercase tracking-tighter">{item.name}</span>
            <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Types ---
interface ActivityItem {
  type: 'WITHDRAW' | 'LOSS' | 'EXPENSE' | 'COST';
  label: string;
  value: number;
  date: string;
}

const TYPE_CONFIG = {
  WITHDRAW: { icon: TrendingUp,    color: 'text-emerald-500', bg: 'bg-emerald-500/10', sign: '+' },
  LOSS:     { icon: TrendingDown,  color: 'text-primary',     bg: 'bg-primary/10',     sign: '' },
  EXPENSE:  { icon: DollarSign,    color: 'text-orange-400',  bg: 'bg-orange-400/10',  sign: '-' },
  COST:     { icon: TrendingDown,  color: 'text-accent-blue', bg: 'bg-accent-blue/10', sign: '-' },
};

export function RecentActivity() {
  const { formatValue } = useDashboard();
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchActivities = async () => {
    setLoading(true);
    setError(false);
    try {
      const { data } = await api.get('/recent-activity');
      setActivities(data);
    } catch (_) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchActivities(); }, []);

  return (
    <div className="glass-card p-5 md:p-8 mt-4 md:mt-6 flex-1 flex flex-col">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div className="flex items-center gap-2">
          <History size={16} className="text-primary" />
          <h3 className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">Atividade Recente</h3>
        </div>
        <button
          onClick={fetchActivities}
          className="p-1.5 hover:bg-white/5 rounded-lg text-slate-500 hover:text-white transition-colors"
          title="Atualizar"
        >
          <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>

      <div className="flex-1 space-y-3">
        {loading && (
          <div className="flex flex-col gap-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] animate-pulse">
                <div className="w-8 h-8 rounded-lg bg-white/5" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-2.5 w-2/3 rounded bg-white/5" />
                  <div className="h-2 w-1/3 rounded bg-white/5" />
                </div>
                <div className="h-3 w-16 rounded bg-white/5" />
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="flex flex-col items-center justify-center py-10 gap-3 text-slate-600">
            <WifiOff size={24} />
            <p className="text-[10px] font-bold uppercase tracking-widest">Sem conexão</p>
          </div>
        )}

        {!loading && !error && activities.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10 gap-2 opacity-30">
            <History size={28} />
            <p className="text-[10px] font-bold uppercase tracking-widest">Sem atividade ainda</p>
            <p className="text-[9px]">Adicione um registro no Controle Diário.</p>
          </div>
        )}

        {!loading && !error && activities.map((act, i) => {
          const cfg = TYPE_CONFIG[act.type] || TYPE_CONFIG.WITHDRAW;
          const Icon = cfg.icon;
          const displayValue = cfg.sign + formatBRL(act.value);
          return (
            <div
              key={i}
              className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/5 transition-all group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={`p-2 rounded-lg shrink-0 ${cfg.bg} ${cfg.color}`}>
                  <Icon size={14} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-white uppercase truncate">{act.label}</span>
                  <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest">
                    {relativeTime(act.date)}
                  </span>
                </div>
              </div>
              <span className={`text-xs font-black ${cfg.color} font-mono ml-3 shrink-0`}>
                {formatValue(displayValue)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
