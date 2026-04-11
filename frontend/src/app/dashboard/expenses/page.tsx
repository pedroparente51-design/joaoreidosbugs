"use client";

import { useState, useEffect, useMemo } from "react";
import { Receipt, Plus, Trash2, TrendingDown, DollarSign, Calendar, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDashboard } from "@/components/layout/DashboardContext";
import api from "@/lib/api";

interface Expense {
  id: number;
  name: string;
  amount: number;
  category: string;
  date: string;
}

const CATEGORIES = ["Proxy", "SMS", "Bot", "Outros"];

export default function ExpensesPage() {
  const { formatValue } = useDashboard();
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const { data } = await api.get('/expenses');
        setExpenses(data);
      } catch (error) {
        console.error("Failed to load expenses", error);
      }
    };
    fetchExpenses();
  }, []);

  const totalExpenses = useMemo(() => 
    expenses.reduce((acc, curr) => acc + curr.amount, 0)
  , [expenses]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !amount) return;
    
    try {
      const { data } = await api.post('/expenses', {
        name,
        amount: parseFloat(amount),
        category,
        date: new Date().toISOString().split('T')[0],
      });
      setExpenses(prev => [data, ...prev]);
      setName("");
      setAmount("");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to add expense", error);
    }
  };

  const deleteExpense = async (id: number) => {
    try {
      await api.delete(`/expenses/${id}`);
      setExpenses(prev => prev.filter(e => e.id !== id));
    } catch (error) {
      console.error("Failed to delete expense", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-fade-in-up pb-20 px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-4 bg-primary/10 rounded-2xl text-primary border border-primary/20">
             <Receipt size={28} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-black text-white tracking-tight uppercase">Despesas</h1>
            <p className="text-slate-500 font-medium">Controle seus custos fixos e variáveis com precisão.</p>
          </div>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-neon"
        >
          <Plus size={18} /> Nova Despesa
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="glass-card p-8 flex flex-col gap-4">
            <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">Total Gastos</span>
            <p className="text-4xl font-black text-white tracking-tighter">
               {formatValue(`R$ ${totalExpenses.toLocaleString('pt-BR')}`)}
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
            <p className="text-4xl font-black text-white tracking-tighter">{expenses.length}</p>
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
              {expenses.length === 0 ? (
                <tr>
                   <td colSpan={5} className="px-8 py-20 text-center text-slate-600 font-medium italic">Nenhuma despesa cadastrada.</td>
                </tr>
              ) : (
                expenses.map(exp => (
                  <tr key={exp.id} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="px-8 py-6 text-sm font-bold text-white uppercase">{exp.name}</td>
                    <td className="px-8 py-6">
                      <span className="text-[10px] font-black text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/5 uppercase">
                        {exp.category}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-[11px] text-slate-500 font-bold uppercase">{exp.date}</td>
                    <td className="px-8 py-6 text-sm font-black text-white text-right font-mono">
                       {formatValue(`R$ ${exp.amount.toLocaleString('pt-BR')}`)}
                    </td>
                    <td className="px-8 py-6 text-right">
                       <button 
                         onClick={() => deleteExpense(exp.id)}
                         className="p-2 hover:bg-primary/10 rounded-lg text-primary opacity-0 group-hover:opacity-100 transition-all"
                       >
                         <Trash2 size={16} />
                       </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-md bg-[#0e0506] border border-white/10 rounded-3xl p-8 shadow-2xl animate-fade-in-up">
             <div className="flex justify-between items-center mb-8">
               <h2 className="text-xl font-black text-white uppercase tracking-tighter">Nova Despesa</h2>
               <button onClick={() => setIsModalOpen(false)} className="text-slate-500 hover:text-white transition-colors">
                 <X size={24} />
               </button>
             </div>

             <form onSubmit={handleAdd} className="space-y-6">
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Descrição</label>
                   <input 
                     required
                     value={name}
                     onChange={e => setName(e.target.value)}
                     className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-all"
                     placeholder="Ex: Assinatura GPT, Proxy..."
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Valor (R$)</label>
                   <input 
                     required
                     type="number"
                     step="0.01"
                     value={amount}
                     onChange={e => setAmount(e.target.value)}
                     className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-all"
                     placeholder="0,00"
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Categoria</label>
                   <select 
                     value={category}
                     onChange={e => setCategory(e.target.value)}
                     className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-all appearance-none"
                   >
                     {CATEGORIES.map(cat => <option key={cat} value={cat} className="bg-slate-900">{cat}</option>)}
                   </select>
                </div>
                <button className="w-full py-4 bg-primary text-white font-black rounded-xl uppercase tracking-widest shadow-neon mt-4">
                   Salvar Despesa
                </button>
             </form>
          </div>
        </div>
      )}
    </div>
  );
}
