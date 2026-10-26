import React, { useState, useEffect, useRef } from 'react';
import { Mail, MessageSquare, Linkedin, Sparkles, MapPin, ArrowDown } from 'lucide-react';

interface CondensedHeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const CondensedHero: React.FC<CondensedHeroProps> = ({ onExploreClick }) => {
  const [activeMetric, setActiveMetric] = useState<number | null>(null);

  // Statistics cards visibility & fast number counter state
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [cardValues, setCardValues] = useState<string[]>(['0+', '0+', '0%', '0.00x']);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (media.matches) {
        setPrefersReducedMotion(true);
        setHasAnimated(true);
        setCardValues(['5+', '640+', '98%', '9.20x']);
        return;
      }
      const listener = (e: MediaQueryListEvent) => {
        if (e.matches) {
          setPrefersReducedMotion(true);
          setHasAnimated(true);
          setCardValues(['5+', '640+', '98%', '9.20x']);
        }
      };
      media.addEventListener?.('change', listener);
      return () => media.removeEventListener?.('change', listener);
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const el = statsSectionRef.current;
    if (!el) return;

    const startAnimation = () => {
      setHasAnimated(true);

      const targets = [
        { target: 5, decimals: 0, suffix: '+' },
        { target: 640, decimals: 0, suffix: '+' },
        { target: 98, decimals: 0, suffix: '%' },
        { target: 9.20, decimals: 2, suffix: 'x' },
      ];

      const duration = 1000; // fast 1.0s counter duration
      const startTime = performance.now();
      let frameId: number;

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        let isComplete = true;

        const nextValues = targets.map((t, idx) => {
          const delay = idx * 120; // Staggered count start matching card slide-in
          if (elapsed < delay) {
            isComplete = false;
            return t.decimals > 0 ? (0).toFixed(t.decimals) + t.suffix : `0${t.suffix}`;
          }

          const cardElapsed = elapsed - delay;
          const progress = Math.min(1, cardElapsed / duration);
          if (progress < 1) {
            isComplete = false;
          }

          // Smooth cubic ease-out for fast, crisp number progression
          const ease = 1 - Math.pow(1 - progress, 3);
          const currentVal = ease * t.target;

          if (progress >= 1) {
            return t.decimals > 0 ? t.target.toFixed(t.decimals) + t.suffix : `${t.target}${t.suffix}`;
          }

          return t.decimals > 0
            ? currentVal.toFixed(t.decimals) + t.suffix
            : `${Math.round(currentVal)}${t.suffix}`;
        });

        setCardValues(nextValues);

        if (!isComplete) {
          frameId = requestAnimationFrame(step);
        } else {
          // Guarantee accurate final values
          setCardValues(['5+', '640+', '98%', '9.20x']);
        }
      };

