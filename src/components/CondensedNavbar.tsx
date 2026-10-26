import React, { useState } from 'react';
import { Menu, X, Send, Sparkles, User, Briefcase, GraduationCap, Wrench, MessageSquareText } from 'lucide-react';

interface CondensedNavbarProps {
  onContactClick: () => void;
}

export const CondensedNavbar: React.FC<CondensedNavbarProps> = ({ onContactClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Work Samples', href: '#work', icon: Briefcase },
    { name: 'Certifications', href: '#certifications', icon: GraduationCap },
    { name: 'Toolkit', href: '#tools', icon: Wrench },
    { name: 'Contact', href: '#contact', icon: MessageSquareText },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDirectBriefClick = () => {
    setIsMobileMenuOpen(false);
    onContactClick();
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF6F0]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
        {/* Brand Name */}
        <a 
          href="#top" 
          className="font-display text-xl sm:text-2xl font-bold tracking-tight text-stone-900 hover:text-stone-700 transition-colors"
        >
          Ruth<span className="text-amber-500">.</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-stone-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-stone-950 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop & Mobile Actions */}
        <div className="flex items-center gap-2">
          {/* Send Direct Brief Button */}
          <button
            onClick={handleDirectBriefClick}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2 text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-500 active:scale-95 transition-all rounded-xl cursor-pointer shadow-2xs touch-manipulation"
          >
            <Send className="w-3.5 h-3.5 text-stone-950" />
            <span>Send Direct Brief</span>
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-stone-700 hover:text-stone-950 hover:bg-stone-200/60 active:scale-95 transition-all cursor-pointer touch-manipulation"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Interactive Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200/90 bg-[#FAF6F0] px-4 pt-3 pb-5 shadow-lg animate-fade-in">
          <div className="text-[11px] font-mono uppercase tracking-wider text-amber-700 mb-2 px-2 font-semibold">
            Quick Navigation
          </div>
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-stone-800 hover:bg-stone-100 hover:text-stone-950 active:bg-amber-100/70 text-sm font-medium transition-colors text-left touch-manipulation"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-amber-600" />
                    <span>{link.name}</span>
                  </span>
                  <span className="text-xs text-stone-400">→</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Direct Brief Highlight in Menu */}
          <div className="mt-3 pt-3 border-t border-stone-200/80">
            <button
              onClick={handleDirectBriefClick}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold text-xs tracking-wide shadow-xs active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 touch-manipulation"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Open Direct Brief Form</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

