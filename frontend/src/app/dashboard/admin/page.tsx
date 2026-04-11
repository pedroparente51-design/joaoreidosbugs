"use client";

import { useState, useEffect } from "react";
import { 
  ShieldAlert, 
  Users, 
  Users2, 
  Zap, 
  TrendingUp, 
  TrendingDown, 
  Target, 
  CircleDollarSign, 
  History, 
  Activity,
  Trash2,
  ShieldCheck,
  Ban,
  MoreVertical,
  CheckCircle2,
  XCircle,
  Clock,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  ShieldAlert as ShieldAlertIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import api from "@/lib/api";
import { useDashboard } from "@/components/layout/DashboardContext";
import { useRouter } from "next/navigation";

import { AuthGuard } from "@/components/layout/AuthGuard";

type AdminSection = "METRICS" | "USERS" | "TEAMS" | "FEED" | "LOGS";

export default function AdminPage() {
  const { userRole, formatValue } = useDashboard();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<AdminSection>("METRICS");

  // Data State
  const [metrics, setMetrics] = useState<any>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [teams, setTeams] = useState<any[]>([]);
  const [feed, setFeed] = useState<any[]>([]);
  const [logs, setLogs] = useState<any[]>([]);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [mt, us, tm, fd, lg] = await Promise.all([
        api.get("/admin/metrics"),
        api.get("/admin/users"),
        api.get("/admin/teams"),
        api.get("/admin/feed"),
        api.get("/admin/logs")
      ]);
      setMetrics(mt.data);
      setUsers(us.data);
      setTeams(tm.data);
      setFeed(fd.data);
      setLogs(lg.data);
    } catch (e) {
      console.error("Error fetching admin data", e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const handleUpdateRole = async (userId: number, role: string) => {
    try {
      await api.post(`/admin/users/${userId}/role`, { role });
      fetchAllData();
    } catch (e) { alert("Erro ao atualizar papel"); }
  };

  const handleUpdateStatus = async (userId: number, status: string) => {
    try {
      await api.post(`/admin/users/${userId}/status`, { status });
      fetchAllData();
    } catch (e) { alert("Erro ao atualizar status"); }
  };

  const handleDeleteUser = async (userId: number) => {
    if (!confirm("Tem certeza que deseja excluir este usuário permanentemente?")) return;
    try {
      await api.delete(`/admin/users/${userId}`);
      fetchAllData();
    } catch (e) { alert("Erro ao excluir usuário"); }
  };

  if (loading && !metrics) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <AuthGuard requireAdmin={true}>
      <div className="space-y-10 animate-fade-in-up pb-20 px-4">
        {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-primary/10 rounded-2xl text-primary border border-primary/20 shadow-lg shadow-primary/10">
            <ShieldAlertIcon size={32} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-black text-white tracking-tighter uppercase">Painel Administrativo</h1>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] mt-1">Controle Global da Plataforma</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
           <button onClick={fetchAllData} className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-[10px] font-black text-white uppercase tracking-widest transition-all">Atualizar Dados</button>
        </div>
      </div>

      {/* Navigation */}
      <div className="w-full bg-white/[0.03] border border-white/5 p-1 rounded-2xl flex no-scrollbar overflow-x-auto">
        {(["METRICS", "USERS", "TEAMS", "FEED", "LOGS"] as const).map((section) => {
          const labels: any = { METRICS: "Métricas", USERS: "Usuários", TEAMS: "Equipes", FEED: "Feed Global", LOGS: "Logs" };
          const icons: any = { METRICS: TrendingUp, USERS: Users, TEAMS: Users2, FEED: Activity, LOGS: History };
          const Icon = icons[section];
          return (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={cn(
                "flex-1 min-w-[140px] py-3.5 flex items-center justify-center gap-2 text-[10px] font-black rounded-xl transition-all uppercase tracking-widest",
                activeSection === section 
                  ? "bg-white text-black shadow-xl" 
                  : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
              )}
            >
              <Icon size={14} />
              {labels[section]}
            </button>
          );
        })}
      </div>

      {/* Content Sections */}
      {activeSection === "METRICS" && metrics && (
        <div className="space-y-8 animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AdminMetricCard title="Usuários Totais" value={metrics.totalUsers} icon={<Users size={20} />} color="blue" />
            <AdminMetricCard title="Equipes Ativas" value={metrics.totalTeams} icon={<Users2 size={20} />} color="purple" />
            <AdminMetricCard title="Lucro Bruto Global" value={formatValue(`R$ ${metrics.totalRevenue?.toLocaleString()}`)} icon={<TrendingUp size={20} />} color="emerald" />
            <AdminMetricCard title="Prejuízo Acumulado" value={formatValue(`R$ ${metrics.totalLoss?.toLocaleString()}`)} icon={<TrendingDown size={20} />} color="red" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-card p-8 space-y-6">
              <h3 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                <Target size={18} className="text-primary" /> Objetivos da Plataforma
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-2">
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Metas Ativas</p>
                  <p className="text-3xl font-black text-white">{metrics.activeGoals}</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-2">
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Metas Batidas</p>
                  <p className="text-3xl font-black text-accent-cyan">{metrics.closedGoals}</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 space-y-6 bg-gradient-to-br from-primary/10 to-transparent">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-2">
                  <Zap size={18} className="text-primary" /> Performance de Hoje
                </h3>
                <span className="text-[10px] font-black text-primary px-3 py-1 bg-primary/10 rounded-full animate-pulse">LIVE</span>
              </div>
              <div className="space-y-4">
                 <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">Lucro em tempo real</span>
                    <span className="text-2xl font-black text-white">{formatValue(`R$ ${metrics.todayRevenue?.toLocaleString()}`)}</span>
                 </div>
                 <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[65%] animate-shimmer" />
                 </div>
                 <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">+12% em relação à média diária</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === "USERS" && (
        <div className="glass-card overflow-hidden animate-fade-in">
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <h2 className="text-sm font-black text-white uppercase tracking-widest">Gerenciamento de Usuários</h2>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-black text-slate-400">{users.length} USUÁRIOS</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-white/5 text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">
                <tr>
                  <th className="px-6 py-4">Usuário</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Equipe</th>
                  <th className="px-6 py-4">Criação</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {users.map(u => (
                  <tr key={u.id} className="hover:bg-white/[0.01] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-black text-[10px]">{u.name.charAt(0)}</div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-white">{u.name}</span>
                          <span className="text-[10px] text-slate-500 font-mono">{u.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <select 
                        className="bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-[10px] font-black text-white uppercase outline-none focus:border-primary/50"
                        value={u.role}
                        onChange={(e) => handleUpdateRole(u.id, e.target.value)}
                      >
                        <option value="USER" className="bg-[#0f0b00]">OPERATOR</option>
                        <option value="ADMIN" className="bg-[#0f0b00]">ADMIN</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                       <span className={cn(
                          "px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-widest",
                          u.status === 'ACTIVE' ? "bg-accent-emerald/10 text-accent-emerald" : "bg-primary/10 text-primary"
                       )}>
                          {u.status}
                       </span>
                    </td>
                    <td className="px-6 py-4 text-xs font-bold text-slate-400">{u.team}</td>
                    <td className="px-6 py-4 text-[10px] text-slate-500 font-bold">{new Date(u.createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-4 text-right">
                       <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => handleUpdateStatus(u.id, u.status === 'ACTIVE' ? 'BANNED' : 'ACTIVE')}
                            className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-primary transition-all" 
                            title={u.status === 'ACTIVE' ? "Banir" : "Ativar"}
                          >
                            <Ban size={14} />
                          </button>
                          <button 
                            onClick={() => handleDeleteUser(u.id)}
                            className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-primary transition-all"
                          >
                            <Trash2 size={14} />
                          </button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeSection === "TEAMS" && (
        <div className="glass-card overflow-hidden animate-fade-in">
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <h2 className="text-sm font-black text-white uppercase tracking-widest">Ecossistema de Equipes</h2>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{teams.length} EQUIPES IDENTIFICADAS</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead className="bg-white/5 text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">
                  <tr>
                    <th className="px-6 py-4">Equipe</th>
                    <th className="px-6 py-4">Líder</th>
                    <th className="px-6 py-4">Operadores</th>
                    <th className="px-6 py-4">Lucro Acumulado</th>
                    <th className="px-6 py-4 text-right">Ações</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {teams.map(t => (
                    <tr key={t.id} className="hover:bg-white/[0.01] transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                           <div className="w-2 h-8 rounded-full bg-primary shadow-lg shadow-primary/20" />
                           <div className="flex flex-col">
                              <span className="text-sm font-black text-white uppercase tracking-tight">{t.name}</span>
                              <span className="text-[10px] font-mono font-bold text-primary">#{t.code}</span>
                           </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs font-bold text-white uppercase">{t.owner}</td>
                      <td className="px-6 py-4 text-xs font-black text-slate-400">{t.operatorsCount}</td>
                      <td className="px-6 py-4 text-xs font-black text-accent-cyan">{formatValue(`R$ ${t.revenue?.toLocaleString()}`)}</td>
                      <td className="px-6 py-4 text-right">
                         <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-all">
                            <ArrowRight size={14} />
                         </button>
                      </td>
                    </tr>
                  ))}
               </tbody>
            </table>
          </div>
        </div>
      )}

      {activeSection === "FEED" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
           <div className="lg:col-span-2 space-y-6">
              <div className="glass-card p-8">
                 <h2 className="text-sm font-black text-white uppercase tracking-widest mb-8 flex items-center gap-2">
                    <Activity size={18} className="text-primary" /> Fluxo de Atividade Global
                 </h2>
                 <div className="space-y-6">
                    {feed.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 hover:bg-white/[0.02] rounded-2xl transition-all border border-transparent hover:border-white/5">
                         <div className={cn(
                            "p-3 rounded-xl",
                            item.type === 'REMITTANCE' ? "bg-accent-cyan/10 text-accent-cyan" :
                            item.type === 'GOAL' ? "bg-primary/10 text-primary" :
                            item.type === 'OPERATION' ? "bg-accent-blue/10 text-accent-blue" : "bg-white/5 text-slate-400"
                         )}>
                            {item.type === 'REMITTANCE' ? <CircleDollarSign size={18} /> :
                             item.type === 'GOAL' ? <Target size={18} /> :
                             item.type === 'OPERATION' ? <Zap size={18} /> : <Activity size={18} />}
                         </div>
                         <div className="flex-1">
                            <p className="text-xs font-black text-white uppercase tracking-tight">{item.title}</p>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{item.user} • {new Date(item.date).toLocaleString()}</p>
                         </div>
                      </div>
                    ))}
                    {feed.length === 0 && <p className="text-center py-10 opacity-30 italic text-sm">Sem atividades registradas...</p>}
                 </div>
              </div>
           </div>
           <div className="space-y-6">
              <div className="glass-card p-6 bg-gradient-to-br from-accent-blue/5 to-transparent">
                 <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Status dos Servidores</h2>
                 <div className="space-y-4">
                    <StatusItem label="API Backend" status="ONLINE" />
                    <StatusItem label="Banco de Dados" status="ONLINE" />
                    <StatusItem label="Web Scrapers" status="STANDBY" />
                    <StatusItem label="Auth Engine" status="SECURE" />
                 </div>
              </div>
           </div>
        </div>
      )}

      {activeSection === "LOGS" && (
        <div className="glass-card overflow-hidden animate-fade-in">
           <div className="p-8 bg-black/40 border-b border-white/5 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h2 className="text-sm font-black text-white uppercase tracking-widest">Registros do Sistema</h2>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest italic">Monitoramento de ações críticas em tempo real</p>
              </div>
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                 <span className="text-[10px] font-black text-accent-emerald uppercase tracking-widest">Logs ao vivo</span>
              </div>
           </div>
           <div className="p-6 font-mono text-[11px] space-y-3 max-h-[600px] overflow-y-auto custom-scrollbar bg-black/20">
              {logs.map((log, i) => (
                <div key={i} className="flex items-start gap-4 group border-b border-white/[0.02] last:border-0 pb-3">
                   <span className="text-slate-600 font-bold min-w-[140px]">[{new Date(log.createdAt).toLocaleString()}]</span>
                   <span className="text-primary font-bold uppercase min-w-[100px]">{log.actionType}</span>
                   <span className="text-slate-400 group-hover:text-white transition-colors">{log.description}</span>
                   <span className="ml-auto text-slate-600 group-hover:text-slate-400">{log.user?.email || "SYSTEM"}</span>
                </div>
              ))}
              {logs.length === 0 && <p className="text-center py-10 text-slate-700 italic">Console vazio...</p>}
           </div>
        </div>
      )}
      </div>
    </AuthGuard>
  );
}

function AdminMetricCard({ title, value, icon, color }: any) {
  const colorMap: any = {
    blue: "text-accent-blue border-l-accent-blue/50",
    purple: "text-primary border-l-primary/50",
    emerald: "text-accent-emerald border-l-accent-emerald/50",
    red: "text-primary border-l-primary/50"
  };
  return (
    <div className={cn("glass-card p-6 flex flex-col gap-4 border-l-4", colorMap[color])}>
      <div className="flex items-center justify-between">
        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em]">{title}</span>
        <div className="p-2 bg-white/5 rounded-lg text-slate-400">{icon}</div>
      </div>
      <p className="text-2xl font-black text-white tracking-tighter">{value}</p>
    </div>
  );
}

function StatusItem({ label, status }: { label: string, status: string }) {
  return (
    <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
       <span className="text-[10px] font-bold text-slate-400 uppercase">{label}</span>
       <span className={cn(
         "text-[9px] font-black uppercase tracking-widest",
         status === 'ONLINE' || status === 'SECURE' ? "text-accent-emerald" : "text-amber-500"
       )}>{status}</span>
    </div>
  );
}
