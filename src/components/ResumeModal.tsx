import React from 'react';
import { X, Mail, Download, Printer, CheckCircle2, Briefcase, GraduationCap, Award, Globe } from 'lucide-react';
import { SKILLS_LIST } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-50 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-zinc-900">Curriculum Vitae</span>
            <span className="text-zinc-300">|</span>
            <span className="text-xs text-zinc-500">Ruth Nkiruka Anukam</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-100 text-xs font-medium text-zinc-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-zinc-950 rounded-lg hover:bg-zinc-200 transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-10 text-zinc-800 font-sans print:p-0">
          {/* Header Section */}
          <div className="border-b border-zinc-200 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
                Ruth Nkiruka Anukam
              </h2>
              <p className="text-sm font-semibold text-zinc-700 mt-1">
                E-Commerce Operations Specialist · Virtual Assistant · Data Analyst & Store Manager
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500 font-mono">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-zinc-700" />
                  anukamnkirukaruth@gmail.com
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-zinc-700" />
                  Worldwide Remote (Flexible Timezones)
                </span>
              </div>
            </div>

            <button
              onClick={() => { onClose(); onOpenContact(); }}
              className="px-5 py-2.5 bg-zinc-900 text-white rounded-xl text-xs font-semibold hover:bg-zinc-800 transition-colors cursor-pointer shrink-0 shadow-sm"
            >
              Hire Ruth
            </button>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-zinc-900" />
              Executive Profile
            </h3>
            <p className="text-sm text-zinc-700 leading-relaxed bg-zinc-50 p-4 rounded-xl border border-zinc-100">
              Results-driven E-commerce Operations Specialist and Virtual Assistant with a strong analytical foundation in economics and data modeling. Proven track record optimizing Shopify storefronts with custom Liquid sections, catalog architecture, and multi-channel inventory management. Expert in streamlining CRM helpdesk queues (Zoho Desk & HubSpot), authoring empathetic customer communications with &lt;15 min SLA turnaround, and modeling advertising performance (scaling ROAS to 9.20x).
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-zinc-900" />
              Professional Experience
            </h3>

            {/* Role 1 */}
            <div className="p-5 rounded-xl border border-zinc-200 bg-white space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <div>
                  <h4 className="text-base font-bold text-zinc-950">
                    E-Commerce Store Manager & Operations Specialist
                  </h4>
                  <p className="text-zinc-600 font-medium">Nuvora & DTC Retail Portfolio · Remote</p>
                </div>
                <span className="font-mono text-zinc-400 text-[11px] sm:text-right mt-1 sm:mt-0">
                  2024 – Present
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-xs text-zinc-700 list-disc list-inside">
                <li>Spearheaded complete Shopify OS 2.0 store operations, cataloging 50+ unique SKUs with $12,845 total inventory value and zero listing errors.</li>
                <li>Developed custom Liquid code sections for real-time promotional countdown banners, boosting flash-sale campaign conversions by +22%.</li>
                <li>Monitored Shopify Analytics, evaluating gross sales ($8,420.50), returning customer rates (28.4%), and 126 fulfilled orders.</li>
                <li>Authored compassionate, structured email customer support for order confirmations, return requests, and delivery delay mitigation.</li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="p-5 rounded-xl border border-zinc-200 bg-white space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <div>
                  <h4 className="text-base font-bold text-zinc-950">
                    CRM Administrator & Virtual Assistant
                  </h4>
                  <p className="text-zinc-600 font-medium">Commercial Services & Logistics Clients · Remote</p>
                </div>
                <span className="font-mono text-zinc-400 text-[11px] sm:text-right mt-1 sm:mt-0">
                  2023 – 2024
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-xs text-zinc-700 list-disc list-inside">
                <li>Administered Zoho Desk support queues as primary Ticket Owner (Ruth Nkiruka), maintaining a 99.4% SLA adherence and resolving corporate facility requests.</li>
                <li>Generated compliant corporate quotations and invoices in Zoho Books (#QT-000001) with 100% billing reference accuracy.</li>
                <li>Tracked active international shipments and container bills of lading in HubSpot CRM, documenting customs clearance and delivery milestones.</li>
                <li>Built B2B operational inquiry logs in Excel tracking $180,000+ pipeline deals across 4 acquisition sources.</li>
              </ul>
            </div>

            {/* Role 3 */}
            <div className="p-5 rounded-xl border border-zinc-200 bg-white space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <div>
                  <h4 className="text-base font-bold text-zinc-950">
                    Data Analyst & Spreadsheet Architect
                  </h4>
                  <p className="text-zinc-600 font-medium">Independent Business Intelligence Consulting</p>
                </div>
                <span className="font-mono text-zinc-400 text-[11px] sm:text-right mt-1 sm:mt-0">
                  2022 – Present
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-xs text-zinc-700 list-disc list-inside">
                <li>Engineered 50-Product dynamic inventory trackers in Google Sheets with automated reorder levels and safety stock alerts.</li>
                <li>Constructed monthly sales & advertising performance models, tracking 641 orders, 46,150 clicks, and scaling ROAS to 9.20x.</li>
                <li>Executed large-scale data cleansing and normalization across 200+ property records with geographic and pricing verification.</li>
              </ul>
            </div>
          </div>

          {/* Technical Toolkit & Core Skills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-zinc-900" />
              Technical & Operational Toolkit
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS_LIST.map((group, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <h4 className="text-xs font-bold text-zinc-900 mb-2">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item, itemIdx) => (
                      <span key={itemIdx} className="text-[11px] text-zinc-600 bg-white px-2 py-0.5 rounded border border-zinc-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Background */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-zinc-900" />
              Education & Academic Background
            </h3>
            <div className="p-4 rounded-xl border border-zinc-200 bg-white">
              <h4 className="text-sm font-bold text-zinc-950">
                Economics & Business Analytics Foundation
              </h4>
              <p className="text-xs text-zinc-600 mt-0.5">
                Focus on econometrics, quantitative analysis, market data modeling, and business communications.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Bottom Close */}
        <div className="px-6 py-4 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between text-xs shrink-0">
          <span className="text-zinc-500 font-mono text-[11px]">
            Verified Portfolio Profile · 2026
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg font-medium transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
