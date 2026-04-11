"use client";

import { useState, useEffect } from "react";
import { Crown, Plus, Target, TrendingUp, CheckCircle2, X, Calendar, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDashboard } from "@/components/layout/DashboardContext";
import api from "@/lib/api";

interface Goal {
  id: number;
  title: string;
  target: number;
  current: number;
  deadline: string;
}

export default function GoalsPage() {
  const { formatValue } = useDashboard();
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [realProfit, setRealProfit] = useState<number>(0);
  
  // Form State
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("");
  const [deadline, setDeadline] = useState("");

  // Buscar metas e lucro real
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [goalsRes, summaryRes] = await Promise.all([
          api.get('/goals'),
          api.get('/dashboard-summary'),
        ]);
        setGoals(goalsRes.data);
        setRealProfit(summaryRes.data.profit ?? 0);
      } catch (error) {
        console.error("Failed to load data", error);
      }
    };
    fetchData();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !target) return;
    
    try {
      const { data } = await api.post('/goals', {
        title,
        target: parseFloat(target),
        current: 0,
        deadline: deadline || "Sem prazo",
      });
      setGoals(prev => [...prev, data]);
      setTitle("");
      setTarget("");
      setDeadline("");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to add goal", error);
    }
  };

  const deleteGoal = async (id: number) => {
    try {
      await api.delete(`/goals/${id}`);
      setGoals(prev => prev.filter(g => g.id !== id));
    } catch (error) {
      console.error("Failed to delete goal", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-fade-in-up pb-20 px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-primary/10 rounded-2xl text-primary border border-primary/20">
             <Crown size={28} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-black text-white tracking-tight uppercase">Metas</h1>
            <p className="text-slate-500 font-medium">Progresso automático baseado no seu lucro geral.</p>
          </div>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-neon"
        >
          <Plus size={18} /> Nova Meta
        </button>
      </div>

      {/* Lucro geral info */}
      <div className="glass-card p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent-emerald/10 rounded-xl text-accent-emerald border border-accent-emerald/20">
            <TrendingUp size={18} />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Lucro Geral Atual</span>
            <p className={cn(
              "text-2xl font-black tracking-tighter",
              realProfit >= 0 ? "text-accent-emerald" : "text-red-500"
            )}>
              {formatValue(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(realProfit))}
            </p>
          </div>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 py-2 px-4 rounded-xl transition-all group/btn"
        >
          <RefreshCw size={14} className="text-slate-400 group-hover/btn:rotate-180 transition-transform duration-500" />
          <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Atualizar</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {goals.length === 0 ? (
          <div className="col-span-full py-20 bg-white/5 border border-white/5 border-dashed rounded-[2.5rem] flex flex-col items-center justify-center gap-4 text-center opacity-40">
             <Target size={48} className="text-slate-500" />
             <p className="text-white font-bold text-lg uppercase tracking-widest">Nenhuma meta ativa</p>
             <p className="text-slate-500 text-sm max-w-xs">Defina seu primeiro objetivo para começar o acompanhamento.</p>
          </div>
        ) : (
          goals.map(goal => {
            // Progresso baseado no lucro geral real
            const currentValue = Math.max(realProfit, 0);
            const progress = goal.target > 0 ? Math.min((currentValue / goal.target) * 100, 100) : 0;
            return (
              <div key={goal.id} className="glass-card p-8 flex flex-col gap-8 group hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                     <h3 className="text-xl font-bold text-white tracking-tight uppercase">{goal.title}</h3>
                     <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest flex items-center gap-1">
                       <Calendar size={10} /> Prazo: {goal.deadline}
                     </span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                     <TrendingUp size={18} />
                  </div>
                </div>

                <div className="space-y-4">
                   <div className="flex justify-between items-end">
                      <div className="flex flex-col">
                         <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest">Lucro Atual</span>
                         <span className={cn(
                           "text-xl font-black",
                           realProfit >= 0 ? "text-accent-emerald" : "text-red-500"
                         )}>
                           {formatValue(`R$ ${currentValue.toLocaleString('pt-BR')}`)}
                         </span>
                      </div>
                      <div className="flex flex-col items-end">
                         <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest">Meta</span>
                         <span className="text-xl font-black text-slate-400">{formatValue(`R$ ${goal.target.toLocaleString('pt-BR')}`)}</span>
                      </div>
                   </div>

                   <div className="space-y-2">
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                        <div 
                          className={cn(
                            "h-full rounded-full transition-all duration-1000",
                            progress >= 100
                              ? "bg-accent-emerald shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                              : "bg-primary shadow-[0_0_10px_rgba(251,191,36,0.4)]"
                          )}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between">
                         <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest">Progresso</span>
                         <span className={cn(
                           "text-[10px] font-black uppercase tracking-widest",
                           progress >= 100 ? "text-accent-emerald" : "text-primary"
                         )}>{progress.toFixed(1)}%</span>
                      </div>
                   </div>
                </div>

                {progress >= 100 && (
                   <div className="absolute top-4 right-4 animate-bounce">
                      <CheckCircle2 size={24} className="text-accent-emerald drop-shadow-lg" />
                   </div>
                )}

                <button 
                  onClick={() => deleteGoal(goal.id)}
                  className="mt-2 py-3 bg-white/5 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20 border border-white/5 rounded-xl text-[10px] font-black text-slate-300 uppercase tracking-widest transition-all"
                >
                  Remover Meta
                </button>
              </div>
            );
          })
        )}
      </div>

      {/* Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-md bg-[#0f0b00] border border-white/10 rounded-3xl p-8 shadow-2xl animate-fade-in-up">
             <div className="flex justify-between items-center mb-8">
               <h2 className="text-xl font-black text-white uppercase tracking-tighter">Nova Meta</h2>
               <button onClick={() => setIsModalOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                 <X size={24} />
               </button>
             </div>

             <form onSubmit={handleAdd} className="space-y-6">
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Título da Meta</label>
                   <input 
                     required
                     value={title}
                     onChange={e => setTitle(e.target.value)}
                     className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-all"
                     placeholder="Ex: Faturamento Mensal"
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Meta (R$)</label>
                   <input 
                     required
                     type="number"
                     value={target}
                     onChange={e => setTarget(e.target.value)}
                     className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-all"
                     placeholder="Ex: 10000"
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Prazo Final</label>
                   <input 
                     value={deadline}
                     onChange={e => setDeadline(e.target.value)}
                     className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-all"
                     placeholder="Ex: 30 de Abril"
                   />
                </div>
                <p className="text-[10px] text-slate-500 italic">* O progresso será atualizado automaticamente pelo lucro geral da operação.</p>
                <button className="w-full py-4 bg-primary text-white font-black rounded-xl uppercase tracking-widest shadow-neon mt-4">
                   Criar Meta
                </button>
             </form>
          </div>
        </div>
      )}
    </div>
  );
}

