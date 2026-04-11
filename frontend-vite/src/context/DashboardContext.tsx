import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

interface User {
  id: string;
  email: string | undefined;
  role: string | null;
}

interface DashboardContextType {
  user: User | null;
  loading: boolean;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  refreshUser: () => Promise<void>;
  signOut: () => Promise<void>;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const fetchUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        // Obter perfil do usuário (incluindo role)
        const { data: profile } = await supabase
          .from("users")
          .select("role")
          .eq("id", session.user.id)
          .single();

        setUser({
          id: session.user.id,
          email: session.user.email,
          role: profile?.role || "USER",
        });
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      fetchUser();
    });

    return () => subscription.unsubscribe();
  }, []);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  
  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        loading,
        isSidebarOpen,
        toggleSidebar,
        refreshUser: fetchUser,
        signOut,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
