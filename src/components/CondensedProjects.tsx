import React, { useState, useEffect, useRef } from 'react';
import { CONDENSED_PROJECTS, ProjectItem } from '../data/condensedData';
import { ArrowUpRight, ZoomIn, X, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2, Play, Pause, LayoutGrid, Sliders } from 'lucide-react';

export const CondensedProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Shopify' | 'Design & Social' | 'Operations & ClickUp' | 'Data & Spreadsheets' | 'Support'>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredProjects = CONDENSED_PROJECTS.filter(p => activeTab === 'All' || p.category === activeTab);

  // Auto-play sliding showcase ("dancing slide")
  useEffect(() => {
    if (!isPlaying || viewMode !== 'slider') return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [isPlaying, filteredProjects.length, viewMode]);

  // Reset slide index when category changes
  useEffect(() => {
    setCurrentSlideIndex(0);
  }, [activeTab]);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleModalNext = () => {
    if (!selectedProject) return;
    const currentIndex = CONDENSED_PROJECTS.findIndex(p => p.id === selectedProject.id);
    if (currentIndex < CONDENSED_PROJECTS.length - 1) {
      setSelectedProject(CONDENSED_PROJECTS[currentIndex + 1]);
    }
  };

  const handleModalPrev = () => {
    if (!selectedProject) return;
    const currentIndex = CONDENSED_PROJECTS.findIndex(p => p.id === selectedProject.id);
    if (currentIndex > 0) {
      setSelectedProject(CONDENSED_PROJECTS[currentIndex - 1]);
    }
  };

  return (
    <section id="work" className="py-14 sm:py-20 border-b border-stone-200/80 bg-[#F5EFE6]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 block mb-1">
              Work & Real Deliverables
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              Selected Work Samples
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Shopify OS 2.0, Canva marketing, ClickUp sprints, Google Sheets modeling, and customer support.
            </p>
          </div>

          {/* View Mode Toggle & Slide Player Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <div className="flex items-center bg-white border border-stone-200 rounded-xl p-1 shadow-2xs">
              <button
                onClick={() => setViewMode('slider')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'slider'
                    ? 'bg-amber-400 text-stone-900 font-bold shadow-xs'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
                title="Sliding Showcase Mode"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Sliding Showcase</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-amber-400 text-stone-900 font-bold shadow-xs'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
                title="Grid Overview Mode"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
            </div>

            {viewMode === 'slider' && (
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-xl bg-white border border-stone-200 text-stone-700 hover:text-amber-700 hover:border-amber-400 shadow-2xs transition-all cursor-pointer"
                title={isPlaying ? "Pause Sliding" : "Resume Sliding"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>
            )}
          </div>
        </div>

        {/* Clean Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-xl border border-stone-200/90 shadow-2xs mb-8 overflow-x-auto">
          {[
            { label: 'All', count: CONDENSED_PROJECTS.length, value: 'All' },
            { label: 'Shopify & Store Ops', count: CONDENSED_PROJECTS.filter(p => p.category === 'Shopify').length, value: 'Shopify' },
            { label: 'Canva & Social Media', count: CONDENSED_PROJECTS.filter(p => p.category === 'Design & Social').length, value: 'Design & Social' },
            { label: 'ClickUp & CRM Ops', count: CONDENSED_PROJECTS.filter(p => p.category === 'Operations & ClickUp').length, value: 'Operations & ClickUp' },
            { label: 'Data & Spreadsheets', count: CONDENSED_PROJECTS.filter(p => p.category === 'Data & Spreadsheets').length, value: 'Data & Spreadsheets' },
            { label: 'Customer Support', count: CONDENSED_PROJECTS.filter(p => p.category === 'Support').length, value: 'Support' },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value as any)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === tab.value
                  ? 'bg-amber-400 text-stone-900 font-bold shadow-2xs'
                  : 'text-stone-600 hover:text-stone-950 hover:bg-stone-50'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] font-mono px-1 py-0.2 rounded ${activeTab === tab.value ? 'bg-amber-500/30 text-stone-950' : 'bg-stone-100 text-stone-500'}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* VIEW MODE 1: Smooth Dancing Slideshow (Continuous Glide Showcase) */}
        {viewMode === 'slider' && (
          <div className="relative">
            {/* Slide Navigation Buttons */}
            <div className="flex items-center justify-between mb-3 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-stone-800">
                  Sample {currentSlideIndex + 1} of {filteredProjects.length}
                </span>
                <span className="text-stone-400">·</span>
                <span className="text-[11px] text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded font-mono">
                  {isPlaying ? 'Auto-Gliding' : 'Paused'}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevSlide}
                  className="p-1.5 rounded-lg bg-white border border-stone-200 hover:border-amber-400 hover:text-amber-700 transition-all cursor-pointer shadow-2xs"
                  aria-label="Previous sample"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="p-1.5 rounded-lg bg-white border border-stone-200 hover:border-amber-400 hover:text-amber-700 transition-all cursor-pointer shadow-2xs"
                  aria-label="Next sample"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Featured Interactive Dancing Slide Card */}
            {filteredProjects[currentSlideIndex] && (
              <div
                key={filteredProjects[currentSlideIndex].id}
                onClick={() => setSelectedProject(filteredProjects[currentSlideIndex])}
                className="group cursor-pointer rounded-2xl bg-white border-2 border-stone-200/90 hover:border-amber-400 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Media Showcase on Left/Top */}
                <div className="lg:col-span-7 relative aspect-[16/10] bg-stone-100 overflow-hidden border-b lg:border-b-0 lg:border-r border-stone-200">
                  <img
                    src={filteredProjects[currentSlideIndex].image}
                    alt={filteredProjects[currentSlideIndex].title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Action Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-stone-900/90 backdrop-blur-xs px-3 py-1.5 rounded-lg">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Click to Inspect Full Artifact</span>
                    </span>
                  </div>

                  {/* Top Metric Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/95 border border-stone-200 text-stone-900 text-xs font-bold rounded-lg font-mono tabular-nums shadow-xs">
                    {filteredProjects[currentSlideIndex].metric}
                  </div>
                </div>

                {/* Content on Right */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs uppercase font-semibold text-amber-700 mb-2 font-mono">
                      <span>{filteredProjects[currentSlideIndex].categoryLabel}</span>
                      <span className="text-[10px] text-stone-400">Verified Proof</span>
                    </div>

                    <h3 className="font-bold text-xl sm:text-2xl text-stone-900 group-hover:text-amber-700 transition-colors leading-snug">
                      {filteredProjects[currentSlideIndex].title}
                    </h3>

                    <p className="mt-3 text-sm text-stone-700 leading-relaxed">
                      {filteredProjects[currentSlideIndex].description}
                    </p>

                    <div className="mt-4 p-3 bg-stone-50 rounded-xl border border-stone-200/80 text-xs text-stone-800">
                      <span className="font-bold text-stone-900 block mb-0.5">Direct Impact:</span>
                      <span>{filteredProjects[currentSlideIndex].outcome}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {filteredProjects[currentSlideIndex].tools.map((t, idx) => (
                        <span key={idx} className="text-[11px] font-mono text-stone-700 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-800">
                      <span>Tap to Inspect Proof in Lightbox</span>
                      <ArrowUpRight className="w-4 h-4 text-amber-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mini Sliding Thumbnail Ribbon */}
            <div className="mt-6 flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              {filteredProjects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setCurrentSlideIndex(idx);
                    setIsPlaying(false);
                  }}
                  className={`shrink-0 w-28 sm:w-36 text-left rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    idx === currentSlideIndex
                      ? 'border-amber-500 ring-2 ring-amber-400/30 scale-105 shadow-md'
                      : 'border-stone-200 opacity-70 hover:opacity-100 bg-white'
                  }`}
                >
                  <div className="aspect-[16/10] bg-stone-100 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-1.5 bg-white">
                    <p className="text-[10px] font-medium text-stone-800 truncate">{p.title}</p>
                    <span className="text-[9px] font-mono text-amber-700">{p.metric}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* VIEW MODE 2: 3-Column Responsive Grid with subtle dancing float hover */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-xl bg-white border border-stone-200/90 hover:border-amber-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 hover:rotate-[0.3deg]"
              >
                <div>
                  {/* Media frame */}
                  <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden border-b border-stone-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white bg-stone-900/90 backdrop-blur-xs px-2.5 py-1 rounded-md">
                        <ZoomIn className="w-3 h-3" />
                        <span>Inspect Proof</span>
                      </span>
                    </div>

                    {/* Metric Chip */}
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-white/95 border border-stone-200 text-stone-900 text-[10px] font-bold rounded-md font-mono tabular-nums shadow-2xs">
                      {project.metric}
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2 text-[10px] uppercase font-semibold text-amber-700 mb-1.5 font-mono">
                      <span>{project.categoryLabel}</span>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-stone-900 group-hover:text-amber-700 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="mt-1.5 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>

                    <div className="mt-3 pt-3 border-t border-stone-100 flex flex-wrap gap-1.5">
                      {project.tools.map((t, i) => (
                        <span key={i} className="text-[10px] font-mono text-stone-600 bg-stone-50 px-2 py-0.5 rounded border border-stone-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-4 py-2.5 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600 group-hover:text-stone-900 transition-colors">
                  <span className="text-[11px] font-medium">View Artifact</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/75 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-stone-200 bg-stone-50">
              <div>
                <span className="text-[10px] uppercase font-mono text-amber-700 font-semibold">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-base font-bold text-stone-900">
                  {selectedProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedProject.image}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-200 transition-colors"
                  title="Open Raw Image"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-200 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
              <div className="rounded-xl overflow-hidden border border-stone-200 bg-stone-100">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[55vh] object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="sm:col-span-2 p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                  <h4 className="font-bold text-stone-900 text-xs">Project Context & Execution</h4>
                  <p className="text-stone-700 leading-relaxed">{selectedProject.description}</p>
                  <div className="pt-2 flex items-start gap-2 text-stone-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Outcome: {selectedProject.outcome}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-stone-500 font-semibold block">Key Outcome</span>
                    <span className="text-xl font-bold font-display text-amber-700 mt-1 block tabular-nums">
                      {selectedProject.metric}
                    </span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-200">
                    <span className="text-[10px] text-stone-500 block mb-1">Tools & Platform:</span>
                    <div className="flex flex-wrap gap-1">
                      {selectedProject.tools.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono text-stone-700 bg-white border border-stone-200 px-1.5 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer with navigation */}
            <div className="px-5 py-3 border-t border-stone-200 bg-stone-50 flex items-center justify-between text-xs text-stone-600">
              <button
                onClick={handleModalPrev}
                className="inline-flex items-center gap-1 hover:text-stone-950 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <span className="text-[11px] font-mono">
                Artifact {CONDENSED_PROJECTS.findIndex(p => p.id === selectedProject.id) + 1} of {CONDENSED_PROJECTS.length}
              </span>

              <button
                onClick={handleModalNext}
                className="inline-flex items-center gap-1 hover:text-stone-950 cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
