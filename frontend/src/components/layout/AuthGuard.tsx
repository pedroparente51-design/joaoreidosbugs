"use client";

import { useEffect, useState, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

interface AuthGuardProps {
  children: ReactNode;
  /** Routes that require ADMIN role — redirect to /dashboard if not admin */
  requireAdmin?: boolean;
}

/**
 * AuthGuard — wraps any protected layout/page.
 * • If no token → redirect to /login
 * • While checking (SSR hydration guard) → render nothing (no flash)
 */
export function AuthGuard({ children, requireAdmin = false }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      if (typeof window !== 'undefined') {
        const dash = (window as any).DASHBOARD;
        if (dash?.addToast) dash.addToast("Acesso negado. Por favor, faça login.", "info");
      }
      // Preserve intended destination so we can redirect back after login
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
      return;
    }

    if (requireAdmin) {
      try {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        if (user.role !== "ADMIN") {
          router.replace("/dashboard");
          return;
        }
      } catch {
        router.replace("/dashboard");
        return;
      }
    }

    setChecked(true);
  }, [pathname, requireAdmin, router]);

  // Prevent rendering protected content before check completes
  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4 opacity-40">
          <div className="w-8 h-8 border-2 border-primary/60 border-t-primary rounded-full animate-spin" />
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
            Verificando sessão...
          </span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
