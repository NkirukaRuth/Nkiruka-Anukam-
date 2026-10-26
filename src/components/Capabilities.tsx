import React from 'react';
import { ShoppingCart, Server, BarChart3, MessageSquareText, Check, ArrowUpRight } from 'lucide-react';

interface CapabilitiesProps {
  onSelectCategory: (category: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectCategory }) => {
  const pillars = [
    {
      number: '01',
      title: 'Shopify Store Management & Liquid Customization',
      icon: ShoppingCart,
      categoryKey: 'Shopify & E-Commerce',
      summary: 'End-to-end Shopify store ownership from theme Liquid customization to catalog architecture, pricing optimization, and mobile conversion tuning.',
      skills: [
        'Shopify OS 2.0 Theme Editor & Custom Liquid coding',
        'Catalog structuring (SKU taxonomy, vendor tagging, collection indexing)',
        'SEO-driven product descriptions with benefit-first copy',
        'Theme banners, urgency countdown timers & promotional widgets',
        'Shopify Analytics tracking ($8.4k+ revenue, channel attribution)'
      ],
      deliverable: 'A high-converting, lightning-fast Shopify store with zero catalog errors and automated stock flags.'
    },
    {
      number: '02',
      title: 'CRM, Logistics & Corporate Invoicing',
      icon: Server,
      categoryKey: 'Operations & CRM',
      summary: 'Multi-platform operational support spanning Zoho Desk, Zoho Books, and HubSpot CRM to manage client pipelines, freight logistics, and quotes.',
      skills: [
        'Zoho Desk queue ownership (Owner: Ruth Nkiruka, SLA adherence)',
        'Zoho Books quotation & invoice generation (QT-000001, billing validation)',
        'HubSpot CRM shipment milestones & international bill of lading tracking',
        'B2B inquiry logs with deal stage progression (Quote to Closed Won)',
        'Automated ticket macros, time tracking & cross-channel routing'
      ],
      deliverable: 'Pristine operational audit trails, zero lost inquiries, and expedited quotation-to-cash cycles.'
    },
    {
      number: '03',
      title: 'Inventory & BI Spreadsheet Modeling',
      icon: BarChart3,
      categoryKey: 'Spreadsheets & Data',
      summary: 'Advanced spreadsheet engineering in Excel and Google Sheets to model inventory turnover, advertising ROAS curves, and normalize datasets.',
      skills: [
        '50-product dynamic inventory trackers with reorder formulas',
        'Ad spend vs revenue modeling (scaling ROAS from 7.6x to 9.2x)',
        'Unit economic calculations (selling price, COGS, gross margins in NGN & USD)',
        'Large-scale dataset cleaning (200+ property records normalized)',
        'Conditional formatting, VLOOKUP/XLOOKUP, and pivot data models'
      ],
      deliverable: 'Real-time visibility into stock health, margin buffers, and capital efficiency across all active SKUs.'
    },
    {
      number: '04',
      title: 'Customer Experience & Omnichannel Support',
      icon: MessageSquareText,
      categoryKey: 'Customer Support',
      summary: 'High-touch customer support across email, ticketing, and messaging with an empathetic tone that protects brand equity and prevents chargebacks.',
      skills: [
        'Rapid first-contact resolution (< 15 min response time)',
        'Compassionate return & refund de-escalation protocols',
        'Post-purchase order confirmation & fulfillment transparency',
        'Courier delay mitigation and carrier tracking investigation',
        'Brand voice preservation & 98%+ customer satisfaction rating'
      ],
      deliverable: 'Delighted repeat customers, minimized return friction, and proactive communication that builds brand loyalty.'
    }
  ];

  return (
    <section id="capabilities" className="py-20 md:py-28 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
            <span>Core Competencies</span>
            <span aria-hidden="true">·</span>
            <span>Strategic Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 [text-wrap:balance]">
            Operational infrastructure designed to free founders and scale revenue.
          </h2>
          <p className="mt-4 text-base text-zinc-600 leading-relaxed">
            I don’t just handle tasks; I take complete ownership of your back-office systems, customer relationships, and e-commerce workflows. Here is how I drive immediate measurable value:
          </p>
        </div>

        {/* 4 Editorial Service Columns / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div 
                key={pillar.number}
                className="relative p-7 sm:p-8 rounded-2xl bg-zinc-50/60 border border-zinc-200/90 hover:border-zinc-300 hover:bg-zinc-50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-sm font-semibold text-zinc-400">
                      {pillar.number}.
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200/90 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors shadow-2xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 tracking-tight group-hover:text-zinc-950 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                    {pillar.summary}
                  </p>

                  <div className="mt-6 pt-5 border-t border-zinc-200/80 space-y-2.5">
                    {pillar.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700">
                        <Check className="w-3.5 h-3.5 text-zinc-900 shrink-0 mt-0.5" />
                        <span className="leading-snug">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-zinc-200/80 flex items-center justify-between">
                  <div className="text-xs text-zinc-500">
                    <span className="font-semibold text-zinc-700">Output: </span>
                    <span>{pillar.deliverable}</span>
                  </div>
                  <button
                    onClick={() => onSelectCategory(pillar.categoryKey)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-900 hover:text-zinc-700 transition-colors shrink-0 cursor-pointer group-hover:translate-x-0.5"
                  >
                    <span>View Proof</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
