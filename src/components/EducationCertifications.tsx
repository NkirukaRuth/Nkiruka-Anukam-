import React, { useState } from 'react';
import { EDUCATION_CERTIFICATIONS, EducationCert } from '../data/condensedData';
import { Award, GraduationCap, ZoomIn, X, ExternalLink, CheckCircle } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<EducationCert | null>(null);

  return (
    <section id="certifications" className="py-14 sm:py-20 border-b border-stone-200/80 bg-[#FAF6F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1">
            <GraduationCap className="w-4 h-4" />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
            Verified academic foundation in economics combined with specialized certifications in data analytics, IT operations, Canva creative production, and AI workflows.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {EDUCATION_CERTIFICATIONS.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (item.image) setSelectedCert(item);
              }}
              className={`p-5 rounded-xl border border-stone-200/90 bg-white transition-all flex flex-col justify-between ${
                item.image 
                  ? 'hover:border-amber-400 hover:shadow-md cursor-pointer hover:-translate-y-0.5' 
                  : 'border-stone-200'
              }`}
            >
              <div>
                {/* Optional Certificate Thumbnail */}
                {item.image && (
                  <div className="relative aspect-[16/10] bg-stone-100 rounded-lg overflow-hidden border border-stone-200 mb-4 group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-stone-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-stone-900/80 px-2.5 py-1 rounded-md">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Inspect Certificate</span>
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-[11px] text-stone-500 font-mono mb-1.5">
                  <span className="font-semibold text-amber-700">{item.issuer}</span>
                  <span>{item.year}</span>
                </div>

                <h3 className="font-bold text-sm sm:text-base text-stone-900 leading-snug">
                  {item.title}
                </h3>

                <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-medium">
                  <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>{item.grade}</span>
                </div>

                <p className="mt-2.5 text-xs text-stone-600 leading-relaxed">
                  {item.skills}
                </p>
              </div>

              {item.image && (
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-medium">
                  <span>View Verified Certificate</span>
                  <Award className="w-4 h-4 text-amber-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && selectedCert.image && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-stone-200 bg-stone-50">
              <div>
                <span className="text-[10px] uppercase font-mono text-amber-700 font-semibold">
                  {selectedCert.issuer} · {selectedCert.year}
                </span>
                <h3 className="text-base font-bold text-stone-900">
                  {selectedCert.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-200 transition-colors"
                  title="Open Original"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-200 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-stone-100 flex items-center justify-center">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[65vh] object-contain rounded-lg border border-stone-200 shadow-sm mx-auto bg-white"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="px-5 py-3 border-t border-stone-200 bg-stone-50 flex items-center justify-between text-xs text-stone-600">
              <span className="font-medium text-emerald-800">
                Status: {selectedCert.grade}
              </span>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-3 py-1 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-800 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
