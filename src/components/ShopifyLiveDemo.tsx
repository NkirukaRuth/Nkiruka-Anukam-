import React, { useState, useEffect } from 'react';
import { ShoppingBag, Heart, Search, ShieldCheck, Truck, Sparkles, Headphones, Check, Code, Eye, RefreshCw } from 'lucide-react';

export const ShopifyLiveDemo: React.FC = () => {
  const [viewMode, setViewMode] = useState<'storefront' | 'liquid'>('storefront');
  const [cartCount, setCartCount] = useState<number>(2);
  const [currency, setCurrency] = useState<'USD' | 'NGN' | 'GBP'>('USD');
  const [selectedBagColor, setSelectedBagColor] = useState<'tan' | 'sand' | 'black'>('tan');
  const [addedItemNotification, setAddedItemNotification] = useState<string | null>(null);

  // Live Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 5,
    minutes: 42,
    seconds: 18
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatPrice = (usdPrice: number) => {
    if (currency === 'NGN') return `₦${Math.round(usdPrice * 1650).toLocaleString()}`;
    if (currency === 'GBP') return `£${(usdPrice * 0.78).toFixed(2)}`;
    return `$${usdPrice.toFixed(2)}`;
  };

  const handleAddToCart = (name: string) => {
    setCartCount(prev => prev + 1);
    setAddedItemNotification(`Added "${name}" to your bag!`);
    setTimeout(() => setAddedItemNotification(null), 3000);
  };

  const products = [
    {
      id: 'luna-tote',
      title: 'Luna Everyday Tote Bag',
      type: 'Vegan Leather',
      price: 49.99,
      reviews: 48,
      rating: 5,
      image: '/assets/aistudio/Shopify_Product_Listing_83512c89.png',
      badge: 'Bestseller'
    },
    {
      id: 'white-sneakers',
      title: 'Classic White Sneakers',
      type: 'Footwear',
      price: 59.00,
      reviews: 32,
      rating: 5,
      image: '/assets/aistudio/Shopify_Products_dashboard_c61b93ab.png',
      badge: 'Popular'
    },
    {
      id: 'velvet-bloom',
      title: 'Velvet Bloom Perfume',
      type: '50ml Eau de Parfum',
      price: 39.99,
      reviews: 28,
      rating: 5,
      image: '/assets/aistudio/Shopify_Homepage_957f18b3.png',
      badge: 'Cruelty-Free'
    },
    {
      id: 'nova-sunglasses',
      title: 'Nova Polarized Sunglasses',
      type: 'UV400 Protection',
      price: 35.00,
      reviews: 64,
      rating: 5,
      image: '/assets/aistudio/shopify__countdown_banner__a4f17632.png',
      badge: 'Essential'
    }
  ];

  const liquidSnippet = `{% comment %}
  ==============================================================
  NUVORA 2 - PROMOTIONAL COUNTDOWN & ANNOUNCEMENT BAR
  Theme Component: sections/custom-liquid-countdown.liquid
  Author: Ruth Nkiruka Anukam (Store Manager & Liquid Specialist)
  ==============================================================
{% endcomment %}

<div id="nuvora-announcement-bar" class="nuvora-ticker-wrapper">
  <div class="nuvora-announcement-inner">
    <div class="nuvora-badge">
      <svg class="icon-tag" viewBox="0 0 24 24"><path d="..."/></svg>
      <span>Get <strong>20% OFF</strong> on all new arrivals</span>
    </div>

    <!-- Live Urgent Countdown Blocks -->
    <div class="nuvora-countdown-timer" data-end-date="{{ section.settings.sale_end_date }}">
      <div class="time-box">
        <span class="num" id="cd-days">{{ days | default: "06" }}</span>
        <span class="lbl">Days</span>
      </div>
      <div class="time-box">
        <span class="num" id="cd-hours">{{ hours | default: "05" }}</span>
        <span class="lbl">Hours</span>
      </div>
      <div class="time-box">
        <span class="num" id="cd-mins">{{ minutes | default: "54" }}</span>
        <span class="lbl">Minutes</span>
      </div>
    </div>

    <a href="{{ section.settings.cta_link | default: '/collections/all' }}" class="nuvora-btn-cta">
      {{ section.settings.cta_label | default: "Shop the Sale →" }}
    </a>
  </div>
</div>

<style>
  .nuvora-ticker-wrapper {
    background: #152B24; /* Nuvora signature deep evergreen */
    color: #FFFFFF;
    padding: 12px 24px;
    font-family: inherit;
    display: flex;
    justify-content: center;
  }
  .nuvora-btn-cta {
    background: #E8D3B9; /* Elegant champagne neutral */
    color: #152B24;
    font-weight: 600;
    border-radius: 8px;
    padding: 8px 16px;
    transition: opacity 0.2s ease;
  }
</style>`;

  return (
    <section id="shopify-demo" className="py-20 md:py-28 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
              <span>Interactive Simulator</span>
              <span aria-hidden="true">·</span>
              <span>Shopify OS 2.0 & Custom Liquid</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 [text-wrap:balance]">
              Test-drive the live storefront and Liquid countdown.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-2xl">
              Experience the exact high-converting features Ruth built for Nuvora: real-time urgency ticker, currency conversion, trust markers, and responsive catalog browsing.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-2 p-1.5 bg-zinc-100 rounded-xl shrink-0">
            <button
              onClick={() => setViewMode('storefront')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                viewMode === 'storefront' ? 'bg-white text-zinc-950 shadow-xs' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Interactive Storefront</span>
            </button>
            <button
              onClick={() => setViewMode('liquid')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                viewMode === 'liquid' ? 'bg-white text-zinc-950 shadow-xs' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>View Liquid Code</span>
            </button>
          </div>
        </div>

        {/* Live Notification Toast */}
        {addedItemNotification && (
          <div className="mb-4 p-3 bg-zinc-900 text-white text-xs rounded-xl flex items-center justify-between animate-fade-in shadow-md">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>{addedItemNotification}</span>
            </span>
            <span className="text-zinc-400 text-[11px]">Cart updated</span>
          </div>
        )}

        {/* Main Interactive Container */}
        <div className="rounded-2xl border border-zinc-300 shadow-xl overflow-hidden bg-white">
          {/* Browser / Shopify Editor Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 text-zinc-300 text-xs border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              </div>
              <span className="font-mono text-[11px] text-zinc-400 hidden sm:inline ml-2">
                https://nuvora-lifestyle.myshopify.com
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px]">
              <div className="flex items-center gap-1.5">
                <span className="text-zinc-400">Currency:</span>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as any)}
                  className="bg-zinc-800 text-white rounded px-2 py-0.5 border border-zinc-700 font-mono focus:outline-none cursor-pointer"
                >
                  <option value="USD">USD ($)</option>
                  <option value="NGN">NGN (₦)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>

              <div className="flex items-center gap-1.5 text-zinc-300">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span className="font-mono font-bold tabular-nums text-emerald-400">{cartCount}</span>
              </div>
            </div>
          </div>

          {viewMode === 'liquid' ? (
            /* Liquid Code Inspector View */
            <div className="p-6 bg-zinc-950 font-mono text-xs text-zinc-300 overflow-x-auto leading-relaxed">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800 text-zinc-400">
                <span>Shopify Liquid Section Source Code</span>
                <span className="text-emerald-400">● Validated Shopify OS 2.0 Syntax</span>
              </div>
              <pre className="text-zinc-300 whitespace-pre-wrap selection:bg-zinc-800">
                {liquidSnippet}
              </pre>
            </div>
          ) : (
            /* Live Storefront Preview */
            <div>
              {/* Custom Liquid Countdown Urgency Banner */}
              <div className="bg-[#152B24] text-white px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-emerald-900/60 text-emerald-300 rounded font-semibold text-[11px] border border-emerald-700/50">
                    LIMITED SALE
                  </span>
                  <span className="font-medium">
                    Get <strong>20% OFF</strong> on all new arrivals with code <code className="bg-white/10 px-1 py-0.5 rounded font-mono text-amber-200">RUTH20</code>
                  </span>
                </div>

                {/* Urgency Countdown Ticker */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 font-mono font-bold text-center">
                    <div className="bg-black/30 px-2 py-1 rounded border border-white/10">
                      <span className="tabular-nums">{String(timeLeft.days).padStart(2, '0')}</span>
                      <span className="block text-[8px] font-sans font-normal text-zinc-400">Days</span>
                    </div>
                    <span className="text-zinc-400">:</span>
                    <div className="bg-black/30 px-2 py-1 rounded border border-white/10">
                      <span className="tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</span>
                      <span className="block text-[8px] font-sans font-normal text-zinc-400">Hours</span>
                    </div>
                    <span className="text-zinc-400">:</span>
                    <div className="bg-black/30 px-2 py-1 rounded border border-white/10">
                      <span className="tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</span>
                      <span className="block text-[8px] font-sans font-normal text-zinc-400">Min</span>
                    </div>
                    <span className="text-zinc-400">:</span>
                    <div className="bg-black/30 px-2 py-1 rounded border border-white/10 text-amber-300">
                      <span className="tabular-nums">{String(timeLeft.seconds).padStart(2, '0')}</span>
                      <span className="block text-[8px] font-sans font-normal text-zinc-400">Sec</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddToCart('Luna Everyday Tote Bag')}
                    className="ml-2 px-3 py-1.5 rounded-lg bg-[#E8D3B9] text-[#152B24] font-bold text-xs hover:bg-[#dfc4a2] transition-colors cursor-pointer"
                  >
                    Claim Discount
                  </button>
                </div>
              </div>

              {/* Nuvora Storefront Navigation */}
              <div className="px-6 py-4 border-b border-zinc-200/80 flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <div className="text-xl font-bold tracking-tight text-[#152B24] font-serif">
                    Nuvora
                  </div>
                  <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-600">
                    <span className="text-zinc-950 font-semibold cursor-pointer">Home</span>
                    <span className="hover:text-zinc-950 cursor-pointer">Shop</span>
                    <span className="hover:text-zinc-950 cursor-pointer">Collections</span>
                    <span className="hover:text-zinc-950 cursor-pointer">About</span>
                    <span className="hover:text-zinc-950 cursor-pointer">Contact</span>
                  </nav>
                </div>

                <div className="flex items-center gap-4 text-zinc-600 text-xs">
                  <span className="hidden sm:inline-flex items-center gap-1 cursor-pointer hover:text-zinc-950">
                    <Search className="w-3.5 h-3.5" />
                    <span>Search</span>
                  </span>
                  <span className="cursor-pointer hover:text-zinc-950">
                    <Heart className="w-3.5 h-3.5" />
                  </span>
                  <button 
                    onClick={() => handleAddToCart('Quick Pick Essential')}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#152B24] text-white rounded-lg font-medium cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span className="tabular-nums font-mono">{cartCount}</span>
                  </button>
                </div>
              </div>

              {/* Nuvora Lifestyle Hero Banner */}
              <div className="relative bg-gradient-to-r from-[#F6F3EE] via-[#EFEAE2] to-[#F8F5F0] px-6 sm:px-12 py-12 sm:py-16 overflow-hidden">
                <div className="max-w-xl space-y-4">
                  <span className="text-xs font-semibold tracking-wider text-amber-800 uppercase">
                    EVERYDAY ESSENTIALS
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-serif leading-tight">
                    Style Meets Everyday Living.
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Thoughtfully designed products for a more organized, beautiful, and intentional lifestyle. Crafted with durable vegan leather and modern ergonomics.
                  </p>
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => handleAddToCart('Luna Everyday Tote Bag')}
                      className="px-5 py-2.5 rounded-xl bg-[#152B24] text-white font-medium text-xs hover:bg-[#1f3f35] transition-colors cursor-pointer shadow-sm"
                    >
                      Shop Featured Collection
                    </button>
                    <span className="text-xs text-zinc-500 font-serif italic">
                      More Than Products ♡
                    </span>
                  </div>
                </div>
              </div>

              {/* 4 Trust Markers */}
              <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200 border-b border-zinc-200/80 bg-zinc-50/50 text-xs">
                <div className="p-4 flex items-center gap-3">
                  <Truck className="w-5 h-5 text-emerald-700 shrink-0" />
                  <div>
                    <strong className="block text-zinc-900 font-semibold">Fast Shipping</strong>
                    <span className="text-zinc-500 text-[11px]">Worldwide delivery</span>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
                  <div>
                    <strong className="block text-zinc-900 font-semibold">Secure Payment</strong>
                    <span className="text-zinc-500 text-[11px]">100% verified checkout</span>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-emerald-700 shrink-0" />
                  <div>
                    <strong className="block text-zinc-900 font-semibold">Eco-Friendly</strong>
                    <span className="text-zinc-500 text-[11px]">Sustainable vegan materials</span>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3">
                  <Headphones className="w-5 h-5 text-emerald-700 shrink-0" />
                  <div>
                    <strong className="block text-zinc-900 font-semibold">Reliable Support</strong>
                    <span className="text-zinc-500 text-[11px]">Ruth & Support Team on call</span>
                  </div>
                </div>
              </div>

              {/* Featured Products Grid */}
              <div className="p-6 sm:p-8 bg-[#FBFBFA]">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      Curated Catalog
                    </span>
                    <h4 className="text-xl font-bold text-zinc-950 font-serif">
                      Featured Collection
                    </h4>
                  </div>
                  <span className="text-xs font-medium text-zinc-600">
                    50 items cataloged in Admin
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.map((item) => (
                    <div key={item.id} className="bg-white rounded-xl border border-zinc-200/90 p-4 shadow-2xs flex flex-col justify-between group hover:shadow-md transition-shadow">
                      <div>
                        {/* Image preview frame */}
                        <div className="relative aspect-[4/3] rounded-lg bg-zinc-100 overflow-hidden mb-3 border border-zinc-100">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-semibold bg-white/90 text-zinc-800 shadow-2xs">
                            {item.badge}
                          </span>
                        </div>

                        <div className="text-[11px] text-zinc-500">{item.type}</div>
                        <h5 className="font-bold text-sm text-zinc-900 mt-0.5 group-hover:text-emerald-800 transition-colors">
                          {item.title}
                        </h5>

                        <div className="flex items-center gap-1 my-1.5">
                          <span className="text-amber-500 text-xs">★★★★★</span>
                          <span className="text-zinc-400 text-[11px]">({item.reviews})</span>
                        </div>

                        <div className="font-bold text-sm text-zinc-900 tabular-nums">
                          {formatPrice(item.price)}
                        </div>

                        {/* Color swatches for Luna Tote */}
                        {item.id === 'luna-tote' && (
                          <div className="flex items-center gap-1.5 mt-2">
                            <button
                              onClick={() => setSelectedBagColor('tan')}
                              className={`w-4 h-4 rounded-full bg-[#A06D44] border-2 cursor-pointer ${
                                selectedBagColor === 'tan' ? 'border-zinc-900 scale-110' : 'border-white'
                              }`}
                              title="Tan"
                            />
                            <button
                              onClick={() => setSelectedBagColor('sand')}
                              className={`w-4 h-4 rounded-full bg-[#DFCEBC] border-2 cursor-pointer ${
                                selectedBagColor === 'sand' ? 'border-zinc-900 scale-110' : 'border-white'
                              }`}
                              title="Sand"
                            />
                            <button
                              onClick={() => setSelectedBagColor('black')}
                              className={`w-4 h-4 rounded-full bg-[#18181B] border-2 cursor-pointer ${
                                selectedBagColor === 'black' ? 'border-zinc-900 scale-110' : 'border-white'
                              }`}
                              title="Black"
                            />
                            <span className="text-[10px] text-zinc-500 capitalize ml-1 font-mono">
                              {selectedBagColor}
                            </span>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => handleAddToCart(item.title)}
                        className="mt-4 w-full py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
