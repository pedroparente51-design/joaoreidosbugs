"use client";

import { ReactNode, useState, useEffect } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { DashboardHeader } from "@/components/header/DashboardHeader";
import { AuthGuard } from "@/components/layout/AuthGuard";
import ToastContainer from "@/components/layout/ToastContainer";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <AuthGuard>
      <div className="flex flex-col w-full bg-transparent relative" style={{ height: '100dvh', maxHeight: '100dvh' }}>
        {/* Background Decor */}
        <div className="fixed top-0 left-0 w-full h-full grid-overlay pointer-events-none opacity-40 z-0 text-primary" />
        
        {/* 1. Global Header */}
        <DashboardHeader onMenuClick={toggleSidebar} />

        {/* 2. Layout Container */}
        <div className="flex flex-1 min-h-0 overflow-hidden relative">
          
          {/* 3. Sidebar (Responsive Drawer on Mobile, Rail on Desktop) */}
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

          {/* 4. Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0 min-h-0 relative z-0">
            <main className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar relative">
              <div className="max-w-[1600px] mx-auto p-4 md:p-8 pt-6 space-y-6 md:space-y-8">
                
                {/* Dynamic Page Content (Widgets) */}
                <div className="animate-fade-in-up">
                  {children}
                </div>
                
                <footer className="py-12 border-t border-white/5 text-center mt-20 opacity-30">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                    Plataforma Segura SSL 256-Bit — © 2026 João Rei dos Bugs
                  </p>
                </footer>
              </div>
            </main>
          </div>

          {/* 5. Mobile Overlay Backdrop */}
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] md:hidden animate-fade-in"
              onClick={closeSidebar}
            />
          )}
        </div>
      </div>
      <ToastContainer />
    </AuthGuard>
  );
}
