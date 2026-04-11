"use client";

import { History, RefreshCcw, CheckCircle2, ArrowUpRight, ArrowDownRight, WifiOff, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import { useDashboard } from "@/components/layout/DashboardContext";

interface Operation {
  id: number;
  platform: string;
  type: "WITHDRAW" | "DEPOSIT";
  investment: number;
  withdraw: number;
  profit: number;
  sheet: string;
  cycles: string;
  date: string;
}

const formatBRL = (val: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(val);

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function ServerOperations() {
  const { formatValue, isValuesVisible } = useDashboard();
  const [operations, setOperations] = useState<Operation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchOperations = async () => {
    setLoading(true);
    setError(false);
    try {
      const { data } = await api.get("/server-operations");
      setOperations(data);
    } catch (_) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOperations();
  }, []);

  return (
    <div className="glass-card p-6 md:p-8 mt-8 w-full group">
      <div className="flex flex-col xl:flex-row justify-between xl:items-start gap-6 mb-8 md:mb-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <History size={18} />
          </div>
          <div className="flex flex-col text-left">
            <h3 className="text-sm font-black text-white tracking-wide uppercase">
              Operações salvas no servidor
            </h3>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">
              Itens do Livro Diário — sincronizados em tempo real
            </span>
          </div>
        </div>

        <button
          onClick={fetchOperations}
          className="flex items-center justify-center gap-2 bg-[#ffffff03] hover:bg-[#ffffff08] border border-white/5 px-4 py-2.5 rounded-xl transition-all duration-300 group/btn"
        >
          <RefreshCcw
            size={14}
            className={cn(
              "text-slate-400 transition-transform duration-500",
              loading ? "animate-spin" : "group-hover/btn:rotate-180"
            )}
          />
          <span className="text-[11px] font-black text-slate-300 uppercase tracking-widest">Sincronizar</span>
        </button>
      </div>

      {/* Loading skeleton */}
      {loading && (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl animate-pulse"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5" />
                <div className="space-y-2">
                  <div className="h-3 w-32 rounded bg-white/5" />
                  <div className="h-2 w-20 rounded bg-white/5" />
                </div>
              </div>
              <div className="h-4 w-20 rounded bg-white/5" />
            </div>
          ))}
        </div>
      )}

      {/* Error state */}
      {!loading && error && (
        <div className="flex flex-col items-center justify-center py-16 gap-3 text-slate-600">
          <WifiOff size={32} />
          <p className="text-[10px] font-bold uppercase tracking-widest">Erro de conexão</p>
          <button
            onClick={fetchOperations}
            className="text-[10px] text-primary font-bold hover:underline"
          >
            Tentar novamente
          </button>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && operations.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 gap-3 opacity-30">
          <BookOpen size={36} />
          <p className="text-[10px] font-bold uppercase tracking-widest">Nenhum registro ainda</p>
          <p className="text-[9px] text-center max-w-xs">
            Adicione itens no Controle Diário para que apareçam aqui.
          </p>
        </div>
      )}

      {/* Operations list */}
      {!loading && !error && operations.length > 0 && (
        <div className="space-y-4">
          {operations.map((op) => {
            const isProfit = op.profit >= 0;
            return (
              <div
                key={op.id}
                className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl group/item hover:border-white/10 transition-all"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className={cn(
                      "p-3 rounded-xl shrink-0",
                      isProfit ? "bg-emerald-500/10 text-emerald-500" : "bg-primary/10 text-primary"
                    )}
                  >
                    {isProfit ? <ArrowUpRight size={18} /> : <ArrowDownRight size={18} />}
                  </div>
                  <div className="flex flex-col text-left min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-black text-white tracking-tight truncate uppercase">
                        {op.platform}
                      </span>
                      <span className="text-[9px] font-black bg-white/5 text-slate-400 px-2 py-0.5 rounded border border-white/5 uppercase shrink-0">
                        {op.sheet}
                      </span>
                      <CheckCircle2 size={12} className="text-accent-emerald shrink-0" />
                    </div>
                    <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest">
                      {formatDate(op.date)} · {op.cycles}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1 ml-4 shrink-0">
                  <span
                    className={cn(
                      "text-sm font-black font-mono",
                      isProfit ? "text-emerald-500" : "text-primary"
                    )}
                  >
                    {isValuesVisible
                      ? (isProfit ? "+" : "") + formatBRL(op.profit)
                      : (isProfit ? "+R$ " : "-R$ ") + "*****"}
                  </span>
                  <span className="text-[8px] font-black uppercase text-slate-600 tracking-widest">
                    Lucro
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Footer count */}
      {!loading && !error && operations.length > 0 && (
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">
            {operations.length} registro(s) exibido(s)
          </span>
          <span className="text-[9px] text-accent-emerald font-bold uppercase tracking-widest flex items-center gap-1">
            <CheckCircle2 size={10} /> Sincronizado
          </span>
        </div>
      )}
    </div>
  );
}
