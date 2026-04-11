"use client";

import { Camera, Play, ShoppingBag, MessageCircle, ExternalLink } from "lucide-react";

const platformLinks = [
  {
    name: "Instagram",
    description: "@joaoreidosbugs1",
    icon: Camera,
    href: "https://www.instagram.com/joaoreidosbugs1?igsh=Mmo5dmNvN2RjenNq",
  },
  {
    name: "YouTube",
    description: "Canal / Aulas",
    icon: Play,
    href: "https://youtube.com/@jottexoficial",
  },
  {
    name: "Loja / Proxy",
    description: "Loja principal",
    icon: ShoppingBag,
    href: "#",
  },
  {
    name: "Grupo WhatsApp",
    description: "Suporte / Comunidade",
    icon: MessageCircle,
    href: "https://chat.whatsapp.com/your-group",
  },
];

export default function LinksPage() {
  return (
    <div className="max-w-5xl mx-auto animate-fade-in">
      {/* Title Section */}
      <div className="mb-8">
        <h1 className="text-white text-3xl font-black tracking-tight">Links</h1>
        <p className="text-slate-500 text-sm mt-1 font-medium">Atalhos rápidos (não mexe em login nem dados).</p>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {platformLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-left bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-2xl p-6 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-white group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors">
                  <Icon size={24} />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{link.name}</div>
                  <div className="text-slate-500 text-sm font-medium">{link.description}</div>
                </div>
              </div>
              <div className="text-slate-500 group-hover:text-white transition-colors">
                <ExternalLink size={20} />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
