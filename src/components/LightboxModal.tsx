import React, { useEffect, useState } from 'react';
import { WorkSample, WORK_SAMPLES } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight, CheckCircle2, ZoomIn, ZoomOut, Maximize2, ExternalLink } from 'lucide-react';

interface LightboxModalProps {
  sample: WorkSample | null;
  onClose: () => void;
  onSelectSample: (sample: WorkSample) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ sample, onClose, onSelectSample }) => {
  const [activeTab, setActiveTab] = useState<'proof' | 'overview'>('proof');
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!sample) return;
      const currentIndex = WORK_SAMPLES.findIndex(s => s.id === sample.id);
      if (e.key === 'ArrowRight' && currentIndex < WORK_SAMPLES.length - 1) {
        onSelectSample(WORK_SAMPLES[currentIndex + 1]);
        setIsZoomed(false);
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onSelectSample(WORK_SAMPLES[currentIndex - 1]);
        setIsZoomed(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sample, onClose, onSelectSample]);

  if (!sample) return null;

  const currentIndex = WORK_SAMPLES.findIndex(s => s.id === sample.id);
  const prevSample = currentIndex > 0 ? WORK_SAMPLES[currentIndex - 1] : null;
  const nextSample = currentIndex < WORK_SAMPLES.length - 1 ? WORK_SAMPLES[currentIndex + 1] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-50/80 shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-zinc-500">
              Artifact {currentIndex + 1} of {WORK_SAMPLES.length}
            </span>
            <span aria-hidden="true" className="text-zinc-300">|</span>
            <span className="text-xs font-medium text-zinc-700 truncate max-w-xs sm:max-w-md">
              {sample.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* View Tab Switcher */}
            <div className="flex items-center gap-1 p-1 bg-zinc-200/60 rounded-lg text-xs font-medium">
              <button
                onClick={() => setActiveTab('proof')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  activeTab === 'proof' ? 'bg-white text-zinc-950 shadow-2xs' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                High-Res Proof
              </button>
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  activeTab === 'overview' ? 'bg-white text-zinc-950 shadow-2xs' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                Case Study Specs
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-zinc-950 rounded-lg hover:bg-zinc-200/60 transition-colors ml-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'proof' ? (
            <div className="p-4 sm:p-6 bg-zinc-900 flex flex-col items-center justify-center min-h-[460px]">
              {/* Image Controls */}
              <div className="w-full flex items-center justify-between text-xs text-zinc-300 mb-3 px-2">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Verified Screenshot Evidence · {sample.client}</span>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors cursor-pointer text-[11px]"
                  >
                    {isZoomed ? <ZoomOut className="w-3 h-3" /> : <ZoomIn className="w-3 h-3" />}
                    <span>{isZoomed ? 'Fit to Screen' : '100% Zoom'}</span>
                  </button>
                  <a
                    href={sample.image}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors cursor-pointer text-[11px]"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Open Raw</span>
                  </a>
                </div>
              </div>

              {/* Main Image Frame */}
              <div className={`relative max-w-full rounded-xl overflow-auto border border-zinc-700/70 bg-zinc-950/60 transition-all ${
                isZoomed ? 'w-full max-h-[70vh]' : 'max-h-[64vh]'
              }`}>
                <img
                  src={sample.image}
                  alt={sample.title}
                  className={`mx-auto object-contain transition-all duration-300 ${
                    isZoomed ? 'w-auto max-w-none scale-125 my-8' : 'w-full h-auto max-h-[62vh]'
                  }`}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Sub-caption */}
              <div className="w-full mt-4 p-4 rounded-xl bg-zinc-800/80 border border-zinc-700 text-zinc-300 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <strong className="text-white font-semibold">{sample.title}</strong>
                  <p className="text-zinc-400 text-[11px] mt-0.5">{sample.subtitle}</p>
                </div>
                <div className="font-mono text-emerald-400 font-semibold text-xs tabular-nums bg-emerald-950/50 px-3 py-1 rounded border border-emerald-800/60 shrink-0">
                  {sample.metric}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 sm:p-10 space-y-8 bg-white">
              {/* Title & Metadata */}
              <div>
                <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
                  <span className="font-semibold text-zinc-800">{sample.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{sample.client}</span>
                  <span aria-hidden="true">·</span>
                  <span>{sample.date}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                  {sample.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-zinc-600">
                  {sample.subtitle}
                </p>
              </div>

              {/* Problem / Solution / Impact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-zinc-200">
                <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                    01. The Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    {sample.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                    02. Ruth's Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    {sample.solution}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                    03. Business Impact
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
                    {sample.impact}
                  </p>
                  <div className="mt-3 font-mono text-xs font-bold text-emerald-800 tabular-nums">
                    Key Outcome: {sample.metric}
                  </div>
                </div>
              </div>

              {/* Key Deliverables Checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
                  Key Technical Execution Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sample.keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-50 border border-zinc-200/80 text-xs text-zinc-800">
                      <CheckCircle2 className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Employed */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                  Tech Stack & Systems Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {sample.tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1 bg-zinc-100 text-zinc-800 rounded-lg text-xs font-mono font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar with Prev / Next Navigation */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-zinc-200 bg-zinc-50 shrink-0 text-xs">
          <button
            onClick={() => {
              if (prevSample) {
                onSelectSample(prevSample);
                setIsZoomed(false);
              }
            }}
            disabled={!prevSample}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              prevSample ? 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-200/70' : 'text-zinc-300 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Artifact</span>
          </button>

          <span className="text-zinc-500 font-mono text-[11px] hidden sm:inline">
            Use Left / Right arrow keys to navigate
          </span>

          <button
            onClick={() => {
              if (nextSample) {
                onSelectSample(nextSample);
                setIsZoomed(false);
              }
            }}
            disabled={!nextSample}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
              nextSample ? 'text-zinc-700 hover:text-zinc-950 hover:bg-zinc-200/70' : 'text-zinc-300 cursor-not-allowed'
            }`}
          >
            <span>Next Artifact</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
