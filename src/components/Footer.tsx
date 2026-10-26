import React from 'react';
import { ArrowUp, Mail, FileText } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-zinc-850">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-white text-zinc-950 flex items-center justify-center font-bold text-sm">
                RA
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                Ruth Nkiruka Anukam
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-2 max-w-md leading-relaxed">
              E-commerce Operations Specialist, Store Manager & Virtual Assistant. Dedicated to operational precision, inventory health, and five-star customer resolutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Ruth Nkiruka Anukam</span>
            <span aria-hidden="true">·</span>
            <span>All Work Artifacts Verified</span>
            <span aria-hidden="true">·</span>
            <a href="mailto:anukamnkirukaruth@gmail.com" className="text-zinc-300 hover:text-white underline">
              anukamnkirukaruth@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-6 text-zinc-400">
            <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#work-samples" className="hover:text-white transition-colors">Work Samples</a>
            <a href="#shopify-demo" className="hover:text-white transition-colors">Storefront Demo</a>
            <a href="#inventory-bi" className="hover:text-white transition-colors">Inventory & BI</a>
            <a href="#email-vault" className="hover:text-white transition-colors">Support Vault</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
