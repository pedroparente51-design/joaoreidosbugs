"use client";

import { useState, useEffect } from "react";
import { X, ExternalLink, Gift, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AnnouncementPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isClosed = sessionStorage.getItem("avisoFechado_v2");
    if (!isClosed) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("avisoFechado_v2", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-500">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={handleClose}
      />

      {/* Popup Content */}
      <div className="relative w-full max-w-lg bg-[#0e0c15]/90 border border-white/10 rounded-[32px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300">

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-full transition-all"
        >
          <X size={20} />
        </button>

        <div className="p-8 sm:p-12 flex flex-col items-center text-center space-y-8">

          {/* Icon Header */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
            <div className="relative w-20 h-20 bg-primary/10 border border-primary/20 rounded-3xl flex items-center justify-center text-primary rotate-3">
              <Gift size={40} className="-rotate-3" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tighter uppercase">
              🎁 ATENÇÃO
            </h2>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
              <ShieldAlert size={12} className="text-primary" />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Aviso em Destaque
              </span>
            </div>
            <p className="text-lg sm:text-xl font-bold text-slate-300 leading-tight pt-4">
              COMPRE O <span className="text-primary">GRUPO VIP</span> AQUI.
            </p>
          </div>

          {/* Actions */}
          <div className="w-full flex flex-col gap-3 pt-4">
            <a
              href="https://wa.me/5512981502272"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.2em] text-sm rounded-2xl flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(251,191,36,0.3)] hover:shadow-[0_8px_30px_rgba(251,191,36,0.4)] transition-all active:scale-[0.98] group"
            >
              TER ACESSO AO GRUPO
              <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <button
              onClick={handleClose}
              className="w-full h-14 bg-white/5 hover:bg-white/10 text-slate-500 hover:text-slate-300 font-bold uppercase tracking-widest text-[10px] rounded-2xl transition-all"
            >
              FECHAR AVISO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
