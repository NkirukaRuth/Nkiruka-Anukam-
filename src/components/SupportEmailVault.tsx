import React, { useState } from 'react';
import { SUPPORT_EMAILS, SupportEmail, WorkSample, WORK_SAMPLES } from '../data/portfolioData';
import { Mail, Copy, Check, Clock, Star, ShieldAlert, Eye, MessageCircle } from 'lucide-react';

interface SupportEmailVaultProps {
  onSelectSample: (sample: WorkSample) => void;
}

export const SupportEmailVault: React.FC<SupportEmailVaultProps> = ({ onSelectSample }) => {
  const [activeEmail, setActiveEmail] = useState<SupportEmail>(SUPPORT_EMAILS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeEmail.body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const zohoWorkSample = WORK_SAMPLES.find(s => s.id === 'zoho-desk-sla') || WORK_SAMPLES[9];

  return (
    <section id="email-vault" className="py-20 md:py-28 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
              <span>Customer Experience & Helpdesk Architecture</span>
              <span aria-hidden="true">·</span>
              <span>Real Correspondence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 [text-wrap:balance]">
              Empathetic communication that de-escalates and retains buyers.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-2xl">
              Inspect Ruth's verified email correspondence and ticketing workflows. Every response is structured to preserve brand trust, validate customer concerns, and resolve issues within tight SLAs.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectSample(zohoWorkSample)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>Inspect Zoho Desk SLA Proof</span>
            </button>
          </div>
        </div>

        {/* 2-Column Email Inbox & Viewer Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-2xl border border-zinc-300 bg-zinc-50/50 p-4 sm:p-6 shadow-xl">
          {/* Left Column: Email Thread Selector */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block px-1">
              Verified Case Inquiries
            </span>

            {SUPPORT_EMAILS.map((email) => {
              const isSelected = activeEmail.id === email.id;
              return (
                <div
                  key={email.id}
                  onClick={() => setActiveEmail(email)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-white border-zinc-900 shadow-sm ring-1 ring-zinc-900'
                      : 'bg-white/80 border-zinc-200 hover:border-zinc-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] text-zinc-500 mb-1">
                    <span className="font-semibold text-zinc-800">{email.scenario}</span>
                    <span className="font-mono">{email.slaResponseTime}</span>
                  </div>
                  <h4 className="font-bold text-xs text-zinc-950 truncate">
                    {email.subject}
                  </h4>
                  <p className="text-[11px] text-zinc-500 truncate mt-1">
                    To: {email.recipient}
                  </p>
                </div>
              );
            })}

            {/* Zoho Desk Live Queue Banner */}
            <div className="p-4 rounded-xl bg-zinc-900 text-white mt-6 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-emerald-400">Zoho Desk Certified</span>
                <span className="text-[10px] text-zinc-400 font-mono">Owner: Ruth Nkiruka</span>
              </div>
              <p className="text-xs text-zinc-300">
                Ticket #101 (Kunle Adeyemi) closed with full post-construction scope approval & zero SLA breaches.
              </p>
              <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>Avg SLA: &lt; 15m</span>
                <span>CSAT: 98.4%</span>
              </div>
            </div>
          </div>

          {/* Right Column: Full Email Reading Pane */}
          <div className="lg:col-span-8 bg-white rounded-xl border border-zinc-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
            <div>
              {/* Email Header */}
              <div className="border-b border-zinc-200 pb-5 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      Subject Line
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
                      {activeEmail.subject}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 hover:bg-zinc-50 text-xs font-medium text-zinc-700 transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy Text'}</span>
                    </button>

                    <a
                      href={activeEmail.imageProof}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium transition-colors cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Screenshot</span>
                    </a>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase font-mono">Recipient</span>
                    <span className="font-medium text-zinc-800">{activeEmail.recipient}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase font-mono">Response Speed</span>
                    <span className="font-mono text-emerald-700 font-semibold">{activeEmail.slaResponseTime}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[10px] uppercase font-mono">Resolution Strategy</span>
                    <span className="font-medium text-zinc-700 truncate block">{activeEmail.resolutionStrategy}</span>
                  </div>
                </div>
              </div>

              {/* Email Body */}
              <div className="font-sans text-xs sm:text-sm text-zinc-800 whitespace-pre-line leading-relaxed bg-zinc-50/40 p-5 rounded-xl border border-zinc-100">
                {activeEmail.body}
              </div>
            </div>

            {/* Tactical Breakdown Footer */}
            <div className="mt-8 pt-5 border-t border-zinc-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-zinc-600">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-900 block">SLA Commitment</strong>
                  <span>Inbound return & delay inquiries acknowledged in under 15 minutes.</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Star className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-900 block">Brand Advocacy</strong>
                  <span>Every email signed with personal ownership (Ruth, Support Specialist).</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
