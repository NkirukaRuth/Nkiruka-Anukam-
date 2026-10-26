import React from 'react';
import { Mail, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-zinc-200/80 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-18">
        {/* Zone 1: Brand title, single line, no descriptor pill */}
        <a 
          href="#top" 
          className="text-lg font-bold tracking-tight text-zinc-900 hover:text-zinc-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-semibold text-sm">
            RA
          </span>
          <span>Ruth Nkiruka Anukam</span>
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600">
          <a href="#capabilities" className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0">
            Capabilities
          </a>
          <a href="#work-samples" className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0">
            Case Studies
          </a>
          <a href="#shopify-demo" className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0">
            Storefront Demo
          </a>
          <a href="#inventory-bi" className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0">
            Inventory & BI
          </a>
          <a href="#email-vault" className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0">
            Support Vault
          </a>
        </nav>

        {/* Zone 3: 1 primary action button (+ secondary quiet text trigger) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-700 hover:text-zinc-950 transition-colors rounded-lg hover:bg-zinc-100 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 active:scale-[0.98] transition-all rounded-lg whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </button>
        </div>
      </div>
    </header>
  );
};
