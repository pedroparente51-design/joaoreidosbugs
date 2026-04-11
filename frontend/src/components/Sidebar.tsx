"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  Activity, 
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  CreditCard
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/users", label: "Usuários", icon: Users },
  { href: "/dashboard/activities", label: "Atividades", icon: Activity },
  { href: "/dashboard/billing", label: "Faturamento", icon: CreditCard },
  { href: "/dashboard/settings", label: "Configurações", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "h-screen fixed left-0 top-0 z-40 flex flex-col transition-all duration-300 border-r border-white/5 bg-surface/80 backdrop-blur-2xl",
        collapsed ? "w-20" : "w-72"
      )}
    >
      {/* Logo Section */}
      <div className="h-20 flex items-center px-6 border-b border-white/5">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-neon-purple flex-shrink-0">
            <TrendingUp className="text-white h-6 w-6" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white leading-none">Rei do Bug</span>
              <span className="text-[10px] text-primary-glow font-bold uppercase tracking-widest mt-1">CPA PRO</span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto overflow-x-hidden">
        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 relative",
                isActive 
                  ? "bg-primary/10 text-primary-glow" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon className={cn("h-5 w-5", isActive ? "text-primary-glow" : "group-hover:text-white")} />
              {!collapsed && (
                <span className="font-medium text-[15px] whitespace-nowrap">{link.label}</span>
              )}
              {isActive && !collapsed && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-l-full shadow-neon-purple" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Footer / Collapse Button */}
      <div className="p-4 border-t border-white/5">
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center p-3 rounded-xl hover:bg-white/5 text-gray-400 transition-colors"
        >
          {collapsed ? <ChevronRight size={20} /> : <div className="flex items-center gap-2"><ChevronLeft size={20} /> <span className="text-sm font-medium font-mono">OCULTAR</span></div>}
        </button>
      </div>
    </aside>
  );
}
