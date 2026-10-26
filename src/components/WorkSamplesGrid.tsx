import React, { useState } from 'react';
import { WORK_SAMPLES, WorkSample } from '../data/portfolioData';
import { ArrowUpRight, Search, ZoomIn } from 'lucide-react';

interface WorkSamplesGridProps {
  onSelectSample: (sample: WorkSample) => void;
  selectedCategoryFilter?: string;
  onFilterChange?: (category: string) => void;
}

export const WorkSamplesGrid: React.FC<WorkSamplesGridProps> = ({ 
  onSelectSample,
  selectedCategoryFilter = 'All',
  onFilterChange
}) => {
  const [activeFilter, setActiveFilter] = useState<string>(selectedCategoryFilter);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterClick = (cat: string) => {
    setActiveFilter(cat);
    if (onFilterChange) onFilterChange(cat);
  };

  const categories = [
    { label: 'All Artifacts', value: 'All', count: WORK_SAMPLES.length },
    { label: 'Shopify & E-Commerce', value: 'Shopify & E-Commerce', count: WORK_SAMPLES.filter(s => s.category === 'Shopify & E-Commerce').length },
    { label: 'Operations & CRM', value: 'Operations & CRM', count: WORK_SAMPLES.filter(s => s.category === 'Operations & CRM').length },
    { label: 'Spreadsheets & Data', value: 'Spreadsheets & Data', count: WORK_SAMPLES.filter(s => s.category === 'Spreadsheets & Data').length },
    { label: 'Analytics & BI', value: 'Analytics & BI', count: WORK_SAMPLES.filter(s => s.category === 'Analytics & BI').length },
    { label: 'Customer Support', value: 'Customer Support', count: WORK_SAMPLES.filter(s => s.category === 'Customer Support').length },
  ];

  const filteredSamples = WORK_SAMPLES.filter((sample) => {
    const matchesCategory = activeFilter === 'All' || sample.category === activeFilter;
    const matchesSearch = 
      sample.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sample.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sample.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="work-samples" className="py-20 md:py-28 bg-[#FAFAFA] border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
              <span>Verified Artifacts & Work Vault</span>
              <span aria-hidden="true">·</span>
              <span>15 Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 [text-wrap:balance]">
              Actual deliverables, systems, and client results.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-2xl">
              Every card below is backed by real project screenshots, live theme code, operational trackers, or authentic customer correspondence. Click any artifact to inspect the full case study and high-resolution evidence.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Filter by keyword (e.g. Liquid, Zoho)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-zinc-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all placeholder:text-zinc-400"
            />
          </div>
        </div>

        {/* Interactive Filter Buttons (Segmented control) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-zinc-200/60 rounded-xl w-fit mb-10 max-w-full overflow-x-auto">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => handleFilterClick(cat.value)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-white text-zinc-950 shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/60'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] tabular-nums font-mono px-1 py-0.2 rounded ${isActive ? 'bg-zinc-100 text-zinc-800' : 'text-zinc-400'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredSamples.map((sample, index) => {
            // Give subtle emphasis to primary showcase cards
            const isFeatured = index === 0 || index === 1;

            return (
              <div
                key={sample.id}
                onClick={() => onSelectSample(sample)}
                className={`group cursor-pointer rounded-2xl bg-white border border-zinc-200/90 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Media Frame */}
                  <div className="relative aspect-[16/10] bg-zinc-100 overflow-hidden border-b border-zinc-200/70">
                    <img
                      src={sample.image}
                      alt={sample.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Overlay for legibility & hover trigger */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-zinc-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Inspect Case Study</span>
                      </span>
                    </div>

                    {/* Metric Badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-zinc-950/80 backdrop-blur-md text-white text-[11px] font-semibold rounded-md shadow-xs tabular-nums">
                      {sample.metric}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    {/* Unboxed Metadata with Typographic Separator */}
                    <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
                      <span className="font-medium text-zinc-700">{sample.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{sample.client}</span>
                      <span aria-hidden="true">·</span>
                      <span>{sample.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-zinc-950 tracking-tight group-hover:text-zinc-800 transition-colors [text-wrap:balance]">
                      {sample.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-zinc-600 line-clamp-3 leading-relaxed">
                      {sample.description}
                    </p>

                    {/* Tool Badges */}
                    <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-wrap gap-1.5">
                      {sample.tools.slice(0, 3).map((tool, idx) => (
                        <span key={idx} className="text-[11px] text-zinc-500 font-mono">
                          {tool}{idx < Math.min(sample.tools.length, 3) - 1 ? ' ·' : ''}
                        </span>
                      ))}
                      {sample.tools.length > 3 && (
                        <span className="text-[11px] text-zinc-400 font-mono">
                          +{sample.tools.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-5 py-3.5 sm:px-6 bg-zinc-50/70 border-t border-zinc-200/70 flex items-center justify-between text-xs font-medium text-zinc-700 group-hover:text-zinc-950">
                  <span>View Proof & Takeaways</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>

        {filteredSamples.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-zinc-200">
            <p className="text-sm font-semibold text-zinc-800">No work samples match your search</p>
            <p className="text-xs text-zinc-500 mt-1">Try clearing your search query or selecting "All Artifacts".</p>
            <button
              onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 text-xs font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
