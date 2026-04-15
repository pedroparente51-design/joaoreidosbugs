"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Info,
  ShoppingBag,
  LayoutDashboard,
  CalendarDays,
  Receipt,
  Crown,
  Gamepad2,
  ShieldCheck,
  Settings,
  Mail,
  X,
  ShieldAlert,
  TrendingDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useDashboard } from "../layout/DashboardContext";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const links = [
  { href: "/dashboard/links", label: "Links", icon: Info },
  { href: "/dashboard/loja", label: "Loja de Proxy", icon: ShoppingBag },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/daily-control", label: "Controle Diário", icon: CalendarDays },
  { href: "/dashboard/cpa-negativo", label: "CPA Negativo", icon: TrendingDown },
  { href: "/dashboard/expenses", label: "Despesas", icon: Receipt },
  { href: "/dashboard/goals", label: "Metas", icon: Crown },
  { href: "/dashboard/team", label: "Equipe", icon: ShieldCheck },
  { href: "/dashboard/admin", label: "Painel", icon: ShieldAlert },
  { href: "/dashboard/settings", label: "Ajustes", icon: Settings },
  { href: "https://wa.me/5512981502272", label: "Suporte", icon: Mail },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { userRole, userName, userImage } = useDashboard();

  const handleLinkClick = () => {
    if (window.innerWidth < 768 && onClose) {
      onClose();
    }
  };

  const filteredLinks = links.filter(link => {
    if (link.label === "Painel" && userRole !== "ADMIN") return false;
    return true;
  });

  return (
    <>
      <aside
        className={cn(
          "border-r border-white/5 flex flex-col h-full overflow-hidden shrink-0 transition-transform duration-300 z-50",
          "fixed md:relative inset-y-0 left-0 w-[280px] md:w-[260px] backdrop-blur-xl",
          "bg-gradient-to-b from-[#0f0b00]/95 via-[#0f0b00]/80 to-[#020004]/95",
          // Mobile translation logic
          !isOpen ? "-translate-x-full md:translate-x-0" : "translate-x-0"
        )}
      >
        {/* Mobile Close Button */}
        <div className="flex md:hidden items-center justify-between p-6 border-b border-white/5">
          <span className="text-white font-bold tracking-tighter">Menu</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/5 rounded-lg text-slate-400"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-8 px-4 space-y-1.5 custom-scrollbar">
          {filteredLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all group",
                  isActive
                    ? "bg-primary/10 text-white border border-primary/20 shadow-[0_0_15px_rgba(251,191,36,0.1)]"
                    : "text-gray-500 hover:text-gray-200 hover:bg-white/5"
                )}
              >
                <div className={cn(
                  "p-2 rounded-lg transition-colors flex items-center justify-center shrink-0",
                  isActive
                    ? "bg-primary text-white"
                    : "bg-white/5 text-gray-500 group-hover:text-white"
                )}>
                  <Icon size={16} />
                </div>
                <span className={cn(
                  "text-[13px] font-semibold transition-colors",
                  isActive ? "font-bold text-white text-glow shadow-primary" : "text-gray-400 group-hover:text-gray-200"
                )}>
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-white/5 bg-black/20">
          <div className="flex items-center gap-3 p-2">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-black text-xs">
              {userImage ? (
                <img src={userImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                userName?.[0]?.toUpperCase() || "U"
              )}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] font-black text-white uppercase truncate">{userName}</span>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{userRole}</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
