"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Users,
  Plus,
  UserPlus,
  Shield,
  TrendingUp,
  Target,
  CircleDollarSign,
  History,
  Activity,
  ArrowRight,
  Crown,
  Share2,
  Trash2,
  Edit2,
  Zap,
  Receipt,
  TrendingDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import api from "@/lib/api";
import { useDashboard } from "@/components/layout/DashboardContext";
import Modal from "@/components/layout/Modal";

type TeamRole = "OWNER" | "ADMIN" | "OPERATOR";

interface Team {
  id: number;
  name: string;
  code: string;
  color: string;
  instagram?: string;
}

interface Member {
  id: number;
  name: string;
  role: TeamRole;
}

interface TeamExpense {
  id: number;
  name: string;
  amount: number;
  category: string;
  date: string;
  user: { name: string };
}

interface FeedItem {
  id: number;
  operator: { name: string };
  platform: string;
  deposit: number;
  withdraw: number;
  bau: number;
  cycles?: string;
  value: number;
  observation?: string;
  createdAt: string;
}

interface TeamOperation {
  id: number;
  platform: string;
  network: string;
  bets: number;
  average: number;
  depositors: number;
  operatorName?: string;
  createdAt: string;
}

interface TeamGoal {
  id: number;
  platform: string;
  target: number;
  status: "ACTIVE" | "COMPLETED" | "CLOSED";
}

