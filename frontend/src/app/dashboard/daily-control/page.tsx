"use client";

import { useEffect, useState, useMemo } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Trash2, 
  Edit2, 
  HelpCircle, 
  Layers, 
  Calendar,
  X,
  AlertCircle,
  Pencil,
  Activity as LucideActivity,
  Settings as SettingsIcon,
  CircleDollarSign,
  MoreVertical,
  CheckCircle2,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useDashboard } from "@/components/layout/DashboardContext";
import api from "@/lib/api";
import Modal from "@/components/layout/Modal";

// --- Types ---

interface DailyRecord {
  id: number;
  date: string; // ISO string 
  platform: string;
  investment: number;
  withdraw: number;
  cycles: string;
  profit?: number;
}

interface Sheet {
  id: number;
  name: string;
  records: DailyRecord[];
  proxyCost: number;
  smsCost: number;
}

type Period = '1D' | '7D' | '15D' | '30D' | 'TUDO';

// --- Utils ---

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

const dateToYMD = (d: Date | string) => {
  const date = new Date(d);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// --- Modal Component ---

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (record: Omit<DailyRecord, 'id' | 'profit'>) => void;
  editingRecord?: DailyRecord | null;
  selectedDate: Date;
}

function RecordModal({ isOpen, onClose, onSave, editingRecord, selectedDate }: ModalProps) {
  const [platform, setPlatform] = useState("");
  const [investment, setInvestment] = useState("");
  const [withdraw, setWithdraw] = useState("");
  const [cycles, setCycles] = useState("");

  useEffect(() => {
    if (isOpen) {
      if (editingRecord) {
        setPlatform(editingRecord.platform);
        setInvestment(editingRecord.investment.toString());
        setWithdraw(editingRecord.withdraw.toString());
        setCycles(editingRecord.cycles);
      } else {
        setPlatform("");
        setInvestment("");
        setWithdraw("");
        setCycles("");
      }
    }
  }, [editingRecord, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      date: editingRecord?.date || selectedDate.toISOString(),
      platform,
      investment: parseFloat(investment) || 0,
      withdraw: parseFloat(withdraw) || 0,
      cycles,
    });
    onClose();
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={editingRecord ? "Editar Registro" : "Adicionar Registro"}
      icon={<LucideActivity size={20} />}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Plataforma</label>
            <input
              required
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 outline-none transition-all placeholder:text-slate-700 font-bold"
              placeholder="Ex: Pinup, BC.Game..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Investimento (R$)</label>
              <input
                required
                type="number"
                step="0.01"
                value={investment}
                onChange={(e) => setInvestment(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 outline-none transition-all font-bold"
                placeholder="0,00"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Saque (R$)</label>
              <input
                required
                type="number"
                step="0.01"
                value={withdraw}
                onChange={(e) => setWithdraw(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 outline-none transition-all font-bold"
                placeholder="0,00"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Ciclos</label>
            <input
              required
              value={cycles}
              onChange={(e) => setCycles(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 outline-none transition-all font-bold"
              placeholder="Ex: 5 Ciclos"
            />
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95 uppercase tracking-widest text-[11px]"
          >
            {editingRecord ? "Salvar Alterações" : "Adicionar Item"}
          </button>
        </div>
      </form>
    </Modal>
  );
}

// --- Main Page Component ---

export default function DailyControlPage() {
  const { formatValue, isValuesVisible } = useDashboard();
  
  // States
  const [sheets, setSheets] = useState<Sheet[]>([]);
  const [activeSheetId, setActiveSheetId] = useState<number>(0);
  const [period, setPeriod] = useState<Period>('1D');
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSheetModalOpen, setIsSheetModalOpen] = useState(false);
  const [isCostModalOpen, setIsCostModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState<DailyRecord | null>(null);
  const [sheetFormName, setSheetFormName] = useState("");
  const [editingSheetId, setEditingSheetId] = useState<number | null>(null);
  const [costForm, setCostForm] = useState({ proxyCost: 0, smsCost: 0 });
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);

  // 1. Initial Load (API)
  useEffect(() => {
    const fetchSheets = async () => {
      try {
        const { data } = await api.get('/daily-sheets');
        if (data && data.length > 0) {
          setSheets(data);
          setActiveSheetId(data[0].id);
        } else {
          const { data: newSheet } = await api.post('/daily-sheets', { name: 'GERAL' });
          setSheets([{ ...newSheet, records: [] }]);
          setActiveSheetId(newSheet.id);
        }
      } catch (error) {
        console.error("Failed to load sheets", error);
      }
    };
    fetchSheets();
  }, []);

  // 3. Derived Logic
  const activeSheet = useMemo(() => 
    sheets.find(s => s.id === activeSheetId) || sheets[0] || { id: 0, name: 'GERAL', records: [], proxyCost: 0, smsCost: 0 }
  , [sheets, activeSheetId]);

  const isSameDay = (d1: Date, d2: Date) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    return date1.getUTCFullYear() === date2.getUTCFullYear() &&
           date1.getUTCMonth() === date2.getUTCMonth() &&
           date1.getUTCDate() === date2.getUTCDate();
  };

  const filteredRecords = useMemo(() => {
    const baseDateYMD = dateToYMD(selectedDate);
    return (activeSheet.records || []).filter(record => {
      const recDateYMD = dateToYMD(record.date);
      
      if (period === '1D') {
        return recDateYMD === baseDateYMD;
      }
      
      const recTime = new Date(record.date).setHours(0,0,0,0);
      const baseTime = new Date(selectedDate).setHours(0,0,0,0);
      const diffTime = Math.abs(baseTime - recTime);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      switch (period) {
        case '7D': return diffDays <= 7;
        case '15D': return diffDays <= 15;
        case '30D': return diffDays <= 30;
        case 'TUDO': return true;
        default: return true;
      }
    });
  }, [activeSheet, period, selectedDate]);

  const stats = useMemo(() => {
    const recordsInvestment = filteredRecords.reduce((acc, r) => acc + r.investment, 0);
    // Custos operacionais 
    const totalInvestment = recordsInvestment + (activeSheet.proxyCost || 0) + (activeSheet.smsCost || 0);
    const totalWithdraw = filteredRecords.reduce((acc, r) => acc + r.withdraw, 0);
    const profit = totalWithdraw - totalInvestment; // lucroLiquido = faturamento - investimento - proxy - sms
    const roi = totalInvestment > 0 ? (profit / totalInvestment) * 100 : 0;
    
    return { investment: totalInvestment, withdraw: totalWithdraw, profit, roi };
  }, [filteredRecords, activeSheet.proxyCost, activeSheet.smsCost]);

  // 4. Action Handlers
  const handleNextPrev = (dir: 'next' | 'prev') => {
    setPeriod('1D');
    const d = new Date(selectedDate);
    if (dir === 'next') d.setDate(d.getDate() + 1);
    else d.setDate(d.getDate() - 1);
    setSelectedDate(d);
  };

  const addOrUpdate = async (data: Omit<DailyRecord, 'id' | 'profit'>) => {
    try {
      if (editingRecord) {
        const { data: updated } = await api.put(`/daily-records/${editingRecord.id}`, data);
        setSheets(prev => prev.map(s => s.id === activeSheetId ? { 
          ...s, 
          records: s.records.map(r => r.id === editingRecord.id ? updated : r) 
        } : s));
      } else {
        const { data: added } = await api.post('/daily-records', { ...data, sheetId: activeSheetId });
        setSheets(prev => prev.map(s => s.id === activeSheetId ? {
          ...s,
          records: [added, ...s.records]
        } : s));
      }
    } catch (e) { console.error(e); }
  };

  const removeRecord = async (id: number) => {
    if (confirm("Deseja excluir este registro?")) {
      try {
        await api.delete(`/daily-records/${id}`);
        setSheets(prev => prev.map(s => s.id === activeSheetId ? { 
          ...s, records: s.records.filter(r => r.id !== id) 
        } : s));
      } catch (e) { console.error(e); }
    }
  };

  const { addToast } = useDashboard();

  const finalizeCooperation = async (record: DailyRecord) => {
    try {
      const { data } = await api.post(`/daily-records/${record.id}/finalize`);
      if (data.success) {
        // Update local state
        setSheets(prev => prev.map(s => s.id === activeSheetId ? {
          ...s,
          records: s.records.map(r => r.id === record.id ? { ...r, status: 'FINISHED' } : r)
        } : s));

        const profitValue = record.profit ?? (record.withdraw - record.investment);
        const formattedProfit = profitValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        
        addToast(`Remessa da plataforma ${record.platform} finalizada! Lucro: R$ ${formattedProfit}`, 'success');
      }
    } catch (e: any) {
      alert(e.response?.data?.error || "Erro ao finalizar cooperação");
      console.error(e);
    } finally {
      setActiveMenuId(null);
    }
  };

  const handleSheetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingSheetId) {
        await api.put(`/daily-sheets/${editingSheetId}`, { name: sheetFormName });
        setSheets(prev => prev.map(sh => sh.id === editingSheetId ? { ...sh, name: sheetFormName } : sh));
      } else {
        const { data } = await api.post('/daily-sheets', { name: sheetFormName });
        setSheets(prev => [...prev, { ...data, records: [] }]);
        setActiveSheetId(data.id);
      }
      setIsSheetModalOpen(false);
      setSheetFormName("");
      setEditingSheetId(null);
    } catch (e) { console.error(e); }
  };

  const handleCostSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.put(`/daily-sheets/${activeSheetId}`, costForm);
      setSheets(prev => prev.map(s => s.id === activeSheetId ? { ...s, ...costForm } : s));
      setIsCostModalOpen(false);
      alert("Custos salvos com sucesso!");
    } catch (e) { console.error("Error saving cost", e); }
  };

  const openAddSheet = () => {
    setEditingSheetId(null);
    setSheetFormName("");
    setIsSheetModalOpen(true);
  };

  const openEditSheet = (id: number) => {
    const s = sheets.find(sh => sh.id === id);
    if (!s) return;
    setEditingSheetId(id);
    setSheetFormName(s.name);
    setIsSheetModalOpen(true);
  };

  const openCostSettings = () => {
    setCostForm({ proxyCost: activeSheet.proxyCost || 0, smsCost: activeSheet.smsCost || 0 });
    setIsCostModalOpen(true);
  };

  const removeSheet = async (id: number) => {
    if (sheets.length <= 1) return;
    if (confirm("Excluir planilha e todos os seus dados?")) {
      try {
        await api.delete(`/daily-sheets/${id}`);
        const newSheets = sheets.filter(sh => sh.id !== id);
        setSheets(newSheets);
        setActiveSheetId(newSheets[0].id);
      } catch (e) { console.error(e); }
    }
  };

  const handleCostChange = (field: 'proxyCost' | 'smsCost', val: string) => {
    const num = parseFloat(val) || 0;
    // optimistic update for smooth UI
    setSheets(prev => prev.map(s => s.id === activeSheetId ? { ...s, [field]: num } : s));
  };

  const handleCostBlur = async (field: 'proxyCost' | 'smsCost') => {
    const sheet = sheets.find(s => s.id === activeSheetId);
    if (!sheet) return;
    try {
      await api.put(`/daily-sheets/${activeSheetId}`, { [field]: sheet[field] });
    } catch (e) { console.error("Error saving cost", e); }
  };

  return (
    <div className="space-y-8 animate-fade-in-up pb-20">
      
      {/* 1. Unified Control Box */}
      <div className="max-w-4xl mx-auto w-full glass-card p-6 md:p-10 space-y-10">
        
        {/* Date Controls */}
        <div className="flex justify-center items-center">
           <div className="flex items-center gap-6">
              <button onClick={() => handleNextPrev('prev')} className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-slate-400">
                 <ChevronLeft size={20} />
              </button>
              <div className="flex flex-col items-center min-w-[120px]">
                 <h1 className="text-3xl font-bold text-white tracking-tighter">
                   {selectedDate.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })}
                 </h1>
                 <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                   {selectedDate.toLocaleDateString('pt-BR', { weekday: 'long' })}
                 </span>
              </div>
              <button onClick={() => handleNextPrev('next')} className="p-3 bg-white/5 hover:bg-white/10 rounded-xl text-slate-400">
                 <ChevronRight size={20} />
              </button>
           </div>
        </div>

        {/* Period Filters */}
        <div className="w-full bg-white/[0.03] border border-white/5 p-1 rounded-2xl flex">
          {(['1D', '7D', '15D', '30D', 'TUDO'] as Period[]).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={cn(
                "flex-1 py-3 text-[10px] font-bold rounded-xl transition-all uppercase tracking-widest",
                period === p ? "bg-primary text-white shadow-md" : "text-slate-500 hover:text-slate-300"
              )}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Sheet Tabs */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
             <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                <Layers size={18} />
             </div>
             <span className="text-xs font-bold text-white uppercase tracking-widest">Planilhas</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {sheets.map(s => (
              <div key={s.id} className="relative group flex items-center">
                <button
                  onClick={() => setActiveSheetId(s.id)}
                  className={cn(
                    "px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap",
                    activeSheetId === s.id ? "bg-white text-black" : "bg-white/5 text-slate-500 hover:bg-white/10"
                  )}
                >
                  {s.name}
                </button>
                {activeSheetId === s.id && (
                  <div className="flex items-center gap-1 ml-1">
                    <button onClick={() => openEditSheet(s.id)} className="p-1.5 hover:bg-white/5 rounded-lg text-slate-500"><Pencil size={12} /></button>
                    <button onClick={() => removeSheet(s.id)} className="p-1.5 hover:bg-white/5 rounded-lg text-slate-500"><Trash2 size={12} /></button>
                  </div>
                )}
              </div>
            ))}
            <button onClick={openAddSheet} className="px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all">+</button>
          </div>
        </div>
      </div>

      {/* Operational Costs and Table Box */}
      <div className="space-y-6">
         <div className="flex items-center gap-3 px-2">
            <LucideActivity size={18} className="text-primary" />
            <h2 className="text-sm font-bold text-white uppercase tracking-widest">Livro Diário</h2>
         </div>

         <div className="glass-card overflow-hidden">
            {/* 1. Header Section: Costs & Metrics */}
            <div className="p-6 md:p-8 border-b border-white/5 bg-white/[0.01] space-y-8">
               
               {/* Row 1: Costs Inputs */}
               <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-6">
                     <div className="flex flex-col gap-1">
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Proxy</span>
                        <span className="text-sm font-bold text-white">{formatCurrency(activeSheet.proxyCost || 0)}</span>
                     </div>
                     <div className="w-px h-8 bg-white/10" />
                     <div className="flex flex-col gap-1">
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">SMS / Outros</span>
                        <span className="text-sm font-bold text-white">{formatCurrency(activeSheet.smsCost || 0)}</span>
                     </div>
                  </div>
                  <button 
                    onClick={openCostSettings}
                    className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10px] font-bold text-white uppercase tracking-widest transition-all"
                  >
                    <SettingsIcon size={14} className="text-primary" /> Configurar Custos
                  </button>
               </div>

               {/* Row 2: Summary Metrics & Add Button */}
               <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pt-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 flex-1">
                     <div className="space-y-1">
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Investimento</p>
                        <p className="text-lg font-bold text-white tracking-tighter">{formatValue(formatCurrency(stats.investment))}</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Faturamento</p>
                        <p className="text-lg font-bold text-white tracking-tighter">{formatValue(formatCurrency(stats.withdraw))}</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Lucro</p>
                        <p className={cn("text-lg font-bold tracking-tighter", stats.profit >= 0 ? "text-accent-blue" : "text-primary")}>
                           {formatValue(formatCurrency(stats.profit))}
                        </p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">ROI Global</p>
                        <p className={cn("text-lg font-bold tracking-tighter", stats.roi >= 0 ? "text-white" : "text-primary")}>
                           {isValuesVisible ? `${stats.roi.toFixed(1)}%` : '***%'}
                        </p>
                     </div>
                  </div>

                  <button 
                    onClick={() => { setEditingRecord(null); setIsModalOpen(true); }}
                    className="w-full lg:w-auto bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-bold text-[11px] uppercase tracking-widest shadow-lg shadow-primary/20 active:scale-95 transition-all"
                  >
                    <Plus size={18} /> Adicionar Item
                  </button>
               </div>
            </div>

            {/* 2. Table Section */}
            {filteredRecords.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 opacity-30">
                 <Calendar size={48} className="mb-4" />
                 <p className="text-sm font-bold uppercase">Vazio por aqui...</p>
                 <p className="text-xs">Nenhum registro encontrado neste período.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/[0.02]">
                       <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Investimento</th>
                       <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Plataforma</th>
                       <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Saque</th>
                       <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Ciclos</th>
                       <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Lucro</th>
                       <th className="px-6 py-4 text-right text-[10px] font-bold text-slate-500 uppercase tracking-widest">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredRecords.map(r => {
                      const computedProfit = r.profit ?? (r.withdraw - r.investment);
                      return (
                        <tr key={r.id} className="group hover:bg-white/[0.01] transition-colors">
                           <td className="px-6 py-4 text-sm font-bold text-white">{formatValue(formatCurrency(r.investment))}</td>
                           <td className="px-6 py-4">
                              <span className="text-[10px] font-bold text-slate-200 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 uppercase">{r.platform}</span>
                           </td>
                           <td className="px-6 py-4 text-sm font-bold text-white">{formatValue(formatCurrency(r.withdraw))}</td>
                           <td className="px-6 py-4 text-xs font-bold text-slate-400">{r.cycles}</td>
                           <td className={cn("px-6 py-4 text-sm font-bold", computedProfit >= 0 ? "text-accent-blue" : "text-primary")}>
                              {formatValue(formatCurrency(computedProfit))}
                           </td>
                           <td className="px-6 py-4 text-right relative">
                              <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                 <button 
                                   onClick={() => setActiveMenuId(activeMenuId === r.id ? null : r.id)}
                                   className={cn(
                                     "p-2 hover:bg-white/5 rounded-lg text-slate-400 transition-all",
                                     activeMenuId === r.id && "bg-white/10 text-white"
                                   )}
                                 >
                                   <MoreVertical size={14} />
                                 </button>
                                 <button onClick={() => { setEditingRecord(r); setIsModalOpen(true); }} className="p-2 hover:bg-white/5 rounded-lg text-slate-400"><Edit2 size={14} /></button>
                                 <button onClick={() => removeRecord(r.id)} className="p-2 hover:bg-white/5 rounded-lg text-slate-400"><Trash2 size={14} /></button>
                              </div>

                              {/* Dropdown Menu */}
                              {activeMenuId === r.id && (
                                <>
                                  <div className="fixed inset-0 z-10" onClick={() => setActiveMenuId(null)} />
                                  <div className="absolute right-6 top-12 w-48 bg-[#1a1625] border border-white/10 rounded-xl shadow-2xl z-20 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                    <button 
                                      onClick={() => { setActiveMenuId(null); setEditingRecord(r); setIsModalOpen(true); }}
                                      className="w-full flex items-center gap-3 px-4 py-3 text-[10px] font-bold text-slate-300 uppercase tracking-widest hover:bg-white/5 transition-colors"
                                    >
                                      <Zap size={14} className="text-primary" />
                                      Finalizar ciclo
                                    </button>
                                    <button 
                                      onClick={() => finalizeCooperation(r)}
                                      className="w-full flex items-center gap-3 px-4 py-3 text-[10px] font-bold text-accent-blue uppercase tracking-widest hover:bg-accent-blue/5 transition-colors border-t border-white/5"
                                    >
                                      <CheckCircle2 size={14} />
                                      Finalizar cooperação
                                    </button>
                                  </div>
                                </>
                              )}
                           </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
         </div>
      </div>

      <RecordModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addOrUpdate}
        editingRecord={editingRecord}
        selectedDate={selectedDate}
      />

      <Modal
        isOpen={isSheetModalOpen}
        onClose={() => setIsSheetModalOpen(false)}
        title={editingSheetId ? "Editar Planilha" : "Nova Planilha"}
        icon={<Layers size={20} />}
      >
        <form onSubmit={handleSheetSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Nome da Planilha</label>
            <input
              required
              value={sheetFormName}
              onChange={(e) => setSheetFormName(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:border-primary/50 outline-none transition-all placeholder:text-slate-700 font-bold text-lg"
              placeholder="Ex: Tropa 01, Operação X..."
            />
          </div>
          <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95 uppercase tracking-widest text-[11px]">
            {editingSheetId ? "Salvar Alterações" : "Criar Planilha"}
          </button>
        </form>
      </Modal>

      <Modal
        isOpen={isCostModalOpen}
        onClose={() => setIsCostModalOpen(false)}
        title="Configurar Custos Operacionais"
        icon={<CircleDollarSign size={20} />}
      >
        <form onSubmit={handleCostSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Custo Proxy (R$)</label>
              <input
                type="number"
                step="0.01"
                value={costForm.proxyCost}
                onChange={(e) => setCostForm({ ...costForm, proxyCost: parseFloat(e.target.value) || 0 })}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 outline-none transition-all font-bold"
                placeholder="0,00"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Custo SMS / Outros (R$)</label>
              <input
                type="number"
                step="0.01"
                value={costForm.smsCost}
                onChange={(e) => setCostForm({ ...costForm, smsCost: parseFloat(e.target.value) || 0 })}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary/50 outline-none transition-all font-bold"
                placeholder="0,00"
              />
            </div>
          </div>
          <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95 uppercase tracking-widest text-[11px]">
            SALVAR CONFIGURAÇÕES
          </button>
        </form>
      </Modal>
    </div>
  );
}
