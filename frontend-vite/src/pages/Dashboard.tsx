import { useDashboard } from '../context/DashboardContext';

export default function Dashboard() {
  const { user, signOut } = useDashboard();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-4">Dashboard (Nova Arquitetura)</h1>
      <p className="text-gray-400 mb-8">Bem-vindo, {user?.email}</p>
      
      <button 
        onClick={signOut}
        className="btn-primary"
      >
        Sair
      </button>
    </div>
  );
}