export default function TeamPage() {
  const { formatValue, addToast } = useDashboard();
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState<Team | null>(null);
  const [view, setView] = useState<"INITIAL" | "DASHBOARD">("INITIAL");

  // Create Team State
  const [createForm, setCreateForm] = useState({ name: "", instagram: "", color: "#7000FF" });
  const [joinCode, setJoinCode] = useState("");

  // Dashboard Data
  const [stats, setStats] = useState({ 
    teamProfit: 0, 
    totalExpenses: 0,
    teamNetProfit: 0,
    totalRemittance: 0, 
    operatorsCount: 0, 
    goalsCount: 0, 
    activeGoals: 0, 
    finishedGoals: 0,
    operatorsRanking: [] as { name: string, profit: number, count: number }[]
  });
  const [members, setMembers] = useState<Member[]>([]);
  const [feed, setFeed] = useState<FeedItem[]>([]);
  const [goals, setGoals] = useState<TeamGoal[]>([]);
  const [teamExpenses, setTeamExpenses] = useState<TeamExpense[]>([]);
  const [operations, setOperations] = useState<TeamOperation[]>([]);
  const [activeTab, setActiveTab] = useState<"OVERVIEW" | "OPERATIONS" | "GOALS" | "REMITTANCES" | "EXPENSES">("OVERVIEW");
  
  // Modals State
  const [isOpModalOpen, setIsOpModalOpen] = useState(false);
  const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
  const [isRemitModalOpen, setIsRemitModalOpen] = useState(false);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [isCreateTeamModalOpen, setIsCreateTeamModalOpen] = useState(false);
  const [isJoinTeamModalOpen, setIsJoinTeamModalOpen] = useState(false);

  // Forms State
  const [opForm, setOpForm] = useState({ platform: "", network: "WE", bets: "", average: "", depositors: "", target: "", operatorName: "" });
  const [goalForm, setGoalForm] = useState({ platform: "", target: 0 });
  const [remitForm, setRemitForm] = useState({ platform: "", deposit: 0, withdraw: 0, cycles: "", observation: "" });
  const [expenseForm, setExpenseForm] = useState({ name: "", amount: 0, category: "Proxy", date: new Date().toISOString().split('T')[0] });

  const userRole = useMemo(() => {
    if (!team || !members.length) return "OPERATOR";
    const userJson = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    if (!userJson) return "OPERATOR";
    try {
      const user = JSON.parse(userJson);
      const m = members.find(mbr => mbr.id === user.id);
      return m ? m.role as TeamRole : "OPERATOR";
    } catch (e) { return "OPERATOR"; }
  }, [team, members]);

  const canManage = userRole === "OWNER" || userRole === "ADMIN";

  useEffect(() => {
    fetchTeamStatus();
  }, []);

  const fetchTeamStatus = async () => {
    setLoading(true);
    try {
      const { data: currentTeam } = await api.get("/teams/current");
      if (currentTeam) {
        setTeam(currentTeam);
        setView("DASHBOARD");
        fetchDashboardData(currentTeam.id);
      } else {
        setView("INITIAL");
      }
    } catch (e) { console.error(e); }
    setLoading(false);
  };

  const fetchDashboardData = async (teamId: number) => {
    try {
      const [dbResponse, feedResponse, goalsResponse, opsResponse, expensesResponse] = await Promise.all([
        api.get(`/teams/dashboard?teamId=${teamId}`),
        api.get(`/teams/remittance/feed?teamId=${teamId}`),
        api.get(`/teams/goals?teamId=${teamId}`),
        api.get(`/teams/operations?teamId=${teamId}`),
        api.get(`/teams/expenses?teamId=${teamId}`)
      ]);
      setStats(dbResponse.data);
      setMembers(dbResponse.data.members);
      setFeed(feedResponse.data);
      setGoals(goalsResponse.data);
      setOperations(opsResponse.data);
      setTeamExpenses(expensesResponse.data);
    } catch (e) { console.error(e); }
  };

  const handleCreateTeam = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/teams/create", createForm);
      setTeam(data);
      setView("DASHBOARD");
      setIsCreateTeamModalOpen(false);
      await fetchDashboardData(data.id);
      alert("Equipe criada com sucesso!");
    } catch (error: any) {
      const msg = error.response?.data?.error || "Erro ao criar equipe";
      alert(msg);
    }
  };

  const handleJoinTeam = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/teams/join", { code: joinCode });
      setTeam(data.team);
      setView("DASHBOARD");
      setIsJoinTeamModalOpen(false);
      await fetchDashboardData(data.team.id);
      alert("Você entrou na equipe!");
    } catch (error: any) {
      const msg = error.response?.data?.error || "Código inválido ou equipe não encontrada";
      alert(msg);
    }
  };

  const submitOperation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!team) return;
    try {
      await api.post("/teams/operations", { ...opForm, teamId: team.id });
      alert("Operação e Meta registradas!");
      setOpForm({ platform: "", network: "WE", bets: "", average: "", depositors: "", target: "", operatorName: "" });
      setIsOpModalOpen(false);
      fetchDashboardData(team.id); // Refresh operations list
    } catch (e) { alert("Erro ao registrar operação"); }
  };

  const submitRemittance = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!team) return;
    try {
      await api.post("/teams/remittance", { ...remitForm, teamId: team.id });
      fetchDashboardData(team.id);
      setRemitForm({ platform: "", deposit: 0, withdraw: 0, cycles: "", observation: "" });
      setIsRemitModalOpen(false);
      alert("Remessa registrada com sucesso!");
    } catch (e) { alert("Erro ao registrar remessa"); }
  };

  const submitExpense = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!team) return;
    try {
      await api.post("/teams/expenses", { ...expenseForm, teamId: team.id });
      fetchDashboardData(team.id);
      setExpenseForm({ name: "", amount: 0, category: "Proxy", date: new Date().toISOString().split('T')[0] });
      setIsExpenseModalOpen(false);
      alert("Despesa registrada!");
    } catch (e) { alert("Erro ao registrar despesa"); }
  };

  const deleteTeamExpense = async (id: number) => {
    if (!confirm("Excluir esta despesa?")) return;
    try {
      await api.delete(`/teams/expenses/${id}`);
      if (team) fetchDashboardData(team.id);
    } catch (e) { alert("Erro ao excluir"); }
  };

  const handleTeamReset = async () => {
    if (!team) return;
    if (!confirm("⚠️ ATENÇÃO: Isso apagará todas as remessas, metas e operações da equipe permanentemente. Deseja continuar?")) return;
    if (!confirm("CONFIRMAÇÃO FINAL: Você tem certeza absoluta? Essa ação não pode ser desfeita.")) return;

    try {
      await api.post(`/teams/${team.id}/reset`);
      alert("Dados da equipe redefinidos com sucesso!");
      fetchDashboardData(team.id); 
    } catch (e: any) {
      alert(e.response?.data?.error || "Erro ao redefinir dados");
    }
  };

  const deleteTeamGoal = async (id: number) => {
    if (!confirm("Tem certeza que deseja remover esta meta da equipe?")) return;
    try {
      await api.delete(`/teams/goals/${id}`);
      setGoals(prev => prev.filter(g => g.id !== id));
      addToast("Meta removida com sucesso!", "success");
    } catch (e) {
      addToast("Erro ao remover meta", "error");
    }
  };

  if (loading) return (
    <div className="flex h-96 items-center justify-center">
      <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  );

  if (view === "INITIAL") return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 space-y-12 animate-fade-in text-center">
      <div className="space-y-4">
        <div className="inline-flex p-4 bg-primary/10 rounded-3xl text-primary animate-bounce">
          <Users size={48} />
        </div>
        <h1 className="text-4xl font-black text-white tracking-tighter uppercase">Gestão de Equipe</h1>
        <p className="text-slate-500 max-w-md mx-auto font-medium">Gerencie sua operação de forma profissional. Crie sua própria equipe ou entre em uma existente.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
        <button 
          onClick={() => setIsCreateTeamModalOpen(true)} 
          className="group glass-card p-10 flex flex-col items-center gap-6 hover:border-primary/50 transition-all hover:translate-y-[-5px] active:scale-95"
        >
          <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
            <Plus size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase">Criar Equipe</h3>
            <p className="text-sm text-slate-500 uppercase font-bold tracking-widest mt-1">Liderar Nova Operação</p>
          </div>
        </button>

        <button 
          onClick={() => setIsJoinTeamModalOpen(true)} 
          className="group glass-card p-10 flex flex-col items-center gap-6 hover:border-accent-blue/50 transition-all hover:translate-y-[-5px] active:scale-95"
        >
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-accent-blue group-hover:text-white transition-all">
            <UserPlus size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Entrar em Equipe</h3>
            <p className="text-sm text-slate-500 uppercase font-bold tracking-widest mt-1">Juntar-se via Código</p>
          </div>
        </button>
      </div>

      <Modal
        isOpen={isCreateTeamModalOpen}
        onClose={() => setIsCreateTeamModalOpen(false)}
        title="Criar Nova Equipe"
        icon={<Plus size={20} />}
      >
        <form onSubmit={handleCreateTeam} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Nome da Equipe</label>
            <input required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50" placeholder="Ex: Tropa do Bugs" value={createForm.name} onChange={e => setCreateForm({ ...createForm, name: e.target.value })} />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Instagram (Opcional)</label>
            <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50" placeholder="@seuinstagram" value={createForm.instagram} onChange={e => setCreateForm({ ...createForm, instagram: e.target.value })} />
          </div>
          <button type="submit" className="w-full bg-primary py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:scale-[1.02] active:scale-[0.98] transition-all">FINALIZAR CRIAÇÃO</button>
        </form>
      </Modal>

      <Modal
        isOpen={isJoinTeamModalOpen}
        onClose={() => setIsJoinTeamModalOpen(false)}
        title="Entrar em Equipe"
        icon={<UserPlus size={20} />}
      >
        <form onSubmit={handleJoinTeam} className="space-y-6">
          <div className="space-y-2 text-center pb-4">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.05em]">Insira o código convite fornecido pelo seu administrador.</p>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Código da Equipe</label>
            <input required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-5 text-center text-3xl font-black text-white outline-none focus:border-accent-blue/50 tracking-[0.5em] font-mono" placeholder="XXXXXX" maxLength={6} value={joinCode} onChange={e => setJoinCode(e.target.value.toUpperCase())} />
          </div>
          <button type="submit" className="w-full bg-accent-blue py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:scale-[1.02] active:scale-[0.98] transition-all">ENTRAR NA EQUIPE</button>
        </form>
      </Modal>
    </div>
  );

  return (
    <div className="space-y-8 animate-fade-in pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center text-white" style={{ backgroundColor: team?.color }}><Users size={32} /></div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-black text-white tracking-tighter uppercase">{team?.name}</h1>
              <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-[10px] font-mono font-bold text-primary tracking-widest">#{team?.code}</span>
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">{team?.instagram ? `Instagram: ${team.instagram}` : "Equipe Privada"}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => { navigator.clipboard.writeText(team?.code || ""); alert("Código copiado!"); }} className="bg-white/5 hover:bg-white/10 p-3 rounded-xl text-slate-400 transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><Share2 size={16} /> Código</button>
          {canManage && (
            <>
              <button 
                onClick={handleTeamReset}
                className="bg-primary/10 hover:bg-primary/20 p-3 rounded-xl text-primary transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-primary/20"
              >
                <Trash2 size={16} /> Zerar Dados
              </button>
              <button className="bg-white/5 hover:bg-white/10 p-3 rounded-xl text-slate-400 transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-white/10"
              >
                <Shield size={16} /> Configurações
              </button>
            </>
          )}
        </div>
      </div>

      <div className="w-full bg-white/[0.03] border border-white/5 p-1 rounded-2xl flex no-scrollbar overflow-x-auto">
        {(['OVERVIEW', 'OPERATIONS', 'GOALS', 'REMITTANCES', 'EXPENSES'] as const).map((tab) => {
          const labels = { OVERVIEW: 'Visão Geral', OPERATIONS: 'Operação', GOALS: 'Metas', REMITTANCES: 'Remessas', EXPENSES: 'Despesas' };
          return <button key={tab} onClick={() => setActiveTab(tab)} className={cn("flex-1 min-w-[120px] py-3 text-[10px] font-bold rounded-xl transition-all uppercase tracking-widest", activeTab === tab ? "bg-white text-black shadow-lg" : "text-slate-500 hover:text-slate-300")}>{labels[tab]}</button>;
        })}
      </div>

      {activeTab === "OVERVIEW" && (
        <div className="space-y-8 animate-fade-in-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard title="Remessas Totais" value={stats.totalRemittance.toString()} icon={<TrendingUp size={20} />} color="blue" />
            <MetricCard title="Lucro Bruto" value={formatValue(`R$ ${stats.teamProfit?.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) || "0,00"}`)} icon={<CircleDollarSign size={20} />} color="purple" />
            <MetricCard title="Lucro Líquido" value={formatValue(`R$ ${stats.teamNetProfit?.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) || "0,00"}`)} icon={<Zap size={20} />} color="emerald" trend={stats.teamNetProfit >= 0 ? "Positivo" : "Negativo"} />
            <MetricCard title="Gastos da Equipe" value={formatValue(`R$ ${stats.totalExpenses?.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) || "0,00"}`)} icon={<Trash2 size={20} />} color="red" negative />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3"><History size={18} className="text-primary" /><h2 className="text-sm font-bold text-white uppercase tracking-widest">Feed de Remessas</h2></div>
              <div className="glass-card overflow-hidden">
                {feed.length === 0 ? <div className="p-20 text-center opacity-30 italic text-sm">Nenhuma atividade recente...</div> : (
                  <div className="divide-y divide-white/5">
                    {feed.map(item => (
                      <div key={item.id} className="p-6 flex items-center justify-between group hover:bg-white/[0.01] transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-400 font-bold text-xs">{item.operator.name.charAt(0)}</div>
                          <div>
                            <p className="text-sm font-bold text-white uppercase tracking-tight">
                              OPERADOR {item.operator.name} finalizou uma remessa
                            </p>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                              {item.platform} • {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                        </div>
                        <div className="text-right"><p className="text-sm font-black text-accent-blue">{formatValue(`R$ ${item.value.toFixed(2)}`)}</p><span className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.2em]">Pago</span></div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3"><Users size={18} className="text-primary" /><h2 className="text-sm font-bold text-white uppercase tracking-widest">Ranking de Operadores</h2></div>
              <div className="glass-card p-6 space-y-6">
                {stats.operatorsRanking.length === 0 ? (
                  <div className="text-center py-4 text-slate-500 text-[10px] font-bold uppercase">Nenhum dado disponível</div>
                ) : (
                  stats.operatorsRanking.map((op, idx) => (
                    <div key={op.name} className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs",
                          idx === 0 ? "bg-amber-500/20 text-amber-500" : 
                          idx === 1 ? "bg-slate-400/20 text-slate-400" :
                          idx === 2 ? "bg-amber-700/20 text-amber-700" : "bg-white/5 text-slate-500"
                        )}>
                          {idx + 1}º
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white group-hover:text-primary transition-colors">{op.name}</p>
                          <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">{op.count} remessas</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-black text-accent-blue">{formatValue(`R$ ${op.profit.toFixed(2)}`)}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="flex items-center gap-3 pt-4"><Crown size={18} className="text-primary" /><h2 className="text-sm font-bold text-white uppercase tracking-widest">Membros da Equipe</h2></div>
              <div className="glass-card p-6 space-y-6">
                {members.map(member => (
                  <div key={member.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {member.role === "OWNER" ? <Crown size={14} /> : <Shield size={14} />}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">{member.name}</p>
                        <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">{member.role}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Ativo</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "OPERATIONS" && (
        <div className="space-y-8 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white uppercase tracking-widest">Fluxo de Operações</h2>
            {canManage && (
              <button 
                onClick={() => setIsOpModalOpen(true)} 
                className="bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-primary/20"
              >
                <Plus size={16} /> Nova Operação
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="glass-card p-8 space-y-6">
                <div className="space-y-1"><p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Total de Metas</p><p className="text-3xl font-black text-white">{stats.goalsCount}</p></div>
                <div className="space-y-1"><p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Remessas Pagas</p><p className="text-3xl font-black text-accent-cyan">{formatValue(`R$ ${stats.teamProfit?.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) || "0,00"}`)}</p></div>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3"><Zap size={18} className="text-primary" /><h2 className="text-sm font-bold text-white uppercase tracking-widest">Histórico de Operações</h2></div>
              <div className="glass-card overflow-hidden">
                {operations.length === 0 ? (
                  <div className="p-20 text-center opacity-30 italic text-sm">Nenhuma operação registrada...</div>
                ) : (
                  <div className="divide-y divide-white/5">
                    {operations.map(op => (
                      <div key={op.id} className="p-6 flex items-center justify-between group hover:bg-white/[0.01] transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-white/5 rounded-xl text-slate-400 group-hover:text-primary transition-colors"><Zap size={18} /></div>
                          <div>
                            <p className="text-sm font-black text-white uppercase tracking-tight">PLATAFORMA: {op.platform}</p>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                              REDE: {op.network} • APOSTAS: {op.bets} • MÉDIA: {formatValue(`R$ ${op.average.toFixed(2)}`)} • {op.depositors} DEPOSITANTES • OPERADOR: {op.operatorName || "SISTEMA"}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{new Date(op.createdAt).toLocaleDateString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <Modal 
            isOpen={isOpModalOpen} 
            onClose={() => setIsOpModalOpen(false)} 
            title="Registrar Operação"
            icon={<Zap size={20} />}
          >
            <form onSubmit={submitOperation} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Nome da Plataforma</label>
                <input required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50" placeholder="Double XP" value={opForm.platform} onChange={e => setOpForm({ ...opForm, platform: e.target.value })} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Rede</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50" value={opForm.network} onChange={e => setOpForm({ ...opForm, network: e.target.value })}>
                  <option className="bg-[#0e0506] text-white" value="WE">WE</option>
                  <option className="bg-[#0e0506] text-white" value="W1">W1</option>
                  <option className="bg-[#0e0506] text-white" value="VOY">VOY</option>
                  <option className="bg-[#0e0506] text-white" value="91">91</option>
                  <option className="bg-[#0e0506] text-white" value="DZ">DZ</option>
                  <option className="bg-[#0e0506] text-white" value="A8">A8</option>
                  <option className="bg-[#0e0506] text-white" value="OKOK">OKOK</option>
                  <option className="bg-[#0e0506] text-white" value="ANJO">ANJO</option>
                  <option className="bg-[#0e0506] text-white" value="XW">XW</option>
                  <option className="bg-[#0e0506] text-white" value="EK">EK</option>
                  <option className="bg-[#0e0506] text-white" value="DY">DY</option>
                  <option className="bg-[#0e0506] text-white" value="777">777</option>
                  <option className="bg-[#0e0506] text-white" value="888">888</option>
                  <option className="bg-[#0e0506] text-white" value="WP">WP</option>
                  <option className="bg-[#0e0506] text-white" value="BRA">BRA</option>
                  <option className="bg-[#0e0506] text-white" value="GAME">GAME</option>
                  <option className="bg-[#0e0506] text-white" value="ALFA">ALFA</option>
                  <option className="bg-[#0e0506] text-white" value="KK">KK</option>
                  <option className="bg-[#0e0506] text-white" value="MK">MK</option>
                  <option className="bg-[#0e0506] text-white" value="M9">M9</option>
                  <option className="bg-[#0e0506] text-white" value="KF">KF</option>
                  <option className="bg-[#0e0506] text-white" value="PU">PU</option>
                  <option className="bg-[#0e0506] text-white" value="COROA">COROA</option>
                  <option className="bg-[#0e0506] text-white" value="MANGA">MANGA</option>
                  <option className="bg-[#0e0506] text-white" value="AA">AA</option>
                  <option className="bg-[#0e0506] text-white" value="FP">FP</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Apostas (Qtd)</label>
                <input required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50" placeholder="Ex: 100" value={opForm.bets} onChange={e => setOpForm({ ...opForm, bets: e.target.value })} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Média (R$)</label>
                <input required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50" placeholder="Ex: 5.00" value={opForm.average} onChange={e => setOpForm({ ...opForm, average: e.target.value })} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Depositantes</label>
                <input required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50" placeholder="Ex: 10" value={opForm.depositors} onChange={e => setOpForm({ ...opForm, depositors: e.target.value })} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Meta de Remessas (Ciclos)</label>
                <input required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50" placeholder="Ex: 50" value={opForm.target} onChange={e => setOpForm({ ...opForm, target: e.target.value })} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Nome do Operador</label>
                <input required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50" placeholder="Ex: João Silva" value={opForm.operatorName} onChange={e => setOpForm({ ...opForm, operatorName: e.target.value })} />
              </div>
              <button type="submit" className="md:col-span-2 bg-primary py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">PUBLICAR OPERAÇÃO E ESTABELECER META</button>
            </form>
          </Modal>
        </div>
      )}

      {activeTab === "GOALS" && (
        <div className="space-y-8 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white uppercase tracking-widest">Metas da Equipe</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map(goal => {
              const currentCycles = feed
                .filter(f => f.platform === goal.platform)
                .reduce((acc, curr) => acc + (parseInt(curr.cycles || "0") || 0), 0);
              const progress = Math.min(Math.round((currentCycles / goal.target) * 100), 100);
              
              return (
                <div key={goal.id} className="glass-card p-6 space-y-4">
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-white uppercase text-xs">{goal.platform}</span>
                    <span className={cn(
                      "text-[9px] px-2 py-1 rounded-md uppercase tracking-widest", 
                      goal.status === 'ACTIVE' ? "bg-accent-blue/10 text-accent-blue" : "bg-white/10 text-slate-400"
                    )}>
                      {goal.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase">
                      <span>Progresso ({currentCycles})</span>
                      <span>Meta: {goal.target}</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-1000" 
                        style={{ width: `${progress}%` }} 
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black text-primary">{progress}%</span>
                      <button 
                        onClick={() => deleteTeamGoal(goal.id)}
                        className="p-2 hover:bg-red-500/10 text-slate-600 hover:text-red-500 rounded-lg transition-all"
                      >
                         <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            {goals.length === 0 && <div className="col-span-full py-20 bg-white/[0.02] rounded-3xl border border-dashed border-white/5 flex flex-col items-center gap-4"><Target size={40} className="text-slate-700" /><p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Nenhuma meta ativa</p></div>}
          </div>
        </div>
      )}

      {activeTab === "REMITTANCES" && (
        <div className="animate-fade-in-up space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white uppercase tracking-widest">Histórico de Remessas</h2>
            <button 
              onClick={() => setIsRemitModalOpen(true)} 
              className="bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-primary/20"
            >
              <Plus size={16} /> Nova Remessa
            </button>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3"><History size={18} className="text-primary" /><h2 className="text-sm font-bold text-white uppercase tracking-widest">Suas Remessas</h2></div>
            <div className="glass-card overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-white/5 border-b border-white/5">
                  <tr>
                    <th className="px-6 py-4 text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]">Plataforma</th>
                    <th className="px-6 py-4 text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]">Depósito/Saque</th>
                    <th className="px-6 py-4 text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]">Ciclos</th>
                    <th className="px-6 py-4 text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]">Lucro Total</th>
                    <th className="px-6 py-4 text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]">Data</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {feed.filter(f => f.operator.name === (typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') || '{}').name : "")).map(remit => (
                    <tr key={remit.id} className="hover:bg-white/[0.01] transition-colors group">
                      <td className="px-6 py-4 text-xs font-bold text-white">{remit.platform}</td>
                      <td className="px-6 py-4 text-[10px] font-bold text-slate-400">
                        IN: {formatValue(`R$ ${remit.deposit.toFixed(2)}`)} / OUT: {formatValue(`R$ ${remit.withdraw.toFixed(2)}`)}
                      </td>
                      <td className="px-6 py-4 text-xs font-bold text-white uppercase tracking-tighter">{remit.cycles || "0"}</td>
                      <td className="px-6 py-4 text-xs font-bold text-accent-blue">{formatValue(`R$ ${remit.value.toFixed(2)}`)}</td>
                      <td className="px-6 py-4 text-[10px] text-slate-500">{new Date(remit.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Modal 
            isOpen={isRemitModalOpen} 
            onClose={() => setIsRemitModalOpen(false)} 
            title="Nova Remessa"
            icon={<CircleDollarSign size={20} />}
          >
            <form onSubmit={submitRemittance} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Plataforma</label>
                <select 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50" 
                  value={remitForm.platform} 
                  onChange={e => setRemitForm({ ...remitForm, platform: e.target.value })}
                >
                  <option value="" className="text-black">Selecione uma plataforma</option>
                  {[...new Set(operations.map(op => op.platform))].map(plat => (
                    <option key={plat} value={plat} className="text-black">
                      {plat}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Depósito (R$)</label>
                  <input type="number" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50" placeholder="0.00" value={remitForm.deposit} onChange={e => setRemitForm({ ...remitForm, deposit: parseFloat(e.target.value) || 0 })} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Saque (R$)</label>
                  <input type="number" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50" placeholder="0.00" value={remitForm.withdraw} onChange={e => setRemitForm({ ...remitForm, withdraw: parseFloat(e.target.value) || 0 })} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Qtd de Ciclos</label>
                <input required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50" placeholder="Ex: 5" value={remitForm.cycles} onChange={e => setRemitForm({ ...remitForm, cycles: e.target.value })} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Observação</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50 h-24 resize-none" placeholder="Opcional..." value={remitForm.observation} onChange={e => setRemitForm({ ...remitForm, observation: e.target.value })} />
              </div>
              <button type="submit" className="w-full bg-primary py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">ENVIAR REMESSA</button>
            </form>
          </Modal>
        </div>
      )}

      {activeTab === "EXPENSES" && (
        <div className="animate-fade-in-up space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary border border-primary/20">
                <Receipt size={24} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-black text-white tracking-tight uppercase">Despesas</h1>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Controle seus custos fixos e variáveis da equipe {team?.name} com precisão.</p>
              </div>
            </div>
            
            {canManage && (
              <button 
                onClick={() => setIsExpenseModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-neon"
              >
                <Plus size={18} /> Nova Despesa
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="glass-card p-8 flex flex-col gap-4">
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">Total Gastos</span>
                <p className="text-4xl font-black text-white tracking-tighter">
                   {formatValue(`R$ ${(teamExpenses.reduce((acc, curr) => acc + curr.amount, 0)).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`)}
                </p>
             </div>
             <div className="glass-card p-8 flex flex-col gap-4 border-l-4 border-l-primary/40">
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">Impacto no Lucro</span>
                <div className="flex items-center gap-2">
                   <TrendingDown size={18} className="text-primary" />
                   <p className="text-2xl font-black text-primary tracking-tighter">Negativo</p>
                </div>
             </div>
             <div className="glass-card p-8 flex flex-col gap-4">
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">Itens Registrados</span>
                <p className="text-4xl font-black text-white tracking-tighter">{teamExpenses.length}</p>
             </div>
          </div>

          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">Item</th>
                    <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">Categoria</th>
                    <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">Data</th>
                    <th className="px-8 py-6 text-[10px] font-black text-primary uppercase tracking-widest text-right">Valor</th>
                    <th className="px-8 py-6 text-[10px] font-black text-slate-500 uppercase tracking-widest text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {teamExpenses.length === 0 ? (
                    <tr>
                       <td colSpan={5} className="px-8 py-20 text-center text-slate-600 font-medium italic">Nenhuma despesa cadastrada.</td>
                    </tr>
                  ) : (
                    teamExpenses.map(exp => (
                      <tr key={exp.id} className="group hover:bg-white/[0.02] transition-colors">
                        <td className="px-8 py-6 text-sm font-bold text-white uppercase">{exp.name}</td>
                        <td className="px-8 py-6">
                          <span className="text-[10px] font-black text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/5 uppercase">
                            {exp.category}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-[11px] text-slate-500 font-bold uppercase">{new Date(exp.date).toLocaleDateString()}</td>
                        <td className="px-8 py-6 text-sm font-black text-white text-right font-mono">
                           {formatValue(`R$ ${exp.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`)}
                        </td>
                        <td className="px-8 py-6 text-right">
                           {canManage && (
                             <button 
                               onClick={() => deleteTeamExpense(exp.id)}
                               className="p-2 hover:bg-primary/10 rounded-lg text-primary opacity-0 group-hover:opacity-100 transition-all"
                             >
                               <Trash2 size={16} />
                             </button>
                           )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <Modal 
            isOpen={isExpenseModalOpen} 
            onClose={() => setIsExpenseModalOpen(false)} 
            title="Registrar Despesa de Equipe"
            icon={<Receipt size={20} />}
          >
            <form onSubmit={submitExpense} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Descrição</label>
                <input required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50" placeholder="Ex: Upgrade de Servidor" value={expenseForm.name} onChange={e => setExpenseForm({ ...expenseForm, name: e.target.value })} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Valor (R$)</label>
                  <input type="number" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50" value={expenseForm.amount} onChange={e => setExpenseForm({ ...expenseForm, amount: parseFloat(e.target.value) || 0 })} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Categoria</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary/50" value={expenseForm.category} onChange={e => setExpenseForm({ ...expenseForm, category: e.target.value })}>
                    <option value="Proxy" className="text-black">Proxy</option>
                    <option value="SMS" className="text-black">SMS</option>
                    <option value="Bot" className="text-black">Bot</option>
                    <option value="Outros" className="text-black">Outros</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full bg-primary py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">REGISTRAR GASTO</button>
            </form>
          </Modal>
        </div>
      )}
    </div>
  );
}



function MetricCard({ title, value, icon, trend, color, negative }: any) {
  const colorMap: any = {
    blue: "text-accent-blue border-l-accent-blue/50",
    purple: "text-primary border-l-primary/50",
    emerald: "text-accent-emerald border-l-accent-emerald/50",
    cyan: "text-accent-cyan border-l-accent-cyan/50",
    red: "text-primary border-l-primary/50"
  };
  return (
    <div className={cn("glass-card p-6 flex flex-col gap-4 border-l-4", colorMap[color])}>
      <div className="flex items-center justify-between"><span className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em]">{title}</span><div className="p-2 bg-white/5 rounded-lg text-slate-400">{icon}</div></div>
      <div className="flex items-end justify-between gap-2"><p className={cn("text-2xl font-black tracking-tighter", negative ? "text-primary" : "text-white")}>{value}</p>{trend && <span className="text-[10px] font-bold text-accent-blue bg-accent-blue/10 px-2 py-1 rounded-md">{trend}</span>}</div>
    </div>
  );
}
