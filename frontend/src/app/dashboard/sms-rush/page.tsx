"use client";

import { useState } from "react";
import { Mail, Send, History, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import Modal from "@/components/layout/Modal";

export default function SMSRushPage() {
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [history, setHistory] = useState([
    { id: 1, phone: "12 98150-XXXX", status: "Sent", time: "10:30 AM" },
    { id: 2, phone: "11 97231-XXXX", status: "Delivered", time: "09:15 AM" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message || !phone) return;
    setIsSending(true);
    setTimeout(() => {
      setHistory([{ id: Date.now(), phone, status: "Sent", time: "Just now" }, ...history]);
      setMessage("");
      setPhone("");
      setIsSending(false);
      setIsModalOpen(false);
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <Mail className="text-primary" size={32} /> SMSRush
          </h1>
          <p className="text-slate-500 font-medium">Envio de SMS em massa com alta taxa de entrega.</p>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-neon"
        >
          <Send size={18} /> Nova Campanha
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-6">
          <div className="glass-card p-6 flex-1">
             <h2 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2 mb-6">
               <History size={14} className="text-primary" /> Histórico Completo
             </h2>
             <div className="divide-y divide-white/5">
               {history.map(item => (
                 <div key={item.id} className="flex justify-between items-center py-6 group hover:bg-white/[0.01] transition-all px-4 -mx-4 rounded-xl">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-slate-500"><Mail size={16} /></div>
                      <div className="flex flex-col">
                         <span className="text-sm font-bold text-white font-mono tracking-tight">{item.phone}</span>
                         <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{item.time}</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                     <span className="px-3 py-1 rounded-full text-[9px] font-black uppercase bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                       {item.status}
                     </span>
                     <CheckCircle2 size={16} className="text-emerald-500/50" />
                   </div>
                 </div>
               ))}
               {history.length === 0 && (
                 <div className="p-20 text-center opacity-30 italic text-sm">Nenhuma campanha recente...</div>
               )}
             </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6 space-y-6">
            <h2 className="text-xs font-black text-white uppercase tracking-widest flex items-center gap-2">
              <Clock size={14} className="text-primary" /> Saldo Atual
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
               <p className="text-4xl font-black text-white tracking-tighter">1.250</p>
               <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1 block">Créditos Disponíveis</span>
            </div>
            <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] transition-all">
              Recarregar Créditos
            </button>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Nova Campanha SMS"
        icon={<Send size={20} />}
      >
        <form onSubmit={handleSend} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Número de Destino</label>
            <input 
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="DDD + Número"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-primary outline-none transition-all font-mono"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Mensagem</label>
            <textarea 
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escreva sua mensagem aqui..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-primary outline-none transition-all h-32 resize-none"
            />
            <div className="flex justify-between items-center px-1">
               <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">{message.length}/160 caracteres</span>
               <span className="text-[10px] text-primary/60 font-black uppercase tracking-widest italic">Consumo: 1 Crédito</span>
            </div>
          </div>

          <button 
            type="submit"
            disabled={isSending || !message || !phone}
            className={cn(
              "w-full py-4 rounded-xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3",
              isSending 
                ? "bg-slate-800 text-slate-500 cursor-not-allowed" 
                : "bg-primary text-white shadow-neon hover:scale-[1.01] active:scale-95"
            )}
          >
            {isSending ? (
              <>
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send size={18} /> Disparar SMS
              </>
            )}
          </button>
        </form>
      </Modal>
    </div>
  );
}
