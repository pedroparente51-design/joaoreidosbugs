"use client";

import { useEffect, useState, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Trash2,
  Edit2,
  Layers,
  Calendar,
  Pencil,
  Activity as LucideActivity,
  TrendingDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useDashboard } from "@/components/layout/DashboardContext";
import api from "@/lib/api";
import Modal from "@/components/layout/Modal";

// --- Types ---

interface CpaRecord {
  id: number;
  date: string;
  plataforma: string;
  deposito: number;
  saque: number;
  donoRecebeu: number;
  cpa: number;
  observation?: string;
  resultado?: number;
}

interface CpaSheet {
  id: number;
  name: string;
  records: CpaRecord[];
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
  onSave: (data: any) => void;
  editingRecord?: CpaRecord | null;
  selectedDate: Date;
}

function RecordModal({ isOpen, onClose, onSave, editingRecord, selectedDate }: ModalProps) {
  const [cycles, setCycles] = useState([{ plataforma: "", deposito: 0, saque: 0, donoRecebeu: 0, cpa: 0, observation: "" }]);

  useEffect(() => {
    if (isOpen) {
      if (editingRecord) {
        setCycles([{
          plataforma: editingRecord.plataforma,
          deposito: editingRecord.deposito,
          saque: editingRecord.saque,
          donoRecebeu: editingRecord.donoRecebeu,
          cpa: editingRecord.cpa,
          observation: editingRecord.observation || ""
        }]);
      } else {
        setCycles([{ plataforma: "", deposito: 0, saque: 0, donoRecebeu: 0, cpa: 0, observation: "" }]);
      }
    }
  }, [editingRecord, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingRecord) {
      onSave(cycles[0]);
    } else {
      onSave(cycles);
    }
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={editingRecord ? "Editar Registro" : "Adicionar Registro"}
      icon={<TrendingDown size={20} />}
    >
      <form onSubmit={handleSubmit} className="space-y-6 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
        {cycles.map((cycle, index) => (
          <div key={index} className="space-y-4 p-4 border border-white/5 rounded-2xl bg-white/[0.02]">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">Item {index + 1}</span>
              {!editingRecord && cycles.length > 1 && (
                <button type="button" onClick={() => setCycles(cycles.filter((_, i) => i !== index))} className="text-red-500 hover:text-red-400 text-xs font-bold uppercase tracking-widest">Remover</button>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Plataforma</label>
              <input type="text" value={cycle.plataforma} onChange={(e) => {
                const newCycles = [...cycles];
                newCycles[index].plataforma = e.target.value;
                setCycles(newCycles);
              }} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-violet-500/50 outline-none transition-all font-bold" placeholder="Ex: Bet365, Betano..." />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-red-400 uppercase tracking-widest ml-1">Depósito (−)</label>
                <input type="number" step="0.01" value={cycle.deposito || ''} onChange={(e) => {
                  const newCycles = [...cycles];
                  newCycles[index].deposito = parseFloat(e.target.value) || 0;
                  setCycles(newCycles);
                }} className="w-full bg-[#0a0a0a] border border-red-500/20 rounded-xl px-4 py-3 text-white focus:border-red-500/50 outline-none transition-all font-bold" placeholder="0,00" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest ml-1">Saque (+)</label>
                <input type="number" step="0.01" value={cycle.saque || ''} onChange={(e) => {
                  const newCycles = [...cycles];
                  newCycles[index].saque = parseFloat(e.target.value) || 0;
                  setCycles(newCycles);
                }} className="w-full bg-[#0a0a0a] border border-emerald-500/20 rounded-xl px-4 py-3 text-white focus:border-emerald-500/50 outline-none transition-all font-bold" placeholder="0,00" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-red-400 uppercase tracking-widest ml-1">Quanto dono recebeu (−)</label>
                <input type="number" step="0.01" value={cycle.donoRecebeu || ''} onChange={(e) => {
                  const newCycles = [...cycles];
                  newCycles[index].donoRecebeu = parseFloat(e.target.value) || 0;
                  setCycles(newCycles);
                }} className="w-full bg-[#0a0a0a] border border-red-500/20 rounded-xl px-4 py-3 text-white focus:border-red-500/50 outline-none transition-all font-bold" placeholder="0,00" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest ml-1">CPA (+)</label>
                <input type="number" step="0.01" value={cycle.cpa || ''} onChange={(e) => {
                  const newCycles = [...cycles];
                  newCycles[index].cpa = parseFloat(e.target.value) || 0;
                  setCycles(newCycles);
                }} className="w-full bg-[#0a0a0a] border border-emerald-500/20 rounded-xl px-4 py-3 text-white focus:border-emerald-500/50 outline-none transition-all font-bold" placeholder="0,00" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Observação</label>
              <textarea value={cycle.observation} onChange={(e) => {
                const newCycles = [...cycles];
                newCycles[index].observation = e.target.value;
                setCycles(newCycles);
              }} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-violet-500/50 outline-none transition-all h-20 resize-none font-bold" placeholder="Opcional..." />
            </div>
          </div>
        ))}

        {!editingRecord && (
          <button
            type="button"
            onClick={() => setCycles([...cycles, { plataforma: "", deposito: 0, saque: 0, donoRecebeu: 0, cpa: 0, observation: "" }])}
            className="w-full border border-dashed border-white/10 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            <Plus size={14} /> Adicionar novo item
          </button>
        )}

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95 uppercase tracking-widest text-[11px]"
          >
            {editingRecord ? "Salvar Alterações" : `Adicionar ${cycles.length} Item(s)`}
          </button>
        </div>
      </form>
    </Modal>
  );
}

// --- Main Page Component ---

export default function CpaNegativoPage() {
  const { formatValue, isValuesVisible } = useDashboard();

  // States
  const [sheets, setSheets] = useState<CpaSheet[]>([]);
  const [activeSheetId, setActiveSheetId] = useState<number>(0);
  const [period, setPeriod] = useState<Period>('1D');
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSheetModalOpen, setIsSheetModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState<CpaRecord | null>(null);
  const [sheetFormName, setSheetFormName] = useState("");
  const [editingSheetId, setEditingSheetId] = useState<number | null>(null);

  // 1. Initial Load (API)
  useEffect(() => {
    const fetchSheets = async () => {
      try {
        const { data } = await api.get('/cpa-sheets');
        if (data && data.length > 0) {
          setSheets(data);
          setActiveSheetId(data[0].id);
        } else {
          const { data: newSheet } = await api.post('/cpa-sheets', { name: 'GERAL' });
          setSheets([{ ...newSheet, records: [] }]);
          setActiveSheetId(newSheet.id);
        }
      } catch (error) {
        console.error("Failed to load cpa sheets", error);
      }
    };
    fetchSheets();
  }, []);

  // 3. Derived Logic
  const activeSheet = useMemo(() =>
    sheets.find(s => s.id === activeSheetId) || sheets[0] || { id: 0, name: 'GERAL', records: [] }
    , [sheets, activeSheetId]);

  const filteredRecords = useMemo(() => {
    const baseDateYMD = dateToYMD(selectedDate);
    return (activeSheet.records || []).filter(record => {
      const recDateYMD = dateToYMD(record.date);

      if (period === '1D') {
        return recDateYMD === baseDateYMD;
      }

      const recTime = new Date(record.date).setHours(0, 0, 0, 0);
      const baseTime = new Date(selectedDate).setHours(0, 0, 0, 0);
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
    const totalDeposito = filteredRecords.reduce((acc, r) => acc + r.deposito, 0);
    const totalSaque = filteredRecords.reduce((acc, r) => acc + r.saque, 0);
    const totalDonoRecebeu = filteredRecords.reduce((acc, r) => acc + r.donoRecebeu, 0);
    const totalCpa = filteredRecords.reduce((acc, r) => acc + r.cpa, 0);
    const resultado = (totalSaque + totalCpa) - (totalDeposito + totalDonoRecebeu);

    return { totalDeposito, totalSaque, totalDonoRecebeu, totalCpa, resultado };
  }, [filteredRecords]);

  // 4. Action Handlers
  const handleNextPrev = (dir: 'next' | 'prev') => {
    setPeriod('1D');
    const d = new Date(selectedDate);
    if (dir === 'next') d.setDate(d.getDate() + 1);
    else d.setDate(d.getDate() - 1);
    setSelectedDate(d);
  };

  const addOrUpdate = async (data: any) => {
    try {
      if (editingRecord) {
        const { data: updated } = await api.put(`/cpa-records/${editingRecord.id}`, data);
        setSheets(prev => prev.map(s => s.id === activeSheetId ? {
          ...s,
          records: s.records.map(r => r.id === editingRecord.id ? updated : r)
        } : s));
      } else {
        await api.post('/cpa-records', { 
          cycles: data,
          sheetId: activeSheetId, 
          date: dateToYMD(selectedDate) 
        });        
        const { data: sheetsData } = await api.get('/cpa-sheets');
        setSheets(sheetsData);
      }
    } catch (e) { console.error(e); }
  };

  const removeRecord = async (id: number) => {
    if (confirm("Deseja excluir este registro?")) {
      try {
        await api.delete(`/cpa-records/${id}`);
        setSheets(prev => prev.map(s => s.id === activeSheetId ? {
          ...s, records: s.records.filter(r => r.id !== id)
        } : s));
      } catch (e) { console.error(e); }
    }
  };

  const handleSheetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingSheetId) {
        await api.put(`/cpa-sheets/${editingSheetId}`, { name: sheetFormName });
        setSheets(prev => prev.map(sh => sh.id === editingSheetId ? { ...sh, name: sheetFormName } : sh));
      } else {
        const { data } = await api.post('/cpa-sheets', { name: sheetFormName });
        setSheets(prev => [...prev, { ...data, records: [] }]);
        setActiveSheetId(data.id);
      }
      setIsSheetModalOpen(false);
      setSheetFormName("");
      setEditingSheetId(null);
    } catch (e) { console.error(e); }
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

  const removeSheet = async (id: number) => {
    if (sheets.length <= 1) return;
    if (confirm("Excluir planilha e todos os seus dados?")) {
      try {
        await api.delete(`/cpa-sheets/${id}`);
        const newSheets = sheets.filter(sh => sh.id !== id);
        setSheets(newSheets);
        setActiveSheetId(newSheets[0].id);
      } catch (e) { console.error(e); }
    }
  };

  return (
    <div className="space-y-8 animate-fade-in-up pb-20">

      {/* 1. Unified Control Box */}
      <div className="max-w-4xl mx-auto w-full glass-card p-6 md:p-10 space-y-10">

        {/* Header */}
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-2xl font-black text-white uppercase tracking-tight">CPA Negativo</h1>
        </div>

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
              <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest">
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
                period === p ? "bg-violet-600 text-white shadow-md" : "text-slate-500 hover:text-slate-300"
              )}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Sheet Tabs */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-violet-500/10 rounded-lg text-violet-400">
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
            <button onClick={openAddSheet} className="px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase bg-violet-500/10 text-violet-400 border border-violet-500/20 hover:bg-violet-500/20 transition-all">+</button>
          </div>
        </div>
      </div>

      {/* Records Table Box */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 px-2">
          <TrendingDown size={18} className="text-violet-400" />
          <h2 className="text-sm font-bold text-white uppercase tracking-widest">Registros CPA Negativo</h2>
        </div>

        <div className="glass-card overflow-hidden">
          {/* Header Section: Summary Metrics & Add Button */}
          <div className="p-6 md:p-8 border-b border-white/5 bg-white/[0.01] space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 flex-1">
                <div className="space-y-1">
                  <p className="text-[9px] font-bold text-red-400 uppercase tracking-widest">Depósito</p>
                  <p className="text-lg font-bold text-white tracking-tighter">{formatValue(formatCurrency(stats.totalDeposito))}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">Saque</p>
                  <p className="text-lg font-bold text-white tracking-tighter">{formatValue(formatCurrency(stats.totalSaque))}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-bold text-red-400 uppercase tracking-widest">Dono recebeu</p>
                  <p className="text-lg font-bold text-white tracking-tighter">{formatValue(formatCurrency(stats.totalDonoRecebeu))}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">CPA</p>
                  <p className="text-lg font-bold text-white tracking-tighter">{formatValue(formatCurrency(stats.totalCpa))}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Resultado</p>
                  <p className={cn("text-lg font-bold tracking-tighter", stats.resultado >= 0 ? "text-emerald-400" : "text-red-400")}>
                    {formatValue(formatCurrency(stats.resultado))}
                  </p>
                </div>
              </div>

              <button
                onClick={() => { setEditingRecord(null); setIsModalOpen(true); }}
                className="w-full lg:w-auto bg-violet-600 hover:bg-violet-500 text-white flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-bold text-[11px] uppercase tracking-widest shadow-lg shadow-violet-600/20 active:scale-95 transition-all"
              >
                <Plus size={18} /> Adicionar Item
              </button>
            </div>
          </div>

          {/* Table Section */}
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
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Plataforma</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-red-400 uppercase tracking-widest">Depósito</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Saque</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-red-400 uppercase tracking-widest">Dono recebeu</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">CPA</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Resultado</th>
                    <th className="px-6 py-4 text-right text-[10px] font-bold text-slate-500 uppercase tracking-widest">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredRecords.map(r => {
                    const computedResult = r.resultado ?? ((r.saque + r.cpa) - (r.deposito + r.donoRecebeu));
                    return (
                      <tr key={r.id} className="group hover:bg-white/[0.01] transition-colors">
                        <td className="px-6 py-4">
                          <span className="text-[10px] font-bold text-slate-200 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 uppercase">{r.plataforma || "---"}</span>
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-red-300">{formatValue(formatCurrency(r.deposito))}</td>
                        <td className="px-6 py-4 text-sm font-bold text-emerald-300">{formatValue(formatCurrency(r.saque))}</td>
                        <td className="px-6 py-4 text-sm font-bold text-red-300">{formatValue(formatCurrency(r.donoRecebeu))}</td>
                        <td className="px-6 py-4 text-sm font-bold text-emerald-300">{formatValue(formatCurrency(r.cpa))}</td>
                        <td className={cn("px-6 py-4 text-sm font-bold", computedResult >= 0 ? "text-emerald-400" : "text-red-400")}>
                          {formatValue(formatCurrency(computedResult))}
                        </td>
                        <td className="px-6 py-4 text-right relative">
                          <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => { setEditingRecord(r); setIsModalOpen(true); }} className="p-2 hover:bg-white/5 rounded-lg text-slate-400"><Edit2 size={14} /></button>
                            <button onClick={() => removeRecord(r.id)} className="p-2 hover:bg-white/5 rounded-lg text-slate-400"><Trash2 size={14} /></button>
                          </div>
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
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:border-violet-500/50 outline-none transition-all placeholder:text-slate-700 font-bold text-lg"
              placeholder="Ex: CPA Bet365, CPA Betano..."
            />
          </div>
          <button type="submit" className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95 uppercase tracking-widest text-[11px]">
            {editingSheetId ? "Salvar Alterações" : "Criar Planilha"}
          </button>
        </form>
      </Modal>
    </div>
  );
}
