import React, { useState } from 'react';
import { Mail, MessageSquare, Linkedin, Copy, Check, Send, Sparkles, ExternalLink, Loader2, AlertCircle } from 'lucide-react';
import { TECH_TOOLS } from '../data/condensedData';

export const CondensedContact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('E-commerce Operations & Store Management');
  const [timeline, setTimeline] = useState('Immediate / Next 2 Weeks');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [briefSummary, setBriefSummary] = useState('');

  // Target destinations & Formspree Endpoint
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvkkkvkl';
  const targetEmail = 'anukamnkirukaruth@gmail.com';
  const whatsappUrl = "https://wa.me/2348066225117?text=Hi%20Ruth%2C%20I%20reviewed%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project";
  const gmailQuick = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent('Project Inquiry - E-Commerce & Executive Support')}&body=${encodeURIComponent('Hi Ruth,\n\nI reviewed your portfolio and would like to discuss an opportunity with you.\n\nProject Scope:\nTimeline:\n\nBest regards,')}`;
  const linkedinUrl = "https://www.linkedin.com/in/nkiruka-anukam-99157a168";

  const generateMailto = () => {
    const subject = encodeURIComponent(`[Project Brief] ${service} - ${name || 'Inquiry'}`);
    const bodyText = `Hello Ruth,\n\nI reviewed your portfolio and would like to engage your services:\n\n• Client / Company: ${name || 'Prospective Client'}\n• Return Email: ${email || 'Not provided'}\n• Focus Area: ${service}\n• Desired Timeline: ${timeline}\n\nProject Requirements & Scope:\n${message || 'I would like to discuss ongoing executive and e-commerce support.'}\n\nSent via Portfolio Direct Brief`;
    return {
      mailtoUrl: `mailto:${targetEmail}?subject=${subject}&body=${encodeURIComponent(bodyText)}`,
      gmailUrl: `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${subject}&body=${encodeURIComponent(bodyText)}`,
      plainText: bodyText
    };
  };

  const handleSendBrief = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !email.trim()) return;

    setStatus('submitting');
    setErrorMessage('');

    const formattedSummary = `• Client / Company: ${name || 'Prospective Client'}\n• Return Email: ${email}\n• Focus Area: ${service}\n• Timeline: ${timeline}\n\nProject Requirements:\n${message}`;
    setBriefSummary(formattedSummary);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          service,
          timeline,
          message,
          _subject: `[Portfolio Direct Brief] ${service} - ${name || 'Client Inquiry'}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setErrorMessage('Unable to submit the brief right now. You can dispatch via Gmail or WhatsApp below.');
        }
        setStatus('error');
      }
    } catch {
      setErrorMessage('Network error while connecting to the form service. Please try again or reach out directly on WhatsApp.');
      setStatus('error');
    }
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(briefSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#FAF6F0] text-stone-900 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Core Toolkit Strip */}
        <div id="tools" className="p-6 rounded-2xl bg-white border border-stone-200 shadow-2xs">
          <span className="text-[11px] uppercase font-mono font-semibold tracking-wider text-amber-700 block text-center mb-4">
            Core Toolkit & Operating Systems
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {TECH_TOOLS.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-[#FAF6F0] border border-stone-200 text-xs font-mono text-stone-700 hover:text-stone-950 hover:border-amber-400 transition-colors shadow-2xs"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Direct Channels Quick Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-50 via-white to-emerald-50/50 border border-amber-300/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Fast-Track Direct Communication</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
              Ready to take operational friction off your plate?
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Connect directly via email, WhatsApp, or send a structured brief below. Available for full-time and fractional executive support.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            {/* Click to open Gmail directly */}
            <a
              href={gmailQuick}
              target="_blank"
              rel="noopener noreferrer"
              title="Open Gmail to write directly"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-bold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 hover:border-amber-400 rounded-xl shadow-xs active:scale-95 transition-all"
            >
              <Mail className="w-4 h-4 text-amber-600" />
              <span>Write via Gmail</span>
            </a>

            {/* Direct WhatsApp chat link without displaying the phone number digits */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Chat directly on WhatsApp"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-sm active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>

            {/* LinkedIn Icon */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Connect on LinkedIn"
              className="p-2.5 rounded-xl bg-white border border-stone-300 hover:border-sky-400 text-[#0077B5] hover:bg-sky-50 transition-all active:scale-95 shadow-xs"
            >
              <Linkedin className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>

        {/* Clean Centered Direct Brief Form (Deeply Mobile Interactive) */}
        <div 
          id="direct-brief-card" 
          className="max-w-2xl mx-auto bg-white p-5 sm:p-8 rounded-2xl border border-stone-200 shadow-sm transition-all duration-300"
        >
          <div className="text-center mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 block mb-1">
              Direct Project Brief
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Send a Direct Brief
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-stone-600">
              Provide your requirements below to dispatch directly to my inbox. I typically respond within 15 minutes during operating hours.
            </p>
          </div>

          {status === 'success' ? (
            <div className="space-y-4 py-4 animate-fade-in text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-stone-900">
                  Brief Sent Directly to Ruth's Inbox!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-stone-900">{name || 'there'}</span>! Your brief has been delivered directly to <span className="font-mono font-medium text-stone-800">{targetEmail}</span> via the form endpoint. Ruth typically responds within 15 minutes.
                </p>
              </div>

              {/* Direct Follow-up Actions */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <a
                  href={`https://wa.me/2348066225117?text=${encodeURIComponent(
                    `Hello Ruth, I just submitted a project brief on your portfolio:\n\n• Client: ${name || 'Prospective Client'}\n• Focus: ${service}\n• Timeline: ${timeline}\n• Email: ${email}\n\nLooking forward to your response!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-95 rounded-xl shadow-xs transition-all touch-manipulation"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Notify via WhatsApp</span>
                </a>

                <button
                  onClick={handleCopyBrief}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 active:scale-95 rounded-xl transition-all cursor-pointer touch-manipulation"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied Brief!' : 'Copy Sent Brief'}</span>
                </button>
              </div>

              <div className="mt-4 p-3 bg-[#FAF6F0] rounded-xl border border-stone-200 text-xs font-mono text-stone-700 whitespace-pre-wrap max-h-40 overflow-y-auto text-left">
                {briefSummary}
              </div>

              <button
                onClick={() => {
                  setStatus('idle');
                  setName('');
                  setEmail('');
                  setMessage('');
                }}
                className="text-xs text-amber-700 hover:underline pt-2 cursor-pointer font-medium touch-manipulation"
              >
                ← Send another brief or message
              </button>
            </div>
          ) : (
            <form action={FORMSPREE_ENDPOINT} method="POST" onSubmit={handleSendBrief} className="space-y-4">
              {/* Error Alert if Formspree or network fails */}
              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-900 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold">Submission Notice</p>
                    <p className="text-[11px] text-amber-800 mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    Your Name / Company
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={status === 'submitting'}
                    placeholder="e.g. Alex Rivera (Co-Founder)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:border-amber-500 text-sm sm:text-xs text-stone-900 transition-colors disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-800 mb-1">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={status === 'submitting'}
                    placeholder="alex@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:border-amber-500 text-sm sm:text-xs text-stone-900 transition-colors disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Primary Focus Area with Mobile Touch Pills */}
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1.5">
                  Primary Focus Area
                </label>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {[
                    { label: 'E-commerce Ops', full: 'E-commerce Operations & Store Management' },
                    { label: 'Executive VA', full: 'Executive Virtual Assistant (Co-Founder Support)' },
                    { label: 'Automation', full: 'Workflow Automation (n8n, Zapier, ClickUp)' },
                    { label: 'Canva / Socials', full: 'Canva Social Media & Brand Design' },
                    { label: 'CRM / Zoho', full: 'CRM Administration (Zoho Desk, Zoho Books, HubSpot)' },
                    { label: 'Spreadsheets', full: 'Inventory & Spreadsheets Modeling' }
                  ].map((item) => {
                    const isSelected = service === item.full;
                    return (
                      <button
                        type="button"
                        key={item.label}
                        disabled={status === 'submitting'}
                        onClick={() => setService(item.full)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all active:scale-95 touch-manipulation cursor-pointer ${
                          isSelected
                            ? 'bg-amber-400 text-stone-950 font-bold shadow-2xs ring-1 ring-amber-500'
                            : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
                <select
                  name="service"
                  value={service}
                  disabled={status === 'submitting'}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:border-amber-500 text-xs text-stone-900 transition-colors"
                >
                  <option>E-commerce Operations & Store Management</option>
                  <option>Executive Virtual Assistant (Co-Founder Support)</option>
                  <option>Workflow Automation (n8n, Zapier, ClickUp)</option>
                  <option>Canva Social Media & Brand Design</option>
                  <option>CRM Administration (Zoho Desk, Zoho Books, HubSpot)</option>
                  <option>Inventory & Spreadsheets Modeling</option>
                </select>
              </div>

              {/* Project Timeline with Mobile Touch Pills */}
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1.5">
                  Project Timeline
                </label>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {[
                    { label: 'Immediate (< 2 wks)', full: 'Immediate / Next 2 Weeks' },
                    { label: 'Within 30 Days', full: 'Within 30 Days' },
                    { label: 'Ongoing Retainer', full: 'Ongoing Fractional / Retainer' },
                    { label: 'Flexible', full: 'Flexible / Exploratory' }
                  ].map((item) => {
                    const isSelected = timeline === item.full;
                    return (
                      <button
                        type="button"
                        key={item.label}
                        disabled={status === 'submitting'}
                        onClick={() => setTimeline(item.full)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all active:scale-95 touch-manipulation cursor-pointer ${
                          isSelected
                            ? 'bg-amber-400 text-stone-950 font-bold shadow-2xs ring-1 ring-amber-500'
                            : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
                <select
                  name="timeline"
                  value={timeline}
                  disabled={status === 'submitting'}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:border-amber-500 text-xs text-stone-900 transition-colors"
                >
                  <option>Immediate / Next 2 Weeks</option>
                  <option>Within 30 Days</option>
                  <option>Ongoing Fractional / Retainer</option>
                  <option>Flexible / Exploratory</option>
                </select>
              </div>

              {/* Brief & Requirements with Mobile Quick Starter Chips */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-stone-800">
                    Brief & Requirements
                  </label>
                  <span className="text-[11px] text-stone-500">Tap below to auto-fill</span>
                </div>

                {/* Mobile Quick-Starter Scope Chips */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {[
                    '+ Shopify store & catalog management',
                    '+ Co-founder inbox & calendar triage',
                    '+ Automate ClickUp & order workflows',
                    '+ Canva brand graphics & mockups'
                  ].map((quickScope, idx) => (
                    <button
                      type="button"
                      key={idx}
                      disabled={status === 'submitting'}
                      onClick={() => {
                        const snippet = quickScope.replace(/^\+\s*/, '');
                        setMessage((prev) => prev ? `${prev}\n• ${snippet}` : `• ${snippet}`);
                      }}
                      className="px-2.5 py-1 rounded-md bg-stone-100 hover:bg-amber-100/70 border border-stone-200 text-[11px] font-medium text-stone-700 transition-all active:scale-95 touch-manipulation cursor-pointer disabled:opacity-60"
                    >
                      {quickScope}
                    </button>
                  ))}
                </div>

                <textarea
                  name="message"
                  rows={4}
                  required
                  disabled={status === 'submitting'}
                  placeholder="Describe your current bottleneck, store goals, or tasks you need Ruth to manage..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-[#FAF6F0] focus:bg-white focus:outline-none focus:border-amber-500 text-sm sm:text-xs text-stone-900 transition-colors resize-none disabled:opacity-60"
                />
              </div>

              {/* Direct Form Submit via Formspree Endpoint */}
              <div className="space-y-2 pt-1">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold text-xs tracking-wide shadow-xs active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 touch-manipulation disabled:opacity-75 disabled:cursor-wait"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-stone-950" />
                      <span>Sending Brief to Ruth's Inbox...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct Brief</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-3 text-xs text-stone-500 pt-1">
                  <span>Direct alternate channels:</span>
                  <a
                    href={`https://wa.me/2348066225117?text=${encodeURIComponent(
                      `Hello Ruth, I want to discuss a project:\n\nFocus: ${service}\nTimeline: ${timeline}\nRequirements: ${message || 'I would like to explore working together.'}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-semibold hover:underline flex items-center gap-1 active:scale-95 transition-all touch-manipulation"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                  <span>·</span>
                  <a
                    href={generateMailto().gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-700 font-semibold hover:underline flex items-center gap-1 active:scale-95 transition-all touch-manipulation"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Gmail Web</span>
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Anukam Ruth Nkiruka. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
            <a href="#work" className="hover:text-stone-900 transition-colors">Work</a>
            <a href="#certifications" className="hover:text-stone-900 transition-colors">Certifications</a>
            <a href="#top" className="text-amber-700 hover:underline font-medium">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </section>
  );
};
