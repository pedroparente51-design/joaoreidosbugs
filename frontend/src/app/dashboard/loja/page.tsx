"use client";

import { ShoppingBag, Globe, Zap, Shield, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    category: "Proxies Residenciais",
    items: [
      { name: "Proxy BR Premium", price: "R$ 45,00", unit: "/ mensal", icon: Globe, highlight: true },
      { name: "Proxy USA HighSpeed", price: "R$ 38,00", unit: "/ mensal", icon: Zap },
      { name: "Proxy Mix Global", price: "R$ 29,00", unit: "/ mensal", icon: Shield },
    ]
  },
  {
    category: "Outros Serviços",
    items: [
      { name: "Conta Google Verificada", price: "R$ 15,00", unit: "/ un", icon: Shield },
      { name: "Aquecimento de Perfil", price: "R$ 55,00", unit: "/ un", icon: Zap, highlight: true },
    ]
  }
];

export default function LojaPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-12 animate-fade-in-up pb-20">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent p-8 md:p-12 rounded-[2rem] border border-primary/20 relative overflow-hidden">
        <div className="relative z-10 flex flex-col gap-4">
           <div className="px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full w-fit">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">OFERTAS DA SEMANA</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
             Melhore sua <br className="hidden md:block" /> Operação agora.
           </h1>
           <p className="text-slate-400 max-w-md text-sm md:text-base font-medium">
             As melhores ferramentas e proxies residenciais selecionadas para maximizar seus resultados.
           </p>
        </div>
        
        <div className="relative z-10 hidden lg:block">
           <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] shadow-neon">
              <ShoppingBag size={80} className="text-primary animate-pulse" />
           </div>
        </div>

        {/* Decor */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      </div>

      {/* Services Grid */}
      <div className="space-y-12">
        {services.map((section) => (
          <div key={section.category} className="space-y-8">
            <h2 className="text-xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
               <span className="w-8 h-1 bg-primary rounded-full" /> {section.category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.name}
                    className={cn(
                      "glass-card p-8 flex flex-col gap-8 group hover:border-primary/40 transition-all duration-500 relative overflow-hidden",
                      item.highlight && "border-primary/20 bg-primary/[0.02]"
                    )}
                  >
                    {item.highlight && (
                      <div className="absolute top-0 right-0 px-4 py-1.5 bg-primary text-white text-[9px] font-black uppercase tracking-widest rounded-bl-2xl">
                        Mais Vendido
                      </div>
                    )}

                    <div className="flex justify-between items-start">
                       <div className="p-4 bg-white/5 rounded-2xl text-white group-hover:bg-primary group-hover:text-white transition-all duration-500">
                          <Icon size={24} />
                       </div>
                    </div>

                    <div className="space-y-2">
                       <h3 className="text-xl font-bold text-white tracking-tight">{item.name}</h3>
                       <p className="text-xs text-slate-500 font-medium font-mono uppercase tracking-widest">Entrega imediata via e-mail</p>
                    </div>

                    <div className="flex justify-between items-end pt-4">
                       <div className="flex flex-col">
                          <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest">A partir de</span>
                          <p className="text-2xl font-black text-white">
                             {item.price}<span className="text-xs text-slate-500 font-bold"> {item.unit}</span>
                          </p>
                       </div>
                       <button className="p-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 group-hover:bg-primary/20 group-hover:text-primary group-hover:border-primary/30 transition-all">
                          <ChevronRight size={20} />
                       </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
