"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Users, Search, Filter, Ban, CheckCircle, MoreVertical, Database, Activity, Trash2, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import api from "@/lib/api";

interface AdminMetrics {
  totalUsers: number;
  totalTeams: number;
  totalOperators: number;
  totalGoals: number;
  activeGoals: number;
  closedGoals: number;
  totalRemittances: number;
  totalRevenue: number;
  todayRevenue: number;
  totalLoss: number;
}

interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
  team: string;
}

export default function AdminPanelPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [metrics, setMetrics] = useState<AdminMetrics | null>(null);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [mRes, uRes] = await Promise.all([
        api.get("/admin/metrics"),
        api.get("/admin/users")
      ]);
      setMetrics(mRes.data);
      setUsers(uRes.data);
    } catch (e) {
      console.error("Failed to fetch admin data", e);
    }
    setLoading(false);
  };

  const updateUserStatus = async (id: number, status: string) => {
    try {
      await api.post(`/admin/users/${id}/status`, { status });
      setUsers(prev => prev.map(u => u.id === id ? { ...u, status } : u));
    } catch (e) { alert("Erro ao atualizar status"); }
  };

  const updateUserRole = async (id: number, role: string) => {
    try {
      await api.post(`/admin/users/${id}/role`, { role });
      setUsers(prev => prev.map(u => u.id === id ? { ...u, role } : u));
    } catch (e) { alert("Erro ao atualizar cargo"); }
  };

  const deleteUser = async (id: number) => {
    if (!confirm("Excluir usuário permanentemente?")) return;
    try {
      await api.delete(`/admin/users/${id}`);
      setUsers(prev => prev.filter(u => u.id !== id));
    } catch (e) { alert("Erro ao excluir usuário"); }
  };

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-fade-in-up pb-20 px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-accent-emerald/10 rounded-2xl text-accent-emerald border border-accent-emerald/20">
             <ShieldCheck size={28} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-black text-white tracking-tight uppercase">Painel de Controle</h1>
            <p className="text-slate-500 font-medium">Gerenciamento administrativo de usuários e sistema.</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
         <StatCard title="Total Usuários" value={metrics?.totalUsers || 0} icon={<Users size={16} />} color="primary" />
         <StatCard title="Receita Total" value={`R$ ${metrics?.totalRevenue.toLocaleString() || 0}`} icon={<Activity size={16} />} color="emerald" />
         <StatCard title="Equipes" value={metrics?.totalTeams || 0} icon={<Database size={16} />} color="blue" />
         <StatCard title="Metas Ativas" value={metrics?.activeGoals || 0} icon={<ShieldCheck size={16} />} color="orange" />
      </div>

      {/* User Management Section */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-2xl">
           <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-4 flex items-center text-slate-500">
                <Search size={18} />
              </div>
              <input 
                type="text"
                placeholder="Buscar usuário por nome ou email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm text-white focus:border-primary outline-none transition-all"
              />
           </div>
           <div className="flex items-center gap-2">
              <button onClick={fetchData} className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-black text-slate-300 uppercase tracking-widest hover:bg-white/10 transition-all">
                Atualizar Lista
              </button>
           </div>
        </div>

        <div className="glass-card overflow-hidden">
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead>
                    <tr className="border-b border-white/5 bg-white/[0.02]">
                       <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest whitespace-nowrap">Usuário</th>
                       <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest whitespace-nowrap">Status</th>
                       <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest whitespace-nowrap">Cargo/Equipe</th>
                       <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest whitespace-nowrap">Cadastro</th>
                       <th className="px-8 py-5 text-right text-[10px] font-black text-slate-500 uppercase tracking-widest whitespace-nowrap">Ações</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                    {filteredUsers.map((user) => (
                       <tr key={user.id} className="group hover:bg-white/[0.02] transition-colors">
                          <td className="px-8 py-5">
                             <div className="flex flex-col">
                                <span className="text-sm font-bold text-white">{user.name}</span>
                                <span className="text-[10px] text-slate-500 font-mono">{user.email}</span>
                             </div>
                          </td>
                          <td className="px-8 py-5">
                             <button 
                                onClick={() => updateUserStatus(user.id, user.status === 'ACTIVE' ? 'BANNED' : 'ACTIVE')}
                                className={cn(
                                "px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all",
                                user.status === "ACTIVE" ? "bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/20 hover:bg-accent-emerald/20" : "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
                             )}>
                                {user.status === 'ACTIVE' ? 'Ativo' : 'Banido'}
                             </button>
                          </td>
                          <td className="px-8 py-5">
                             <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-black text-slate-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 uppercase w-fit">
                                    {user.role}
                                </span>
                                <span className="text-[9px] text-slate-500 font-bold uppercase">{user.team}</span>
                             </div>
                          </td>
                          <td className="px-8 py-5 text-[11px] text-slate-500 font-bold uppercase tracking-widest">
                             {new Date(user.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-8 py-5 text-right">
                             <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button 
                                    onClick={() => updateUserRole(user.id, user.role === 'ADMIN' ? 'USER' : 'ADMIN')}
                                    className="p-2 hover:bg-white/5 rounded-lg text-slate-400" 
                                    title="Alternar Admin"
                                >
                                   <Shield size={16} />
                                </button>
                                <button 
                                    onClick={() => deleteUser(user.id)}
                                    className="p-2 hover:bg-primary/10 rounded-lg text-primary"
                                    title="Excluir"
                                >
                                   <Trash2 size={16} />
                                </button>
                             </div>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color }: any) {
    const colors: any = {
        primary: "text-primary",
        emerald: "text-accent-emerald",
        blue: "text-accent-blue",
        orange: "text-orange-500"
    };
    return (
        <div className="glass-card p-8 flex flex-col gap-4">
            <div className="flex justify-between items-start">
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">{title}</span>
                <div className={cn("p-2 bg-white/5 rounded-lg", colors[color])}>{icon}</div>
            </div>
            <p className="text-4xl font-black text-white tracking-tighter">{value}</p>
        </div>
    );
}
