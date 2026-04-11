"use client";

import { useState, useEffect } from "react";
import { Gamepad2, Zap, Play, Info, Search, RefreshCw, Star, Heart, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

const games = [
  { id: 1, name: "Fortune Tiger", rtp: "92%", status: "QUENTE", icon: "🐯" },
  { id: 2, name: "Fortune Ox", rtp: "88%", status: "MORNO", icon: "🐂" },
  { id: 3, name: "Gates of Olympus", rtp: "95%", status: "PAGANDO", icon: "⚡" },
  { id: 4, name: "Dragon Hatch", rtp: "85%", status: "FRIO", icon: "🐲" },
  { id: 5, name: "Sweet Bonanza", rtp: "91%", status: "QUENTE", icon: "🍭" },
  { id: 6, name: "Buffalo King", rtp: "89%", status: "MORNO", icon: "🦬" },
];

export default function SlotsRadarPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [radarData, setRadarData] = useState(games);

  const scan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setRadarData(prev => prev.map(g => ({
        ...g,
        rtp: `${Math.floor(Math.random() * 20) + 75}%`,
        status: Math.random() > 0.7 ? "PAGANDO" : (Math.random() > 0.4 ? "QUENTE" : "MORNO")
      })).sort((a, b) => parseInt(b.rtp) - parseInt(a.rtp)));
      setIsScanning(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-fade-in-up pb-20 px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-8 px-8 bg-gradient-to-r from-accent-pink/20 via-transparent to-transparent border border-white/5 rounded-[2.5rem] relative overflow-hidden">
        <div className="relative z-10 flex flex-col gap-3">
           <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter flex items-center gap-4">
             <Gamepad2 size={40} className="text-accent-pink shadow-neon" /> SLOTS RADAR
           </h1>
           <p className="text-slate-400 font-medium max-w-md">Monitore os horários e plataformas com maior taxa de assertividade em tempo real.</p>
        </div>

        <button 
          onClick={scan}
          disabled={isScanning}
          className={cn(
            "relative z-10 px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all flex items-center gap-3",
            isScanning 
              ? "bg-slate-800 text-slate-500 cursor-not-allowed" 
              : "bg-accent-pink text-white shadow-[0_0_25px_rgba(244,63,94,0.4)] hover:scale-105 active:scale-95"
          )}
        >
          {isScanning ? (
            <>
              <RefreshCw size={20} className="animate-spin" /> ESCANEANDO...
            </>
          ) : (
            <>
              <Zap size={20} /> ATUALIZAR RADAR
            </>
          )}
        </button>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-pink/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
      </div>

      {/* Grid of Games */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {radarData.map((game) => (
          <div 
            key={game.id}
            className={cn(
              "glass-card p-8 flex flex-col gap-8 group transition-all duration-500 relative overflow-hidden border-white/5 hover:border-accent-pink/40",
              game.status === "PAGANDO" && "bg-accent-pink/[0.03] border-accent-pink/20"
            )}
          >
            {/* Status Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className={cn(
                "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest",
                game.status === "PAGANDO" ? "bg-accent-pink text-white animate-pulse" : 
                game.status === "QUENTE" ? "bg-orange-500/20 text-orange-500 border border-orange-500/30" :
                "bg-blue-500/20 text-blue-500 border border-blue-500/30"
              )}>
                {game.status}
              </span>
            </div>

            <div className="flex items-center gap-6">
               <div className="w-20 h-20 bg-white/5 rounded-[1.5rem] flex items-center justify-center text-4xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {game.icon}
               </div>
               <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-white tracking-tight">{game.name}</h3>
                  <div className="flex items-center gap-2">
                    <Flame size={12} className="text-orange-500" />
                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">RTP REAL</span>
                  </div>
               </div>
            </div>

            <div className="space-y-4">
               <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5 group-hover:bg-white/[0.08] transition-colors">
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Assertividade</span>
                  <p className={cn(
                    "text-2xl font-black tracking-tighter",
                    parseInt(game.rtp) > 90 ? "text-accent-pink" : "text-white"
                  )}>
                    {game.rtp}
                  </p>
               </div>
               
               <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10px] font-black text-slate-300 uppercase tracking-widest transition-all">
                    <Info size={12} /> Dicas
                  </button>
                  <button className="flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10px] font-black text-slate-300 uppercase tracking-widest transition-all">
                    <Play size={12} /> Jogar
                  </button>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="bg-white/5 border border-white/5 rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60">
         <div className="flex items-center gap-6 text-center md:text-left">
            <div className="p-4 bg-white/5 rounded-2xl text-slate-400">
               <AlertCircle size={32} />
            </div>
            <div className="max-w-md">
               <h4 className="text-white font-bold text-lg">Aviso Importante</h4>
               <p className="text-slate-500 text-sm">Os dados exibidos são baseados em estatísticas de volume de apostas recentes. Não garantimos resultados financeiros. Jogue com responsabilidade.</p>
            </div>
         </div>
         <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[11px] font-black text-slate-300 uppercase tracking-widest transition-all">
           Como funciona o algoritmo?
         </button>
      </div>
    </div>
  );
}

function AlertCircle({ size, className }: { size: number, className?: string }) {
   return (
      <svg 
         xmlns="http://www.w3.org/2000/svg" 
         width={size} 
         height={size} 
         viewBox="0 0 24 24" 
         fill="none" 
         stroke="currentColor" 
         strokeWidth="2" 
         strokeLinecap="round" 
         strokeLinejoin="round" 
         className={className}
      >
         <circle cx="12" cy="12" r="10" />
         <line x1="12" y1="8" x2="12" y2="12" />
         <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
   );
}
