import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useDashboard } from '../../context/DashboardContext';

export function AuthGuard() {
  const { user, loading } = useDashboard();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-primary font-mono text-xl tracking-widest animate-pulse">
          INICIANDO SISTEMA...
        </div>
      </div>
    );
  }

  if (!user) {
    // Redirect to login but save the attempted url
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export function AdminGuard() {
  const { user, loading } = useDashboard();

  if (loading) return null;

  if (!user || user.role !== 'ADMIN') {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
