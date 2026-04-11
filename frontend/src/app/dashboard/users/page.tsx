"use client";

import { useState } from "react";
import { Search, Plus, MoreVertical, Edit2, Trash2 } from "lucide-react";

const mockUsers = [
  { id: 1, name: "João Bugs", email: "admin@reidosbugs.com", role: "Admin", status: "Ativo", joinDate: "10 Jan 2026" },
  { id: 2, name: "Maria Silva", email: "maria@empresa.com", role: "Usuário", status: "Ativo", joinDate: "12 Fev 2026" },
  { id: 3, name: "Carlos Andrade", email: "carlos@agencia.com", role: "Usuário", status: "Inativo", joinDate: "05 Mar 2026" },
  { id: 4, name: "Ana Souza", email: "ana@startup.io", role: "Admin", status: "Ativo", joinDate: "20 Mar 2026" },
];

export default function UsersManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Gerenciamento de Usuários</h1>
          <p className="text-gray-400 text-sm">Visualize, adicione e edite os membros da plataforma.</p>
        </div>
        
        <button className="gateway-btn-primary flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white shadow-lg shadow-primary/20">
          <Plus className="w-4 h-4 mr-2" />
          Novo Usuário
        </button>
      </div>

      <div className="gateway-card rounded-2xl overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-[#ffffff0a] flex justify-between items-center bg-[#00000020]">
          <div className="relative w-full max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-500" />
            </div>
            <input
              type="text"
              className="gateway-input block w-full pl-10 pr-3 py-2 border-transparent rounded-lg text-sm"
              placeholder="Buscar usuários..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#ffffff05] text-gray-400">
              <tr>
                <th className="px-6 py-4 font-medium tracking-wider">Usuário</th>
                <th className="px-6 py-4 font-medium tracking-wider">Permissão</th>
                <th className="px-6 py-4 font-medium tracking-wider">Status</th>
                <th className="px-6 py-4 font-medium tracking-wider">Adicionado em</th>
                <th className="px-6 py-4 text-right font-medium tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ffffff0a]">
              {mockUsers.map((user) => (
                <tr key={user.id} className="hover:bg-[#ffffff03] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primary to-accent-cyan p-[2px] flex-shrink-0">
                        <div className="h-full w-full bg-surface rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold">{user.name.charAt(0)}</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-white">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium border ${user.role === 'Admin' ? 'bg-primary/10 text-primary-glow border-primary/20' : 'bg-gray-800 text-gray-400 border-gray-700'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className={`h-2.5 w-2.5 rounded-full mr-2 ${user.status === 'Ativo' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <span className="text-gray-300">{user.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-400">
                    {user.joinDate}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
