"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface DashboardContextType {
  isValuesVisible: boolean;
  toggleVisibility: () => void;
  userCount: number;
  formatValue: (value: string | number) => string;
  userRole: string;
  refreshUser: () => void;
  toasts: Toast[];
  addToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [isValuesVisible, setIsValuesVisible] = useState<boolean>(true);
  const [userRole, setUserRole] = useState<string>("USER");
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [userCount, setUserCount] = useState(11725);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
    
    // Auto remove after 5s
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const refreshUser = () => {
    if (typeof window !== 'undefined') {
      try {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        if (user.role) {
           setUserRole(user.role);
        } else {
           setUserRole("USER");
        }
      } catch (e) {
        setUserRole("USER");
      }
    }
  };

  useEffect(() => {
    // Global Debug Access
    if (typeof window !== 'undefined') {
      (window as any).DASHBOARD = { 
        toggle: () => setIsValuesVisible((v: boolean) => !v),
        refresh: refreshUser,
        addToast: (msg: string, type?: 'success' | 'error' | 'info') => addToast(msg, type)
      };
      
      refreshUser();
    }

    try {
      const saved = localStorage.getItem('dashboard_v_v');
      if (saved !== null) setIsValuesVisible(saved === 't');
    } catch (e) {}
  }, []);

  const toggleVisibility = () => {
    console.log("🔄 DashboardContext: toggleVisibility chamado!");
    setIsValuesVisible(prev => {
      const next = !prev;
      try {
        localStorage.setItem('dashboard_v_v', next ? 't' : 'f');
      } catch (e) {}
      return next;
    });
  };

  useEffect(() => {
    const runSimulation = () => {
      const delay = Math.floor(Math.random() * 10000) + 5000;
      timerRef.current = setTimeout(() => {
        setUserCount(prev => prev + 1);
        runSimulation();
      }, delay);
    };
    runSimulation();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  const formatValue = (value: string | number) => {
    if (isValuesVisible) return String(value);
    const str = String(value);
    if (str.includes('R$')) {
      const p = str.includes('+') ? '+R$ ' : (str.includes('-') ? '-R$ ' : 'R$ ');
      return p + '*****';
    }
    return str.includes('%') ? '***%' : '*****';
  };

  return (
    <DashboardContext.Provider value={{ 
      isValuesVisible, 
      toggleVisibility, 
      userCount, 
      formatValue, 
      userRole, 
      refreshUser,
      toasts,
      addToast,
      removeToast
    }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) throw new Error('useDashboard outside Provider');
  return context;
}
