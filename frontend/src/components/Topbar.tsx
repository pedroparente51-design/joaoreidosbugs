"use client";

import { Bell, Search, User } from "lucide-react";

export function Topbar() {
  return (
    <header className="h-20 sticky top-0 z-30 w-full bg-surface/40 backdrop-blur-md border-b border-white/5 px-8 flex items-center justify-between">
      {/* Search area */}
      <div className="hidden md:flex items-center w-96 relative">
        <Search className="absolute left-3 text-gray-500 h-4 w-4" />
        <input 
          type="text" 
          placeholder="Pesquisar..." 
          className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all font-medium" 
        />
      </div>

      {/* Profile area */}
      <div className="flex items-center gap-6">
        <button className="relative p-2 rounded-xl hover:bg-white/5 text-gray-400 transition-colors">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-accent-pink rounded-full border-2 border-surface animate-pulse" />
        </button>

        <div className="h-8 w-px bg-white/10 mx-2" />

        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-sm font-bold text-white leading-none">João Rei</span>
            <span className="text-[11px] text-gray-500 font-semibold mt-1">Nível Admin</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent-cyan p-[2px]">
            <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
