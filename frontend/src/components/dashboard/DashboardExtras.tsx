"use client";

import { Calendar as CalendarIcon, Zap, CheckCircle2, User } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Cell } from "recharts";

const data = [
  { day: 'D', value: 30 },
  { day: 'S', value: 45 },
  { day: 'T', value: 20 },
  { day: 'Q', value: 60 },
  { day: 'Q', value: 40 },
  { day: 'S', value: 55 },
  { day: 'S', value: 70 },
];

export function WeeklyPerformance() {
  return (
    <div className="gateway-card rounded-3xl p-8 flex-1">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-sm font-bold text-white tracking-wide flex items-center gap-2">
            <Zap size={16} className="text-[#FF8A00]" /> Performance Semanal
          </h3>
          <p className="text-[11px] text-gray-500 font-medium mt-1">Análise dos seus melhores dias.</p>
        </div>
        <div className="bg-[#ffffff05] border border-white/5 px-3 py-1 rounded-lg flex items-center gap-2">
           <User size={12} className="text-gray-500" />
           <span className="text-[10px] font-bold text-gray-400">VOCÊ</span>
        </div>
      </div>

      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#4b5563', fontSize: 11, fontWeight: 700}}
              dy={10}
            />
            <Tooltip 
              cursor={{fill: 'rgba(255,255,255,0.02)'}}
              contentStyle={{backgroundColor: '#0a0516', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px'}}
            />
            <Bar dataKey="value" radius={[4, 4, 4, 4]} barSize={40}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 1 ? '#7000FF' : '#1f1f23'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function RadarCard() {
  return (
    <div className="gateway-card rounded-3xl p-8 flex-1 relative overflow-hidden">
      {/* Background Icon Decor */}
      <CalendarIcon size={120} className="absolute -bottom-6 -right-6 text-white/5 -rotate-12" />
      
      <div className="mb-8 relative z-10">
        <h3 className="text-sm font-bold text-white tracking-wide flex items-center gap-2">
          <Zap size={16} className="text-primary-glow" /> Radar de Oportunidades
        </h3>
        <p className="text-[11px] text-gray-500 font-medium mt-1">Sugestões baseadas no calendário comercial.</p>
      </div>

      <div className="space-y-6 relative z-10">
        <div className="bg-[#ffffff03] border border-white/5 rounded-2xl p-4 flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-xl text-primary-glow">
            <CalendarIcon size={24} />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
               <CheckCircle2 size={14} className="text-[#10B981]" />
               <span className="text-xs font-bold text-white">Operação em período normal.</span>
            </div>
            <p className="text-[11px] text-gray-500 font-medium mt-0.5">Dia 8 do mês vigente.</p>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <div className="p-1 px-2 bg-white/5 rounded-md text-[10px] flex items-center gap-3">
             <span className="text-gray-500 font-bold uppercase">Melhor dia da Comunidade:</span>
             <span className="text-primary-glow font-bold ml-1">---</span>
          </div>
        </div>
      </div>
    </div>
  );
}
