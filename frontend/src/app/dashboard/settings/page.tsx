"use client";

import { useState, useEffect } from "react";
import { Settings, User, Bell, Lock, Palette, Database, Save, LogOut, Edit2, Trash2, AlertTriangle, UserMinus } from "lucide-react";
import { cn } from "@/lib/utils";
import Modal from "@/components/layout/Modal";

import { useDashboard } from "@/components/layout/DashboardContext";

export default function SettingsPage() {
  const { addToast, refreshUser, userImage, userName, userRole } = useDashboard();
  const [activeTab, setActiveTab] = useState("profile");
  const [userEmail, setUserEmail] = useState("");
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('user');
      if (stored) {
        try {
          const u = JSON.parse(stored);
          setUserEmail(u.email || "");
          setProfileForm(prev => ({ ...prev, name: u.name || prev.name, image: u.image || "" }));
        } catch {}
      }
    }
  }, []);
  const [profileForm, setProfileForm] = useState({
    name: "João Rei dos Bugs",
    image: "",
    bio: "Especialista em automação e growth hacking. Focado em escalar operações de alto nível."
  });



  const tabs = [
    { id: "profile", name: "Perfil", icon: User },
    { id: "security", name: "Segurança", icon: Lock },
    { id: "appearance", name: "Aparência", icon: Palette },
    { id: "notifications", name: "Notificações", icon: Bell },
    { id: "data", name: "Manutenção", icon: Database },
  ];

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const api = (await import("@/lib/api")).default;
      const { data } = await api.post("/api/user/profile", { name: profileForm.name, image: profileForm.image });
      
      // Update local storage
      const stored = localStorage.getItem('user');
      if (stored) {
        const u = JSON.parse(stored);
        localStorage.setItem('user', JSON.stringify({ ...u, name: data.name, image: data.image }));
      }
      
      refreshUser();
      addToast("Perfil atualizado com sucesso!", "success");
      setIsProfileModalOpen(false);
    } catch (e) {
      addToast("Erro ao atualizar perfil", "error");
    }
  };

  const handleUserReset = async () => {
    if (!confirm("⚠️ ATENÇÃO: Isso apagará TODOS os seus Livros Diários, Despesas, Metas e Estatísticas pessoais. Seus dados de equipe NÃO serão afetados. Deseja continuar?")) return;
    if (!confirm("CONFIRMAÇÃO FINAL: Tem certeza absoluta? Todos os seus registros pessoais serão perdidos para sempre.")) return;

    try {
      const api = (await import("@/lib/api")).default;
      await api.post("/api/user/reset-data");
      alert("Seus dados pessoais foram redefinidos com sucesso!");
      window.location.reload(); 
    } catch (e: any) {
      alert("Erro ao redefinir dados");
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-fade-in-up pb-20 px-4">
      <div className="flex items-center gap-4">
        <div className="p-4 bg-white/5 rounded-2xl text-slate-400 border border-white/5">
           <Settings size={28} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-black text-white tracking-tight uppercase">Ajustes</h1>
          <p className="text-slate-500 font-medium">Configure as preferências da sua conta e plataforma.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Navigation Tabs */}
        <div className="md:col-span-1 space-y-2">
           {tabs.map(tab => {
             const Icon = tab.icon;
             return (
               <button
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id)}
                 className={cn(
                   "w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold uppercase tracking-widest text-[11px]",
                   activeTab === tab.id ? "bg-primary text-white shadow-neon" : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                 )}
               >
                 <Icon size={18} />
                 {tab.name}
               </button>
             );
           })}
           <div className="pt-8">
              <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-primary font-bold uppercase tracking-widest text-[11px] hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20">
                <LogOut size={18} /> Sair do Sistema
              </button>
           </div>
        </div>

        {/* Settings Content */}
        <div className="md:col-span-3">
           <div className="glass-card p-8 md:p-10 space-y-10">
              
               {activeTab === 'profile' && (
                 <div className="space-y-10 animate-fade-in">
                   <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="flex flex-col gap-1">
                         <h2 className="text-xl font-black text-white uppercase tracking-tighter">Informações do Perfil</h2>
                         <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Gerencie seus dados públicos</p>
                      </div>
                      <button 
                        onClick={() => setIsProfileModalOpen(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-xl text-[10px] font-black text-primary uppercase tracking-widest transition-all"
                      >
                         <Edit2 size={14} /> Editar Perfil
                      </button>
                   </div>

                   <div className="flex flex-col gap-10">
                      <div className="flex flex-col sm:flex-row items-center gap-8 p-8 bg-white/5 rounded-3xl border border-white/5 border-dashed">
                         <div className="w-24 h-24 bg-primary/20 rounded-3xl flex items-center justify-center text-primary font-black text-3xl border border-primary/20 shadow-lg shadow-primary/20 overflow-hidden">
                            {userImage ? (
                               <img src={userImage} alt="Profile" className="w-full h-full object-cover" />
                             ) : (
                               userName?.[0]?.toUpperCase() || "U"
                             )}
                         </div>
                         <div className="flex flex-col gap-2 text-center sm:text-left">
                            <h3 className="text-2xl font-black text-white tracking-tight uppercase">{userName}</h3>
                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">{userRole}</span>
                            <div className="flex items-center gap-2 justify-center sm:justify-start pt-2">
                               <button onClick={() => setIsProfileModalOpen(true)} className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[9px] font-black text-white uppercase tracking-widest transition-all">Alterar Perfil</button>

                            </div>
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="space-y-2">
                            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Email Principal</span>
                            <div className="bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-4 text-slate-400 font-bold text-sm">
                               {userEmail}
                            </div>
                         </div>
                         <div className="space-y-2">
                            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Membro desde</span>
                            <div className="bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-4 text-slate-400 font-bold text-sm">
                               Abril de 2024
                            </div>
                         </div>
                      </div>

                      <div className="space-y-4">
                         <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Biografia</span>
                         <div className="bg-white/[0.02] border border-white/5 rounded-2xl px-8 py-6 text-slate-400 font-medium leading-relaxed">
                            {profileForm.bio || "Nenhuma biografia informada."}
                         </div>
                      </div>
                   </div>

                   <Modal
                     isOpen={isProfileModalOpen}
                     onClose={() => setIsProfileModalOpen(false)}
                     title="Editar Perfil"
                     icon={<User size={20} />}
                   >
                    <form onSubmit={handleProfileUpdate} className="space-y-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Nome de Exibição</label>
                           <input 
                              required
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-all font-bold"
                              value={profileForm.name}
                              onChange={e => setProfileForm({ ...profileForm, name: e.target.value })}
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Link da Foto (URL)</label>
                           <input 
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-all font-bold"
                              placeholder="https://exemplo.com/foto.jpg"
                              value={profileForm.image}
                              onChange={e => setProfileForm({ ...profileForm, image: e.target.value })}
                           />
                           <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest pl-1">Cole o link de uma imagem pública.</p>
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Biografia</label>
                           <textarea 
                              value={profileForm.bio}
                              onChange={e => setProfileForm({ ...profileForm, bio: e.target.value })}
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-all resize-none h-32 font-medium"
                              placeholder="Conte um pouco sobre você..."
                           />
                        </div>
                        <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] shadow-neon transition-all hover:scale-[1.02] active:scale-95">
                           SALVAR ALTERAÇÕES
                        </button>
                     </form>
                   </Modal>
                 </div>
               )}

               {activeTab === 'security' && (
                 <div className="space-y-8 animate-fade-in text-center py-10 opacity-40">
                    <Lock size={48} className="mx-auto text-slate-500 mb-4" />
                    <h2 className="text-xl font-black text-white uppercase tracking-widest">Segurança Avançada</h2>
                    <p className="text-slate-500 text-sm max-w-sm mx-auto">Configurações de 2FA e troca de senha estarão disponíveis em breve.</p>
                 </div>
               )}

               {activeTab === 'notifications' && (
                 <div className="space-y-10 animate-fade-in">
                    <div className="flex flex-col gap-1">
                       <h2 className="text-xl font-black text-white uppercase tracking-tighter">Notificações</h2>
                       <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Gerencie como você recebe alertas</p>
                    </div>

                    <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-8">
                       <div className="flex items-center justify-between">
                          <div className="space-y-1">
                             <h4 className="text-sm font-black text-white uppercase tracking-widest">Notificações no Navegador</h4>
                             <p className="text-[10px] text-slate-500 font-medium">Receba alertas de remessas e metas finalizadas</p>
                          </div>
                          <button 
                            onClick={() => {
                              if (!("Notification" in window)) {
                                addToast("Seu navegador não suporta notificações.", "error");
                                return;
                              }
                              Notification.requestPermission().then(permission => {
                                if (permission === 'granted') {
                                  addToast("Notificações ativadas com sucesso!", "success");
                                  new Notification("Sucesso!", { body: "Notificações ativadas com sucesso." });
                                }
                              });
                            }}
                            className="px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-xl text-[10px] font-black text-primary uppercase tracking-widest transition-all"
                          >
                             Ativar Agora
                          </button>
                       </div>
                       
                       <div className="flex items-center justify-between opacity-40 grayscale">
                          <div className="space-y-1">
                             <h4 className="text-sm font-black text-white uppercase tracking-widest">Alertas via WhatsApp</h4>
                             <p className="text-[10px] text-slate-500 font-medium font-bold text-emerald-500">EXCLUSIVO VIP</p>
                          </div>
                          <div className="w-12 h-6 bg-white/10 rounded-full relative">
                             <div className="absolute left-1 top-1 w-4 h-4 bg-slate-500 rounded-full" />
                          </div>
                       </div>
                    </div>
                 </div>
               )}

              {activeTab === 'appearance' && (
                <div className="space-y-8 animate-fade-in">
                   <h2 className="text-xl font-black text-white uppercase tracking-tighter">Personalização</h2>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-white/5 border border-primary/40 rounded-2xl p-4 flex flex-col gap-4 cursor-pointer ring-2 ring-primary">
                         <div className="h-20 bg-slate-950 rounded-lg border border-white/5" />
                         <span className="text-[11px] font-black text-white uppercase tracking-widest text-center">Dark Modern (Padrão)</span>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-4 cursor-pointer hover:bg-white/10 transition-all opacity-40 grayscale">
                         <div className="h-20 bg-white rounded-lg border border-white/5 shadow-lg" />
                         <span className="text-[11px] font-black text-white uppercase tracking-widest text-center">Light Vision</span>
                      </div>
                   </div>
                </div>
              )}

              {activeTab === 'data' && (
                 <div className="space-y-10 animate-fade-in">
                    <div className="flex flex-col gap-1">
                       <h2 className="text-xl font-black text-white uppercase tracking-tighter text-primary">Gerenciamento de Dados</h2>
                       <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Ações críticas e irreversíveis</p>
                    </div>

                    <div className="p-8 bg-primary/5 border border-primary/20 rounded-3xl space-y-6">
                       <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                             <AlertTriangle size={24} />
                          </div>
                          <div className="space-y-2">
                             <h4 className="text-sm font-black text-white uppercase tracking-widest">Zerar todos os meus registros</h4>
                             <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-lg">
                                Esta ação irá remover permanentemente todos os seus registros de Controle Diário, Planilhas, Despesas e Metas pessoais.
                                <strong className="text-primary block mt-2">Observação: Sua participação em equipes e os dados da equipe permanecem intactos.</strong>
                             </p>
                          </div>
                       </div>
                       
                       <div className="pt-4">
                          <button 
                            onClick={handleUserReset}
                            className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:scale-105 active:scale-95 shadow-neon transition-all"
                          >
                             <Trash2 size={16} /> REDEFINIR MEUS DADOS AGORA
                          </button>
                       </div>
                    </div>

                    <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-3xl space-y-6">
                       <div className="flex items-start gap-4">
                          <div className="p-3 bg-red-500/10 rounded-2xl text-red-500">
                             <UserMinus size={24} />
                          </div>
                          <div className="space-y-2">
                             <h4 className="text-sm font-black text-white uppercase tracking-widest">Sair da Equipe</h4>
                             <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-lg">
                                Remove você da equipe em que está participando. Seus dados pessoais serão mantidos, mas você perderá acesso às estatísticas e dados compartilhados da equipe.
                                <strong className="text-red-400 block mt-2">Atenção: Você precisará de um novo convite para entrar novamente.</strong>
                             </p>
                          </div>
                       </div>
                       
                       <div className="pt-4">
                          <button 
                            onClick={async () => {
                              if (!confirm("⚠️ Tem certeza que deseja sair da equipe? Você perderá acesso aos dados compartilhados.")) return;
                              if (!confirm("CONFIRMAÇÃO FINAL: Após sair, você precisará de um novo convite para retornar.")) return;
                              try {
                                const api = (await import("@/lib/api")).default;
                                await api.post("/api/team/leave");
                                alert("Você saiu da equipe com sucesso.");
                                window.location.reload();
                              } catch (e: any) {
                                alert("Erro ao sair da equipe. Talvez você não esteja em nenhuma equipe.");
                              }
                            }}
                            className="flex items-center gap-3 px-8 py-4 bg-red-500/80 hover:bg-red-500 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all"
                          >
                             <UserMinus size={16} /> SAIR DA EQUIPE AGORA
                          </button>
                       </div>
                    </div>
                 </div>
               )}

              <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest italic">Personalize sua experiência no dashboard</span>
                <div className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                   <Database size={14} /> Sistema Online
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
