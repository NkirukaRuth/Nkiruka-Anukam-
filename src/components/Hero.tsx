import React from 'react';
import { ArrowRight, ShoppingBag, Database, Headphones, CheckCircle2, Eye } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onOpenContact: () => void;
  onOpenQuickDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenContact, onOpenQuickDemo }) => {
  return (
    <section id="top" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-zinc-200/70 bg-gradient-to-b from-[#FAFAFA] via-white to-[#F9F9FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-500 uppercase">
              <span>E-Commerce Operations</span>
              <span aria-hidden="true">·</span>
              <span>Shopify Store Management</span>
              <span aria-hidden="true">·</span>
              <span>CRM & Data Analysis</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.08] [text-wrap:balance]">
              Scaling Online Stores with Operational Precision & Data-Driven Rigor.
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
              I am <strong className="font-semibold text-zinc-900">Ruth Nkiruka Anukam</strong>. I help modern DTC brands, e-commerce founders, and global businesses streamline their Shopify stores, master product catalogs, automate inventory tracking, manage CRM pipelines (Zoho & HubSpot), and deliver 5-star customer resolution.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreWork}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-zinc-950 hover:bg-zinc-800 active:scale-[0.98] transition-all rounded-xl shadow-sm cursor-pointer"
              >
                <span>View Real Work Samples</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-zinc-800 hover:text-zinc-950 bg-white hover:bg-zinc-50 border border-zinc-300 rounded-xl transition-all shadow-xs cursor-pointer"
              >
                <span>Schedule a Briefing</span>
              </button>
            </div>

            {/* Clean unboxed proof markers */}
            <div className="pt-4 border-t border-zinc-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-500">
              <span className="flex items-center gap-1.5 font-medium text-zinc-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900" />
                Verified Shopify & Custom Liquid Code
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 font-medium text-zinc-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900" />
                Zoho One & HubSpot Certified
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 font-medium text-zinc-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900" />
                Advanced Spreadsheet Architect
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Container showcasing actual work */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border border-zinc-200/90 bg-white shadow-xl overflow-hidden group">
              {/* Browser mockup header */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-100 border-b border-zinc-200/80 text-xs text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
                </div>
                <span className="font-mono text-[11px] text-zinc-600 truncate max-w-[200px]">
                  admin.shopify.com/nuvora
                </span>
                <span className="text-[11px] font-medium text-zinc-600">Active Store</span>
              </div>

              {/* Real work screenshot preview */}
              <div className="relative aspect-[16/10] bg-zinc-100 overflow-hidden">
                <img
                  src="/assets/aistudio/Shopify_Homepage_957f18b3.png"
                  alt="Nuvora Shopify Storefront designed and managed by Ruth Nkiruka Anukam"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating overlay chip */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-zinc-950/90 backdrop-blur-md rounded-xl text-white text-xs flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">Nuvora Lifestyle Store</p>
                    <p className="text-zinc-300 text-[11px]">Theme custom Liquid & product architecture</p>
                  </div>
                  <button
                    onClick={onOpenQuickDemo}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-white text-zinc-950 rounded-lg font-medium text-[11px] hover:bg-zinc-100 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3 h-3" />
                    <span>Live Preview</span>
                  </button>
                </div>
              </div>

              {/* Quick stats mini-strip inside the card */}
              <div className="grid grid-cols-3 divide-x divide-zinc-200 text-center py-3 bg-zinc-50/70 border-t border-zinc-200/80">
                <div className="px-2">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Gross Sales</p>
                  <p className="text-sm font-bold text-zinc-900 tabular-nums">$8,420.50</p>
                </div>
                <div className="px-2">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Orders</p>
                  <p className="text-sm font-bold text-zinc-900 tabular-nums">143 (+20%)</p>
                </div>
                <div className="px-2">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Catalog</p>
                  <p className="text-sm font-bold text-zinc-900 tabular-nums">50 SKUs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column KPI / Proof Strip below the hero split */}
        <div className="mt-16 pt-10 border-t border-zinc-200/90">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="p-5 rounded-xl bg-white border border-zinc-200/70 shadow-2xs">
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium mb-1">
                <ShoppingBag className="w-4 h-4 text-zinc-700" />
                <span>Total Orders Processed</span>
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-zinc-950 tracking-tight tabular-nums">
                641+
              </p>
              <p className="text-xs text-zinc-500 mt-1">Across Shopify & multi-channel campaigns</p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-zinc-200/70 shadow-2xs">
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium mb-1">
                <Database className="w-4 h-4 text-zinc-700" />
                <span>Peak ROAS Achieved</span>
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-zinc-950 tracking-tight tabular-nums">
                9.20x
              </p>
              <p className="text-xs text-zinc-500 mt-1">Modeled from CPA efficiency</p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-zinc-200/70 shadow-2xs">
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium mb-1">
                <ShoppingBag className="w-4 h-4 text-zinc-700" />
                <span>Live SKUs Structured</span>
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-zinc-950 tracking-tight tabular-nums">
                50+
              </p>
              <p className="text-xs text-zinc-500 mt-1">$12,845 total inventory value cataloged</p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-zinc-200/70 shadow-2xs">
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium mb-1">
                <Headphones className="w-4 h-4 text-zinc-700" />
                <span>First-Response SLA</span>
              </div>
              <p className="text-3xl lg:text-4xl font-bold text-zinc-950 tracking-tight tabular-nums">
                &lt; 15 min
              </p>
              <p className="text-xs text-zinc-500 mt-1">Zoho Desk & email ticket resolution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