      frameId = requestAnimationFrame(step);
    };

    if (!('IntersectionObserver' in window)) {
      startAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          observer.disconnect(); // Avoid repeated restarting on scroll
          startAnimation();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  // Hidden numbers/URLs: icons carry direct action links
  const whatsappUrl = "https://wa.me/2348066225117?text=Hi%20Ruth%2C%20I%20found%20your%20portfolio%20and%20would%20love%20to%20discuss%20working%20together";
  const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=anukamnkirukaruth@gmail.com&su=" + encodeURIComponent("Project Inquiry - E-Commerce & Executive Support") + "&body=" + encodeURIComponent("Hi Ruth,\n\nI would like to discuss an opportunity with you.\n\nCompany / Project:\nScope of Work:\nTimeline:\n\nBest regards,");
  const linkedinUrl = "https://www.linkedin.com/in/nkiruka-anukam-99157a168";

  const metrics = [
    {
      label: 'Experience',
      value: '5+',
      unit: 'Years',
      detail: 'Executive VA & store management',
      subtext: 'Proven operational support for founders'
    },
    {
      label: 'Orders & Inquiries',
      value: '640+',
      unit: 'Handled',
      detail: 'Zero catalog or pricing errors',
      subtext: 'High-volume ticket & stock reliability'
    },
    {
      label: 'SLA Response Speed',
      value: '98%',
      unit: 'On-Time',
      detail: '< 15m first resolution time',
      subtext: 'Fast-turnaround executive inbox triage'
    },
    {
      label: 'Campaign Performance',
      value: '9.20x',
      unit: 'ROAS',
      detail: 'Modeled from ₦2,784 CPA efficiency',
      subtext: 'Ad spend tracking & revenue modeling'
    }
  ];

  return (
    <section id="about" className="relative pt-10 pb-16 sm:pt-16 sm:pb-22 border-b border-stone-200/80 bg-[#FAF6F0]">
      {/* Subtle warm ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Moving DP (Floating Animation) & Icon Quick Links */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <div className="relative group">
              {/* Animated pulsating halo behind DP */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-400/30 via-amber-200/20 to-transparent blur-md animate-pulse-ring" />

              {/* Floating DP Container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-amber-500/20 shadow-xl bg-stone-100 animate-float-dp transition-all hover:scale-105 duration-300">
                <img
                  src="/assets/ruth_headshot.png"
                  alt="Anukam Ruth Nkiruka"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Status pill badge on photo */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full border border-stone-200 shadow-md flex items-center gap-2 whitespace-nowrap z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[11px] font-bold text-stone-800">Open to Work</span>
                <span className="text-stone-300">·</span>
                <span className="text-[11px] font-medium text-stone-500">Remote</span>
              </div>
            </div>

            {/* Location & Icon-Only Access (No numbers or raw URLs shown) */}
            <div className="mt-7 flex flex-col items-center lg:items-start gap-2.5 text-xs text-stone-600">
              <div className="flex items-center gap-1.5 font-medium text-stone-600">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>Lagos, Nigeria · UTC+1 · Remote Worldwide</span>
              </div>

              {/* Clean Icon Action Bar: Email, WhatsApp, LinkedIn */}
              <div className="flex items-center gap-2 pt-1">
                {/* Email Icon - Opens Gmail directly */}
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open Gmail to write to Ruth"
                  className="p-2.5 rounded-xl bg-white border border-stone-200 text-stone-700 hover:text-amber-700 hover:border-amber-400 hover:shadow-sm active:scale-95 transition-all"
                  aria-label="Open Gmail to write to Ruth"
                >
                  <Mail className="w-4 h-4" />
                </a>

                {/* WhatsApp Icon - Opens chat link directly without exposing number */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Chat on WhatsApp"
                  className="p-2.5 rounded-xl bg-white border border-stone-200 text-[#25D366] hover:border-emerald-400 hover:shadow-sm active:scale-95 transition-all"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                </a>

                {/* LinkedIn Icon - Opens LinkedIn without exposing URL */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Connect on LinkedIn"
                  className="p-2.5 rounded-xl bg-white border border-stone-200 text-[#0077B5] hover:border-sky-400 hover:shadow-sm active:scale-95 transition-all"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="w-4 h-4 fill-current" />
                </a>

                {/* Direct Action Badge */}
                <span className="text-[11px] text-stone-600 font-medium ml-1">
                  Click icon to connect directly
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Co-Founder Assistance & Delivering Vibe */}
          <div className="lg:col-span-8 space-y-5">
            {/* Top Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-100/70 border border-amber-300/80 text-xs font-semibold text-amber-900 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>E-commerce Operations Support, Executive Virtual Assistant</span>
            </div>

            {/* Name Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.08]">
              Anukam
              <br />
              <span className="text-amber-700 italic">Ruth Nkiruka</span>
            </h1>

            {/* Co-founder partnership promise */}
            <div className="border-l-3 border-amber-500 pl-4 sm:pl-5 py-1 bg-amber-50/40 rounded-r-xl">
              <p className="font-display italic text-base sm:text-lg text-stone-800 leading-snug">
                "Behind every visionary founder or CEO is someone who turns strategy into flawless daily execution, and that is the mission I own."
              </p>
            </div>

            {/* Value proposition tailored to assisting co-founders & delivering results */}
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-2xl">
              I act as a trusted operational right hand for co-founders and scaling brands, taking administrative friction completely off your plate so you can focus on vision and revenue. From executing day-to-day executive coordination, e-commerce storefront management, and workflow automation to high-converting Canva creatives, Printful mockups, and customer retention, I deliver consistent results with zero hand-holding.
            </p>

            {/* Skill / Capability Chips */}
            <div className="pt-1 flex flex-wrap gap-2">
              {[
                'Co-Founder Executive Support',
                'E-commerce Operations',
                'Workflow Automation',
                'Shopify Store Management',
                'Canva Brand Creatives',
                'ClickUp Sprint Tracking',
                'Customer Care SLA'
              ].map((chip, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-white border border-stone-200 text-xs font-medium text-stone-700 shadow-2xs hover:border-amber-400 transition-colors"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Clean minimal Explore trigger */}
            <div className="pt-2">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-stone-900 bg-amber-400 hover:bg-amber-500 active:scale-95 transition-all rounded-xl shadow-xs cursor-pointer"
              >
                <span>Explore Work Samples</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Interactive Metric Cards (Mobile Touch-Friendly, Staggered Slide-In & Animated Counter) */}
        <div ref={statsSectionRef} className="mt-12 pt-8 border-t border-stone-200/90 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 p-0.5">
            {metrics.map((m, index) => {
              const isSelected = activeMetric === index;
              const displayVal = cardValues[index] ?? m.value;
              return (
                <div
                  key={index}
                  style={{
                    transitionProperty: 'opacity, transform',
                    transitionDuration: prefersReducedMotion ? '0ms' : '650ms',
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: prefersReducedMotion ? '0ms' : `${index * 120}ms`,
                    opacity: hasAnimated ? 1 : 0,
                    transform: hasAnimated ? 'translateX(0)' : 'translateX(-28px)',
                  }}
                  className="h-full"
                >
                  <div
                    onClick={() => setActiveMetric(isSelected ? null : index)}
                    className={`h-full p-4 rounded-xl border transition-all cursor-pointer select-none active:scale-95 ${
                      isSelected
                        ? 'bg-amber-100/80 border-amber-400 shadow-md ring-2 ring-amber-400/40'
                        : 'bg-white/80 hover:bg-white border-stone-200 hover:border-amber-400 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-medium text-stone-500 mb-1">
                      <span>{m.label}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-60"></span>
                    </div>
                    
                    <div className="text-2xl sm:text-3xl font-bold font-display text-stone-900 mt-0.5 tabular-nums">
                      {displayVal}{' '}
                      <span className="text-amber-700 text-base font-sans font-semibold">{m.unit}</span>
                    </div>

                    <div className="text-[11px] text-stone-700 font-medium mt-1 leading-snug">
                      {m.detail}
                    </div>

                    <div className="text-[10px] text-stone-500 mt-1 pt-1.5 border-t border-stone-100">
                      {m.subtext}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
