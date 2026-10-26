import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Clock, Globe, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Shopify Store Management & Liquid',
    timeline: 'Immediate (Within 1-2 weeks)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('anukamnkirukaruth@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Value Prop */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
                <span>Start a Collaboration</span>
                <span aria-hidden="true">·</span>
                <span>Prompt Availability</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 [text-wrap:balance]">
                Let's optimize your store and streamline operations.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
                Whether you need complete Shopify catalog ownership, custom Liquid countdown features, Google Sheets inventory automation, or a dependable operational virtual assistant, I am ready to step in.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/90 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
                Direct Contact Channel
              </span>
              
              <div className="flex items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-zinc-200">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-zinc-900 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-zinc-900 truncate font-mono">
                    anukamnkirukaruth@gmail.com
                  </span>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors cursor-pointer shrink-0 flex items-center gap-1"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="space-y-2 text-xs text-zinc-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-zinc-700 shrink-0" />
                  <span>Guaranteed response within 2–4 hours during business days.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-zinc-700 shrink-0" />
                  <span>Available for global remote engagements (US, UK, EU, Africa & Worldwide).</span>
                </div>
              </div>
            </div>

            {/* Engagement Options */}
            <div className="p-5 rounded-2xl border border-zinc-200 bg-white space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Available Engagement Modes
              </h4>
              <ul className="text-xs text-zinc-700 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
                  <span>Dedicated Full-Time or Part-Time Virtual Assistant</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
                  <span>Shopify Store Launch & Liquid Customization Sprint</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
                  <span>Inventory Architecture & Spreadsheets Modeling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
                  <span>Zoho Desk / HubSpot Setup & Email Resolution</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-zinc-300 bg-white p-6 sm:p-10 shadow-lg">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-950">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formState.name}</strong>. Ruth Nkiruka Anukam has received your message and will review your requirements for <strong>{formState.service}</strong> promptly.
                  </p>
                  <div className="pt-4 flex items-center justify-center gap-3">
                    <a
                      href={`mailto:anukamnkirukaruth@gmail.com?subject=Project Inquiry from ${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message)}`}
                      className="px-5 py-2.5 bg-zinc-900 text-white rounded-xl text-xs font-semibold hover:bg-zinc-800 transition-colors"
                    >
                      Send via Default Email Client
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 border border-zinc-300 text-zinc-800 rounded-xl text-xs font-medium hover:bg-zinc-50 transition-colors cursor-pointer"
                    >
                      Submit Another Brief
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-zinc-100 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-zinc-950">
                      Submit Your Project Brief
                    </h3>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Share your goals and requirements to receive a fast, tailored operational plan.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-zinc-50 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        Your Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-zinc-50 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        Company / Store URL
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. mystore.com"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-zinc-50 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        Primary Scope Needed
                      </label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-zinc-50 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all cursor-pointer"
                      >
                        <option>Shopify Store Management & Liquid</option>
                        <option>50+ SKU Inventory Tracking (Sheets/Excel)</option>
                        <option>Zoho Desk / Books CRM Administration</option>
                        <option>HubSpot Logistics & Pipeline Tracking</option>
                        <option>Dedicated E-commerce Virtual Assistant</option>
                        <option>Other / Comprehensive Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Desired Timeline
                    </label>
                    <select
                      value={formState.timeline}
                      onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-zinc-50 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all cursor-pointer"
                    >
                      <option>Immediate (Within 1-2 weeks)</option>
                      <option>Next 30 Days</option>
                      <option>Ongoing / Retainer Role</option>
                      <option>Exploratory / Gathering Quotes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Project Details or Key Bottlenecks
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell Ruth about your current challenges, product catalog size, or operational goals..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-zinc-50 border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
