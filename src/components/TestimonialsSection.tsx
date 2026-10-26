import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
            <span>Verified Recommendations</span>
            <span aria-hidden="true">·</span>
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 [text-wrap:balance]">
            Trusted by founders, operations leaders, and remote teams.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600">
            Real feedback from collaborators reflecting Ruth's dependability, precision with numbers, and rapid execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-zinc-300 mb-4" />
                <p className="text-sm text-zinc-700 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100">
                <div className="text-xs font-bold text-zinc-950">
                  {item.client}
                </div>
                <div className="text-xs text-zinc-500">
                  {item.brand} · {item.location}
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md w-fit">
                  <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
