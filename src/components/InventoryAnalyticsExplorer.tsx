import React, { useState } from 'react';
import { INVENTORY_ITEMS_SAMPLE, MONTHLY_SALES_DATA, WorkSample, WORK_SAMPLES } from '../data/portfolioData';
import { BarChart2, TrendingUp, AlertTriangle, CheckCircle, Search, DollarSign, Eye, ArrowUpRight } from 'lucide-react';

interface InventoryAnalyticsExplorerProps {
  onSelectSample: (sample: WorkSample) => void;
}

export const InventoryAnalyticsExplorer: React.FC<InventoryAnalyticsExplorerProps> = ({ onSelectSample }) => {
  const [activeTab, setActiveTab] = useState<'inventory' | 'advertising'>('inventory');
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'In Stock' | 'Low Stock'>('All');
  const [activeChartMetric, setActiveChartMetric] = useState<'roas' | 'revenue'>('roas');

  const filteredInventory = INVENTORY_ITEMS_SAMPLE.filter((item) => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate high-level summary metrics
  const totalStockCount = INVENTORY_ITEMS_SAMPLE.reduce((acc, curr) => acc + curr.stockOnHand, 0);
  const totalValuationNGN = INVENTORY_ITEMS_SAMPLE.reduce((acc, curr) => acc + (curr.stockOnHand * curr.sellingPriceNGN), 0);
  const totalValuationUSD = INVENTORY_ITEMS_SAMPLE.reduce((acc, curr) => acc + (curr.stockOnHand * curr.sellingPriceUSD), 0);

  const inventoryWorkSample = WORK_SAMPLES.find(s => s.id === 'inventory-tracker-sheets') || WORK_SAMPLES[5];
  const salesModelWorkSample = WORK_SAMPLES.find(s => s.id === 'sales-advertising-model') || WORK_SAMPLES[6];

  return (
    <section id="inventory-bi" className="py-20 md:py-28 bg-[#FAFAFA] border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
              <span>Data Architecture & BI Modeling</span>
              <span aria-hidden="true">·</span>
              <span>Google Sheets & Excel Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 [text-wrap:balance]">
              Inventory turnover & ROAS performance modeled with precision.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-2xl">
              Explore the real data models engineered by Ruth: automated SKU margin calculations, stock health flags, and historical campaign ROAS scaling from 7.58x to 9.20x.
            </p>
          </div>

          {/* Module Switcher */}
          <div className="flex items-center gap-2 p-1.5 bg-zinc-200/70 rounded-xl shrink-0">
            <button
              onClick={() => setActiveTab('inventory')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                activeTab === 'inventory' ? 'bg-white text-zinc-950 shadow-xs' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <BarChart2 className="w-3.5 h-3.5" />
              <span>50-Product Inventory Tracker</span>
            </button>
            <button
              onClick={() => setActiveTab('advertising')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                activeTab === 'advertising' ? 'bg-white text-zinc-950 shadow-xs' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>ROAS & Ad Spend Model</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Inventory Tracker */}
        {activeTab === 'inventory' && (
          <div className="space-y-6">
            {/* KPI Cards Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="p-5 rounded-xl bg-white border border-zinc-200 shadow-2xs">
                <span className="text-xs text-zinc-500 font-medium">Total Stock on Hand</span>
                <p className="text-2xl font-bold text-zinc-950 mt-1 tabular-nums">
                  {totalStockCount} units
                </p>
                <span className="text-[11px] text-zinc-500">Across 15 actively tracked SKUs</span>
              </div>

              <div className="p-5 rounded-xl bg-white border border-zinc-200 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500 font-medium">Estimated Retail Valuation</span>
                  <button
                    onClick={() => setCurrency(currency === 'NGN' ? 'USD' : 'NGN')}
                    className="text-[11px] font-mono text-zinc-600 underline cursor-pointer"
                  >
                    Switch to {currency === 'NGN' ? 'USD ($)' : 'NGN (₦)'}
                  </button>
                </div>
                <p className="text-2xl font-bold text-zinc-950 mt-1 tabular-nums">
                  {currency === 'NGN' 
                    ? `₦${(totalValuationNGN / 1000000).toFixed(2)}M` 
                    : `$${totalValuationUSD.toLocaleString()}`}
                </p>
                <span className="text-[11px] text-zinc-500">Based on selling price margin formulas</span>
              </div>

              <div className="p-5 rounded-xl bg-white border border-zinc-200 shadow-2xs flex items-center justify-between">
                <div>
                  <span className="text-xs text-zinc-500 font-medium">Audit Proof Artifact</span>
                  <p className="text-sm font-bold text-zinc-950 mt-0.5">50-Product Sheet</p>
                  <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1 mt-1">
                    <CheckCircle className="w-3 h-3" />
                    Verified Google Sheet
                  </span>
                </div>
                <button
                  onClick={() => onSelectSample(inventoryWorkSample)}
                  className="px-3 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-xs font-medium flex items-center gap-1 cursor-pointer transition-colors shadow-2xs shrink-0"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Sheet</span>
                </button>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="p-4 rounded-xl bg-white border border-zinc-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1 min-w-[240px]">
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Search by SKU, product name, or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 text-xs bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                </div>

                <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-lg text-xs">
                  {(['All', 'In Stock', 'Low Stock'] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => setStatusFilter(status)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                        statusFilter === status ? 'bg-white text-zinc-950 shadow-2xs' : 'text-zinc-600 hover:text-zinc-900'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-zinc-500 font-medium">Display Currency:</span>
                <button
                  onClick={() => setCurrency('NGN')}
                  className={`px-2.5 py-1 rounded font-mono text-xs cursor-pointer ${currency === 'NGN' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-700'}`}
                >
                  NGN (₦)
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-2.5 py-1 rounded font-mono text-xs cursor-pointer ${currency === 'USD' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-700'}`}
                >
                  USD ($)
                </button>
              </div>
            </div>

            {/* Table Container */}
            <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-zinc-50 border-b border-zinc-200 text-zinc-500 font-mono text-[11px]">
                      <th className="py-3 px-4 font-semibold">SKU</th>
                      <th className="py-3 px-4 font-semibold">Product Name</th>
                      <th className="py-3 px-4 font-semibold">Category</th>
                      <th className="py-3 px-4 font-semibold">Variant</th>
                      <th className="py-3 px-4 font-semibold text-right">Selling Price</th>
                      <th className="py-3 px-4 font-semibold text-right">Unit Cost</th>
                      <th className="py-3 px-4 font-semibold text-right">Gross Margin</th>
                      <th className="py-3 px-4 font-semibold text-center">Stock on Hand</th>
                      <th className="py-3 px-4 font-semibold text-center">Reorder Level</th>
                      <th className="py-3 px-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200/80">
                    {filteredInventory.map((item) => {
                      const selling = currency === 'NGN' ? item.sellingPriceNGN : item.sellingPriceUSD;
                      const cost = currency === 'NGN' ? item.unitCostNGN : item.unitCostUSD;
                      const margin = (((selling - cost) / selling) * 100).toFixed(1);
                      const isLow = item.stockOnHand <= item.reorderLevel;

                      return (
                        <tr key={item.sku} className="hover:bg-zinc-50/80 transition-colors">
                          <td className="py-3 px-4 font-mono font-medium text-zinc-900">
                            {item.sku}
                          </td>
                          <td className="py-3 px-4 font-semibold text-zinc-900">
                            {item.name}
                          </td>
                          <td className="py-3 px-4 text-zinc-600">
                            {item.category}
                          </td>
                          <td className="py-3 px-4 text-zinc-500">
                            {item.variant}
                          </td>
                          <td className="py-3 px-4 font-mono tabular-nums text-right font-medium text-zinc-900">
                            {currency === 'NGN' ? `₦${selling.toLocaleString()}` : `$${selling.toFixed(2)}`}
                          </td>
                          <td className="py-3 px-4 font-mono tabular-nums text-right text-zinc-500">
                            {currency === 'NGN' ? `₦${cost.toLocaleString()}` : `$${cost.toFixed(2)}`}
                          </td>
                          <td className="py-3 px-4 font-mono tabular-nums text-right text-emerald-700 font-semibold">
                            {margin}%
                          </td>
                          <td className="py-3 px-4 font-mono tabular-nums text-center font-bold text-zinc-900">
                            {item.stockOnHand}
                          </td>
                          <td className="py-3 px-4 font-mono tabular-nums text-center text-zinc-500">
                            {item.reorderLevel}
                          </td>
                          <td className="py-3 px-4">
                            {isLow ? (
                              <span className="inline-flex items-center gap-1 font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[10px]">
                                <AlertTriangle className="w-3 h-3" />
                                Low Stock
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px]">
                                In Stock
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Advertising & ROAS Model */}
        {activeTab === 'advertising' && (
          <div className="space-y-6">
            {/* Top Summary Banner */}
            <div className="p-6 rounded-2xl bg-zinc-950 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-medium">
                  Historical Campaign Analytics (May – October 2026)
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-white mt-1">
                  641 Total Orders Generated at 9.20x Peak ROAS
                </h3>
                <p className="text-xs text-zinc-400 mt-1 max-w-xl">
                  Across 6 months of ad optimization, revenue expanded from $18,200 to $31,200/mo while maintaining an average customer acquisition cost of ₦2,784 ($26.90).
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => onSelectSample(salesModelWorkSample)}
                  className="px-4 py-2.5 bg-white text-zinc-950 rounded-xl font-semibold text-xs hover:bg-zinc-100 transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Sales Sheet Proof</span>
                </button>
              </div>
            </div>

            {/* Visual ROAS Trend Comparison */}
            <div className="p-6 rounded-xl bg-white border border-zinc-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">
                    Monthly Performance Breakdown
                  </h4>
                  <p className="text-xs text-zinc-500">
                    Modeled in Google Sheets with dynamic charting
                  </p>
                </div>

                <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-lg text-xs">
                  <button
                    onClick={() => setActiveChartMetric('roas')}
                    className={`px-3 py-1 rounded font-medium cursor-pointer ${
                      activeChartMetric === 'roas' ? 'bg-white text-zinc-950 shadow-2xs' : 'text-zinc-600'
                    }`}
                  >
                    ROAS Expansion
                  </button>
                  <button
                    onClick={() => setActiveChartMetric('revenue')}
                    className={`px-3 py-1 rounded font-medium cursor-pointer ${
                      activeChartMetric === 'revenue' ? 'bg-white text-zinc-950 shadow-2xs' : 'text-zinc-600'
                    }`}
                  >
                    Revenue vs Spend
                  </button>
                </div>
              </div>

              {/* Monthly Visual Bar Chart Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {MONTHLY_SALES_DATA.map((data) => (
                  <div key={data.month} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold text-zinc-700 block">
                        {data.month}
                      </span>
                      <span className="text-[11px] text-zinc-500 tabular-nums">
                        {data.orders} orders · {data.clicks.toLocaleString()} clicks
                      </span>
                    </div>

                    <div className="my-4 space-y-2">
                      <div>
                        <div className="flex justify-between text-[11px] font-mono mb-1">
                          <span className="text-zinc-500">Revenue</span>
                          <span className="font-bold text-zinc-900">${data.revenueUSD.toLocaleString()}</span>
                        </div>
                        <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-600 rounded-full transition-all"
                            style={{ width: `${(data.revenueUSD / 32000) * 100}%` }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] font-mono mb-1">
                          <span className="text-zinc-500">Ad Spend</span>
                          <span className="text-red-700 font-medium">${data.adSpendUSD.toLocaleString()}</span>
                        </div>
                        <div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-red-400 rounded-full transition-all"
                            style={{ width: `${(data.adSpendUSD / 4000) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-zinc-200 flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-500">ROAS:</span>
                      <span className="font-bold text-emerald-700 tabular-nums bg-emerald-50 px-2 py-0.5 rounded">
                        {data.roas.toFixed(2)}x
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
