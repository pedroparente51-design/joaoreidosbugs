"use client";

import { Users, RefreshCw } from "lucide-react";

export function BasePeopleCard() {
  return (
    <div className="gateway-card rounded-2xl p-8 mb-8 relative overflow-hidden group">
      <div className="flex justify-between items-start mb-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent-cyan/10 rounded-lg text-accent-cyan">
             <Users size={20} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-white tracking-wide">Base de pessoas cadastradas em nosso dash</h3>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">Total de pessoas cadastradas</span>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-[#ffffff05] hover:bg-[#ffffff10] border border-white/5 px-4 py-2 rounded-xl transition-all duration-300 group/btn">
          <RefreshCw size={14} className="text-gray-400 group-hover/btn:rotate-180 transition-transform duration-500" />
          <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Atualizar Total</span>
        </button>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-end mb-2">
          <div className="flex flex-col gap-1">
             <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-none">Total de pessoas cadastradas</span>
             <p className="text-5xl font-black text-white tracking-tighter">11.723</p>
          </div>
          <div className="flex flex-col items-end gap-1">
             <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-none">Base Ativa</span>
             <p className="text-3xl font-black text-accent-cyan tracking-tighter">100%</p>
          </div>
        </div>

        {/* Custom Progress Bar */}
        <div className="h-4 w-full bg-white/5 rounded-full p-1 border border-white/5">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-blue-500 shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-1000"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}
