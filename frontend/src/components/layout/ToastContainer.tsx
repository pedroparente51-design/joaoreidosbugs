"use client";

import { useDashboard } from "./DashboardContext";
import { X, CheckCircle2, AlertCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ToastContainer() {
  const { toasts, removeToast } = useDashboard();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-3 pointer-events-none max-w-sm w-full">
      {toasts.map((toast) => {
        const icons = {
          success: <CheckCircle2 size={18} className="text-emerald-400" />,
          error: <AlertCircle size={18} className="text-primary" />,
          info: <Info size={18} className="text-accent-blue" />,
        };

        const borderColors = {
          success: "border-emerald-500/30",
          error: "border-primary/30",
          info: "border-accent-blue/30",
        };

        const bgColors = {
          success: "bg-emerald-500/5",
          error: "bg-primary/5",
          info: "bg-accent-blue/5",
        };

        return (
          <div
            key={toast.id}
            className={cn(
              "pointer-events-auto flex items-start gap-4 p-5 rounded-2xl border backdrop-blur-xl transition-all animate-fade-in-right",
              "bg-[#0a0a0c]/80",
              borderColors[toast.type],
              bgColors[toast.type]
            )}
          >
            <div className="shrink-0 mt-0.5">
              {icons[toast.type]}
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-xs font-bold text-white uppercase tracking-wider">{toast.type === 'success' ? 'Sucesso' : (toast.type === 'error' ? 'Erro' : 'Informação')}</p>
              <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                {toast.message}
              </p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="shrink-0 p-1 hover:bg-white/5 rounded-lg text-slate-600 hover:text-white transition-all"
            >
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
