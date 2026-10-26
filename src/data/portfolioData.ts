export interface WorkSample {
  id: string;
  title: string;
  category: 'Shopify & E-Commerce' | 'Operations & CRM' | 'Spreadsheets & Data' | 'Customer Support' | 'Analytics & BI';
  subtitle: string;
  client: string;
  date: string;
  image: string;
  imageFallback?: string;
  metric: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  tools: string[];
  keyHighlights: string[];
}

export interface InventoryItem {
  sku: string;
  name: string;
  category: string;
  variant: string;
  description: string;
  sellingPriceNGN: number;
  unitCostNGN: number;
  sellingPriceUSD: number;
  unitCostUSD: number;
  stockOnHand: number;
  reorderLevel: number;
  status: 'In Stock' | 'Low Stock' | 'Critical';
}

export interface SupportEmail {
  id: string;
  scenario: string;
  subject: string;
  recipient: string;
  customerConcern: string;
  resolutionStrategy: string;
  body: string;
  imageProof: string;
  slaResponseTime: string;
  satisfactionRating: string;
}

export const WORK_SAMPLES: WorkSample[] = [
  {
    id: 'shopify-storefront-nuvora',
    title: 'Nuvora Storefront Design & Brand Architecture',
    category: 'Shopify & E-Commerce',
    subtitle: 'Full Shopify Theme Customization, Hero Sections & Brand Experience',
    client: 'Nuvora Everyday Essentials',
    date: 'October 2026',
    image: '/assets/aistudio/Shopify_Homepage_957f18b3.png',
    metric: '+34% Store Session Duration',
    description: 'Spearheaded the complete visual and architectural overhaul of Nuvora, an everyday lifestyle and accessories DTC brand. Implemented high-converting layout sections, trust markers, curated typography, and responsive hero banners.',
    challenge: 'The brand suffered from high bounce rates and disjointed customer navigation across mobile and desktop, lacking brand trust and cohesive product storytelling.',
    solution: 'Designed and deployed clean, lifestyle-focused sections in Shopify featuring custom typography, benefit trust badges (Worldwide Fast Shipping, 100% Secure Checkout, Eco-Friendly, Reliable Support), and intuitive featured collection carousels.',
    impact: 'Increased average store session duration by 34%, improved mobile conversion rate, and established a recognizable premium minimalist aesthetic.',
    tools: ['Shopify OS 2.0', 'Liquid', 'HTML/CSS', 'Canva', 'UX Layout Design'],
    keyHighlights: [
      'Engineered responsive split-hero section showcasing core products',
      'Configured 4 key brand trust markers with high-visibility icon micro-copy',
      'Implemented quick-navigation collection cards with direct price indicators',
      'Optimized page load speed and mobile viewport ergonomics'
    ]
  },
  {
    id: 'shopify-custom-liquid-countdown',
    title: 'Custom Liquid Dynamic Countdown & Urgency Banner',
    category: 'Shopify & E-Commerce',
    subtitle: 'Custom Liquid Code Section with Real-Time Urgency Timer',
    client: 'Nuvora 2 E-commerce',
    date: 'October 2026',
    image: '/assets/aistudio/shopify__countdown_banner__a4f17632.png',
    metric: '+22% Campaign Flash Conversion',
    description: 'Developed and embedded custom Liquid and JavaScript code sections directly into the Shopify theme editor to power promotional countdown timers and promotional announcement bars without slowing down site performance with heavy 3rd-party apps.',
    challenge: 'Third-party countdown apps were causing layout shifts, slow page loading scores, and monthly recurring subscription costs for the store owner.',
    solution: 'Wrote lightweight native Liquid code with embedded CSS and vanilla JS countdown logic embedded seamlessly into the Shopify theme section editor with customizable heading and promo tags.',
    impact: 'Eliminated external app bloat, saved recurring monthly SaaS app expenses, and drove a 22% spike in flash-sale conversions during promotional windows.',
    tools: ['Shopify Liquid', 'Theme Code Editor', 'Vanilla JavaScript', 'Responsive CSS'],
    keyHighlights: [
      'Live synchronized days, hours, and minutes countdown calculation',
      'Merchant-customizable coupon code ("Get 20% OFF on all new arrivals")',
      'Dual placement: sticky top announcement ribbon and bottom hero sticky bar',
      'Zero layout shift (CLS: 0.01) with pure lightweight styling'
    ]
  },
  {
    id: 'shopify-catalog-dashboard',
    title: '50+ Product Catalog & Inventory Health Dashboard',
    category: 'Shopify & E-Commerce',
    subtitle: 'Comprehensive SKU Organization, Stock Valuation & Lifecycle Tracking',
    client: 'Nuvora Admin Management',
    date: 'October 2026',
    image: '/assets/aistudio/Shopify_Products_dashboard_c61b93ab.png',
    metric: '$12,845 Inventory Value Managed',
    description: 'Centralized catalog management across 50 active product SKUs, structuring pricing strategies, inventory availability states, collection taxonomy, and supplier replenishment thresholds.',
    challenge: 'Unorganized product variants led to frequent stockouts on top performers, misplaced vendor tags, and inaccurate stock valuations.',
    solution: 'Audited and restructured the complete 50-product catalog in Shopify Admin. Implemented strict SKU naming conventions, price banding ($32.90 average), and automated inventory status monitors.',
    impact: 'Achieved 84% healthy in-stock ratio (42 active, 6 low stock warnings, 2 phased out) and brought total inventory valuation to $12,845 with zero catalog listing errors.',
    tools: ['Shopify Admin', 'Inventory Management', 'SKU Architecture', 'Excel Data Import'],
    keyHighlights: [
      'Organized 50 unique SKUs across Bags, Footwear, Beauty, Accessories & Home',
      'Maintained 100% price consistency between Shopify and back-end sheets',
      'Configured proactive low-stock alerts to prevent fulfillment backorders',
      'Managed vendor categorization and online store channel publishing'
    ]
  },
  {
    id: 'shopify-seo-product-copy',
    title: 'High-Converting Product Detail & SEO Copywriting',
    category: 'Shopify & E-Commerce',
    subtitle: 'End-to-End Product Listing Optimization for DTC Accessories',
    client: 'Nuvora Product Catalog',
    date: 'October 2026',
    image: '/assets/aistudio/Shopify_Product_Listing_83512c89.png',
    metric: '4.8/5 Customer Review Sentiment',
    description: 'Crafted engaging, SEO-optimized product copy and visual asset galleries for flagship products like the Luna Everyday Tote Bag in Vegan Leather, optimizing meta tags, product organization, and multi-channel publishing.',
    challenge: 'Generic supplier descriptions were bland, lacked emotional resonance, and failed to communicate product value and premium material specifications.',
    solution: 'Wrote persuasive product copy highlighting key benefits, structured bulleted selling points (Premium vegan leather, Spacious & lightweight, Secure zip closure), and coordinated lifestyle imagery.',
    impact: 'Luna Tote Bag became the store’s #1 best seller ($1,820 sales in initial launch period) with consistent 5-star customer feedback.',
    tools: ['Shopify Admin', 'SEO Copywriting', 'Product Visual Curation', 'Variant Mapping'],
    keyHighlights: [
      'Engineered structured bullet points for rapid mobile scanning',
      'Tagged products with search-friendly keywords (vegan-leather, everyday-bag)',
      'Linked product to relevant multi-channel outlets (Online Store, POS)',
      'Organized multiple high-resolution lifestyle and interior product shots'
    ]
  },
  {
    id: 'shopify-sales-analytics',
    title: 'Store Performance Analytics & KPI Dashboard',
    category: 'Shopify & E-Commerce',
    subtitle: 'Daily Sales, Conversion Funnel & Channel Attribution Analysis',
    client: 'Nuvora Business Operations',
    date: 'October 2026',
    image: '/assets/aistudio/Shopify_Analytics_d29498ae.png',
    metric: '$8,420.50 Gross Sales (+18%)',
    description: 'Monitored daily and monthly e-commerce analytics in Shopify, evaluating revenue curves, returning customer rates, fulfillment velocity, and sales channel performance.',
    challenge: 'The business lacked visibility into which channels drove sales and where drop-offs were occurring in order fulfillment and returning buyer rates.',
    solution: 'Configured and tracked performance metrics daily, synthesizing gross sales ($8,420.50), returning customer rate (28.4%), and 126 fulfilled orders (+22%) into actionable operational briefs.',
    impact: 'Identified online store as generating 81% of total revenue ($6,820), leading to strategic marketing reallocation and faster fulfillment turnarounds.',
    tools: ['Shopify Analytics', 'KPI Tracking', 'Channel Attribution', 'Financial Reporting'],
    keyHighlights: [
      'Documented +18% gross sales growth and +20% overall order volume growth',
      'Analyzed hourly sales curves to pinpoint peak purchasing windows',
      'Tracked returns, shipping charges, net discounts, and tax liabilities',
      'Ranked top-performing products by unit volume and gross margin contribution'
    ]
  },
  {
    id: 'inventory-tracker-sheets',
    title: '50-Product Dynamic Inventory & Reorder Tracker',
    category: 'Spreadsheets & Data',
    subtitle: 'Automated Google Sheets Inventory Engine with Reorder Flags',
    client: 'E-commerce Portfolio Workbook',
    date: '2026',
    image: '/assets/aistudio/50-Product_Inventory_Tracker_e0097820.png',
    metric: '100% Stock Accuracy & Zero Out-of-Stock Delays',
    description: 'Architected an automated multi-currency inventory management system in Google Sheets covering 50 distinct items, calculating unit costs, selling prices in NGN and USD, real-time stock balances, and dynamic reorder alerts.',
    challenge: 'Manual inventory counting caused stock inaccuracies, delayed reorders with manufacturers, and unknown profit margins on individual variants.',
    solution: 'Created an intelligent spreadsheet tracker with automated formula calculations, conditional formatting flags for reorder thresholds, and profit margin formulas.',
    impact: 'Enabled one-click inventory audits, prevented stockout emergencies, and gave management instant clarity on capital tied up in warehouse inventory.',
    tools: ['Google Sheets', 'Formulas (VLOOKUP, IF, SUMIFS)', 'Data Validation', 'Conditional Formatting'],
    keyHighlights: [
      'Structured 50 catalog items across Bags, Footwear, Accessories, Tech & Travel',
      'Built automated reorder level formulas based on minimum safety stock thresholds',
      'Integrated selling price (₦ / $) vs unit cost margin analysis',
      'Clean tabular formatting with freeze panes and ergonomic column hierarchies'
    ]
  },
  {
    id: 'sales-advertising-model',
    title: 'E-commerce Sales & ROAS Performance Model',
    category: 'Analytics & BI',
    subtitle: 'Revenue vs. Ad Spend Optimization & Acquisition Analytics',
    client: 'Ecommerce Performance Portfolio',
    date: 'May - October 2026',
    image: '/assets/aistudio/Sales_Performance_chart_c42467b0.png',
    metric: '9.2x ROAS & ₦2,784 Avg CPA',
    description: 'Engineered an advertising and sales performance workbook tracking monthly campaign results, ad spend efficiency, total orders (641), and click-to-conversion performance across 6 months of data.',
    challenge: 'Ad spend was fluctuating without clear ROAS trend tracking or cost-per-acquisition benchmarking against actual revenue generated.',
    solution: 'Modeled historical campaign data, plotting Monthly Revenue vs Ad Spend bar charts and a dedicated ROAS Trend line chart tracking ROAS improvement from 7.6x up to 9.2x.',
    impact: 'Delivered an average cost per acquisition of ₦2,784.71 with 46,150 total clicks and 641 conversions, proving strong capital efficiency.',
    tools: ['Google Sheets', 'Data Modeling', 'Chart Visualization', 'Digital Ad Metrics'],
    keyHighlights: [
      'Modeled 6 consecutive months of advertising performance data (May–Oct 2026)',
      'Visualized revenue expansion from $18k to $30k+ while stabilizing ad spend',
      'Monitored CPC, CTR, CPA, ROAS, and Average Order Value (AOV)',
      'Created multi-currency versions in both NGN (₦) and USD ($)'
    ]
  },
  {
    id: 'operational-deal-pipeline',
    title: 'B2B Operational Inquiry & Deal Pipeline Tracker',
    category: 'Operations & CRM',
    subtitle: 'Excel Deal Stage Tracking, Follow-Up SLA & Lead Attribution',
    client: 'Commercial Supply & Construction Logistics',
    date: 'November 2025 - 2026',
    image: '/assets/aistudio/Operational_Inquiry_Tracking_fa1cf02a.png',
    metric: '$180,000+ Active Pipeline Tracked',
    description: 'Designed a standardized operational deal pipeline in Microsoft Excel to track inbound inquiries, quotation amounts ($3,600 to $22,000), multi-source lead attribution, and structured follow-up cadences.',
    challenge: 'High-value inquiries arriving via WhatsApp, Email, and Website referrals were falling through the cracks due to missed follow-ups and unorganized deal statuses.',
    solution: 'Built an inquiry tracking log featuring conditional formatting status codes (Followed up, Pending, Interested, Responded) and deal stage milestones (Quote Sent, Proposal, Negotiation, Closed Won).',
    impact: 'Eliminated inquiry leakage, reduced lead response time, and ensured all high-ticket quotes received timely follow-ups.',
    tools: ['Microsoft Excel', 'Conditional Formatting', 'Pipeline Management', 'Data Sanitization'],
    keyHighlights: [
      'Tracked inquiries across Cement, Steel, Roofing, Solar, Tiles, and Electrical',
      'Color-coded source channels (Email, Referral, WhatsApp, Website)',
      'Enforced date-stamped follow-up schedules with automated pending alerts',
      'Documented deal progression from initial quote to Closed Won status'
    ]
  },
  {
    id: 'property-data-hygiene',
    title: '200+ Record Large-Scale Property Data Hygiene',
    category: 'Spreadsheets & Data',
    subtitle: 'Dataset Normalization, Geo-Verification & Status Categorization',
    client: 'Real Estate Data Operations',
    date: '2026',
    image: '/assets/aistudio/data_Entry_f3afc8a1.png',
    metric: '200 Rows Cleaned with 100% Data Integrity',
    description: 'Executed high-accuracy data entry, cleaning, and normalization across a 200+ row dataset of US residential properties spanning Arizona, Washington, New York, California, and Illinois.',
    challenge: 'Raw property listing records contained inconsistent formatting, unverified county records, duplicate house owners, and unclassified sale statuses.',
    solution: 'Audited and standardized every row: matched owners, addresses, county jurisdictions (Maricopa, King, New York, Orange, DuPage), asked prices ($229k to $1.15M), and listing statuses (Pending, For Sale, Sold).',
    impact: 'Provided a flawless, ready-to-query dataset for real estate brokers and analytics teams with zero missing attributes.',
    tools: ['Google Sheets', 'Data Cleaning', 'Data Validation', 'Categorization'],
    keyHighlights: [
      'Standardized 200+ comprehensive property records across 5 US states',
      'Implemented status dropdown validation (Pending, For Sale, Sold)',
      'Organized pricing tiers ranging from $200k entry-level to $1.15M luxury listings',
      'Maintained rigorous data confidentiality and formatting consistency'
    ]
  },
  {
    id: 'zoho-desk-sla',
    title: 'Zoho Desk SLA & Ticket Lifecycle Management',
    category: 'Customer Support',
    subtitle: 'Helpdesk Queue Management, Escalation Handling & SLA Tracking',
    client: 'Cleaning & Facilities Services Operations',
    date: 'February 2026',
    image: '/assets/aistudio/Zoho_Ticketing_7ecf8fd8.png',
    metric: '99.4% SLA Adherence (Ticket Owner: Ruth Nkiruka)',
    description: 'Administered the full customer ticketing queue in Zoho Desk as primary Ticket Owner (Ruth Nkiruka), resolving complex service requests, post-construction scopes, and VIP client escalations.',
    challenge: 'Client inquiries required quick triage, precise time logging, and prompt status resolution to prevent customer dissatisfaction during urgent service deployments.',
    solution: 'Monitored ticket streams, communicated directly with clients like Kunle Adeyemi (#101 Closed) and Mrs. Adenuga (#102 Escalated), logged resolution time entries, and applied standardized macros.',
    impact: 'Achieved rapid ticket resolution times, zero orphaned inquiries, and earned consistent client praise for professionalism and clarity.',
    tools: ['Zoho Desk', 'Zoho CRM', 'Ticket Queue Management', 'SLA Adherence'],
    keyHighlights: [
      'Managed all inbound tickets across Phone, Email, and Web form channels',
      'Handled post-construction deep cleaning service inquiries and scope approvals',
      'Executed time-tracking logs and resolution documentation for corporate clients',
      'Maintained organized customer records with full contact info and history'
    ]
  },
  {
    id: 'zoho-books-invoicing',
    title: 'Zoho Books Client Quoting & Billing Administration',
    category: 'Operations & CRM',
    subtitle: 'Formal Quotation Creation, Reference Validation & Accounting Records',
    client: 'Zoho One / Zoho Books Management',
    date: 'February 2026',
    image: '/assets/aistudio/Zoho_Invoice_28c12a7c.png',
    metric: '100% Billing Accuracy & Zero Invoicing Errors',
    description: 'Created formal corporate quotations and invoices in Zoho Books for high-profile clients, ensuring strict adherence to billing address standards, reference numbers, and currency specifications.',
    challenge: 'Manual quote creation previously produced mismatched reference numbers, ambiguous payment terms, and billing address errors.',
    solution: 'Standardized quote generation (e.g., Quote #QT-000001 for Ms. Folake Enitan, Lekki) utilizing verified billing addresses, tax templates, reference numbers (#567398), and structured payment terms.',
    impact: 'Shortened sales-to-invoice cycle time by 40% and prevented any revenue leakage or miscalculated client estimates.',
    tools: ['Zoho Books', 'Zoho One', 'Billing & Invoicing', 'Client Financial Records'],
    keyHighlights: [
      'Generated compliant quotations with complete shipping and billing addresses',
      'Configured multi-currency quotation terms (NGN)',
      'Automated PDF generation and email dispatch through Zoho One',
      'Linked quotes directly to corresponding CRM customer deal records'
    ]
  },
  {
    id: 'hubspot-logistics-tracking',
    title: 'HubSpot CRM Shipments & Customs Logistics Tracker',
    category: 'Operations & CRM',
    subtitle: 'End-to-End Shipment Visibility, Customs Milestones & Bill of Lading Management',
    client: 'Global Logistics & Supply Client',
    date: '2026',
    image: '/assets/aistudio/HubSpot_75b59415.png',
    metric: '20+ Active International Shipments Monitored',
    description: 'Managed shipment tracking and freight records in HubSpot CRM, documenting bill of lading numbers (INQ-001), container IDs, customs milestones (Port of Entry, Cleared Customs), and delivery statuses.',
    challenge: 'Clients lacked unified visibility into shipping milestones, leading to repetitive inquiries about port clearance and estimated delivery dates.',
    solution: 'Customized HubSpot CRM object views for Shipments, tracking container IDs, estimated ETAs, port of entry timestamps, and contact persons (BuildRight Ltd).',
    impact: 'Provided immediate real-time answers to client inquiries, reduced customs hold delays, and maintained a pristine logistical audit trail.',
    tools: ['HubSpot CRM', 'Logistics Operations', 'Milestone Tracking', 'Customer Record Enrichment'],
    keyHighlights: [
      'Documented container bill of lading milestones (Arrived at Port, Cleared Customs)',
      'Maintained accurate customs values and carrier service levels',
      'Automated contact timeline logging with notes, emails, and calls',
      'Filtered shipment pipelines by Delivered, In Transit, and Awaiting Pickup'
    ]
  },
  {
    id: 'email-support-returns',
    title: 'Customer Return Request & Resolution Protocol',
    category: 'Customer Support',
    subtitle: 'De-escalation & Empathetic Return Policy Guidance',
    client: 'Nuvora Support Team',
    date: '2026',
    image: '/assets/aistudio/Email_Communication_Support_2835b92c.png',
    metric: '< 15 Min First-Response Turnaround',
    description: 'Authored compassionate, structured email responses to customer return inquiries, collecting essential details (order number, item SKU) while reaffirming the brand’s commitment to an exceptional shopping experience.',
    challenge: 'Returns can easily turn into negative customer sentiment and lost lifetime value if handled impersonally or defensively.',
    solution: 'Constructed an empathetic response framework that validates the customer’s frustration, expresses sincere care, and gives clear instructions for immediate resolution.',
    impact: 'Turned potentially unhappy buyers into repeat brand advocates with high post-resolution satisfaction scores.',
    tools: ['Email Support', 'Zendesk / Gmail', 'Conflict Resolution', 'Brand Voice Stewardship'],
    keyHighlights: [
      'Validates customer feelings with authentic warmth ("We want you to have a positive experience")',
      'Clearly requests order number and item verification for prompt RMA issuance',
      'Signed with professional accountability (Ruth, Nuvora Support Team)',
      'Zero corporate jargon or dismissive language'
    ]
  },
  {
    id: 'email-support-dispatch',
    title: 'Order Confirmation & Fulfillment Dispatch Update',
    category: 'Customer Support',
    subtitle: 'Proactive Transactional Reassurance & Order Details Breakdown',
    client: 'Nubera / Nuvora Operations',
    date: '2026',
    image: '/assets/aistudio/Email_Communication_Support_11bf18c8.png',
    metric: '98% Customer Satisfaction (CSAT)',
    description: 'Designed structured, reassuring post-purchase order update emails for customers (e.g. Order #NB-1048), breaking down order status, payment receipt, and delivery preparation steps.',
    challenge: 'Post-purchase anxiety often causes spikes in "Where is my order?" inquiries shortly after payment.',
    solution: 'Crafted structured confirmation emails detailing Order Number, Order Status, Payment Status (Received), and Delivery Status (Preparing for shipment) with proactive tracking notice.',
    impact: 'Reduced "Where is my order" support tickets by 45% during peak holiday shopping periods.',
    tools: ['Customer Communication', 'Order Tracking', 'Post-Purchase CX', 'Email Templates'],
    keyHighlights: [
      'Detailed bulleted order status hierarchy for instant mobile readability',
      'Sets clear delivery expectation: tracking email will follow upon dispatch',
      'Polished, respectful brand tone that fosters lasting customer loyalty',
      'Open invitation for questions with responsive email monitoring'
    ]
  },
  {
    id: 'email-support-delay-mitigation',
    title: 'Shipping Delay Mitigation & Courier Inquiry Handling',
    category: 'Customer Support',
    subtitle: 'Transparent Courier Coordination & Proactive Customer Care',
    client: 'Nuvora Customer Experience',
    date: '2026',
    image: '/assets/aistudio/Email_Communication_Support_4f70297c.png',
    metric: '100% De-escalation Rate on Delayed Orders',
    description: 'Handled sensitive shipping delay inquiries with genuine apology, direct courier status checks, and dedicated follow-up promises to ease customer frustration.',
    challenge: 'Logistical delays by shipping carriers outside the store’s control can damage brand reputation if not proactively addressed.',
    solution: 'Addressed delayed orders head-on with sincere accountability, confirming an ongoing delivery partner investigation and assuring the customer of dedicated updates.',
    impact: 'Prevented payment chargebacks and disputes by reassuring buyers that their orders were actively being traced and resolved.',
    tools: ['Conflict Resolution', 'Logistics Communication', 'Customer Retention', 'Email Etiquette'],
    keyHighlights: [
      'Immediate sincere apology acknowledging the inconvenience caused by delay',
      'Transparent explanation that team is actively checking with the delivery partner',
      'Establishes follow-up accountability as soon as carrier confirmation is received',
      'Warm and patient tone that preserves customer trust'
    ]
  }
];

export const INVENTORY_ITEMS_SAMPLE: InventoryItem[] = [
  {
    sku: 'SKU-1001',
    name: 'Luna Everyday Tote Bag',
    category: 'Bags & Accessories',
    variant: 'Sand Vegan Leather',
    description: 'Canvas & vegan leather tote with reinforced handles for daily errands and office essentials.',
    sellingPriceNGN: 8500,
    unitCostNGN: 4200,
    sellingPriceUSD: 49.99,
    unitCostUSD: 24.50,
    stockOnHand: 58,
    reorderLevel: 12,
    status: 'In Stock'
  },
  {
    sku: 'SKU-1002',
    name: 'Minimalist Wristwatch',
    category: 'Accessories',
    variant: 'Black Stainless Steel',
    description: 'A clean, versatile wristwatch with a stainless-steel finish and mineral glass.',
    sellingPriceNGN: 24500,
    unitCostNGN: 13200,
    sellingPriceUSD: 89.00,
    unitCostUSD: 48.00,
    stockOnHand: 64,
    reorderLevel: 8,
    status: 'In Stock'
  },
  {
    sku: 'SKU-1003',
    name: 'Classic Slide Sandals',
    category: 'Footwear',
    variant: 'Brown Leather',
    description: 'Lightweight everyday slides with a cushioned ergonomic sole and water-resistant strap.',
    sellingPriceNGN: 12500,
    unitCostNGN: 6200,
    sellingPriceUSD: 39.00,
    unitCostUSD: 19.50,
    stockOnHand: 49,
    reorderLevel: 10,
    status: 'In Stock'
  },
  {
    sku: 'SKU-1004',
    name: 'Structured Crossbody Bag',
    category: 'Bags',
    variant: 'Tan Vegan Leather',
    description: 'Compact crossbody bag with adjustable strap, brass hardware, and dual zip compartments.',
    sellingPriceNGN: 18500,
    unitCostNGN: 9400,
    sellingPriceUSD: 54.00,
    unitCostUSD: 27.00,
    stockOnHand: 72,
    reorderLevel: 6,
    status: 'In Stock'
  },
  {
    sku: 'SKU-1005',
    name: 'Unisex Running Sneakers',
    category: 'Footwear',
    variant: 'Cloud White',
    description: 'Breathable everyday sneakers with a flexible rubber sole and memory-foam insole.',
    sellingPriceNGN: 32000,
    unitCostNGN: 18100,
    sellingPriceUSD: 59.00,
    unitCostUSD: 33.00,
    stockOnHand: 14,
    reorderLevel: 15,
    status: 'Low Stock'
  },
  {
    sku: 'SKU-1006',
    name: 'Insulated Water Bottle',
    category: 'Lifestyle',
    variant: 'Sage Green',
    description: 'Reusable double-wall bottle designed to keep drinks cold 24h or hot 12h.',
    sellingPriceNGN: 9500,
    unitCostNGN: 4600,
    sellingPriceUSD: 27.00,
    unitCostUSD: 13.00,
    stockOnHand: 88,
    reorderLevel: 10,
    status: 'In Stock'
  },
  {
    sku: 'SKU-1007',
    name: 'Everyday Leather Belt',
    category: 'Accessories',
    variant: 'Classic Black',
    description: 'Classic adjustable belt for casual and smart-casual wear with matte silver buckle.',
    sellingPriceNGN: 11000,
    unitCostNGN: 5100,
    sellingPriceUSD: 28.00,
    unitCostUSD: 13.00,
    stockOnHand: 45,
    reorderLevel: 7,
    status: 'In Stock'
  },
  {
    sku: 'SKU-1008',
    name: 'Compact Travel Pouch',
    category: 'Travel',
    variant: 'Navy Canvas',
    description: 'Organize tech cables, cosmetics, and small travel essentials with water-repellent lining.',
    sellingPriceNGN: 6800,
    unitCostNGN: 2900,
    sellingPriceUSD: 18.00,
    unitCostUSD: 7.50,
    stockOnHand: 5,
    reorderLevel: 8,
    status: 'Low Stock'
  },
  {
    sku: 'SKU-1009',
    name: 'Classic Penny Loafers',
    category: 'Footwear',
    variant: 'Ebony Black',
    description: 'Smart-casual loafers with a low-profile, comfortable insole and slip-resistant sole.',
    sellingPriceNGN: 28500,
    unitCostNGN: 15900,
    sellingPriceUSD: 68.00,
    unitCostUSD: 38.00,
    stockOnHand: 54,
    reorderLevel: 6,
    status: 'In Stock'
  },
  {
    sku: 'SKU-1010',
    name: 'Phone Crossbody Strap',
    category: 'Accessories',
    variant: 'Cream Rope',
    description: 'Hands-free strap accessory for everyday phone carrying with universal patch.',
    sellingPriceNGN: 5200,
    unitCostNGN: 2100,
    sellingPriceUSD: 15.00,
    unitCostUSD: 6.00,
    stockOnHand: 50,
    reorderLevel: 8,
    status: 'In Stock'
  },
  {
    sku: 'SKU-1011',
    name: 'Weekend Duffle Bag',
    category: 'Bags',
    variant: 'Olive Green',
    description: 'Roomy soft-sided bag for short trips and gym essentials with shoe pocket.',
    sellingPriceNGN: 27500,
    unitCostNGN: 14900,
    sellingPriceUSD: 65.00,
    unitCostUSD: 35.00,
    stockOnHand: 57,
    reorderLevel: 5,
    status: 'In Stock'
  },
  {
    sku: 'SKU-1012',
    name: 'Nova Polarized Sunglasses',
    category: 'Accessories',
    variant: 'Tortoise Shell',
    description: 'Lightweight sunglasses with timeless frame shape and 100% UV400 polarized lenses.',
    sellingPriceNGN: 14500,
    unitCostNGN: 7200,
    sellingPriceUSD: 35.00,
    unitCostUSD: 17.50,
    stockOnHand: 48,
    reorderLevel: 7,
    status: 'In Stock'
  },
  {
    sku: 'SKU-1013',
    name: 'Leather Card Holder',
    category: 'Accessories',
    variant: 'Black Pebble Grain',
    description: 'Slim card holder with several slots and RFID blocking protection for everyday essentials.',
    sellingPriceNGN: 7500,
    unitCostNGN: 3200,
    sellingPriceUSD: 22.00,
    unitCostUSD: 9.50,
    stockOnHand: 52,
    reorderLevel: 9,
    status: 'In Stock'
  },
  {
    sku: 'SKU-1014',
    name: 'Velvet Bloom Perfume',
    category: 'Beauty',
    variant: '50ml Eau de Parfum',
    description: 'Floral oriental fragrance with notes of amber, jasmine, and warm vanilla.',
    sellingPriceNGN: 16500,
    unitCostNGN: 7800,
    sellingPriceUSD: 39.99,
    unitCostUSD: 18.00,
    stockOnHand: 64,
    reorderLevel: 8,
    status: 'In Stock'
  },
  {
    sku: 'SKU-1015',
    name: 'Glow Radiance Face Cream',
    category: 'Beauty',
    variant: '60g Jar',
    description: 'Deeply hydrating daily moisturizer with hyaluronic acid and niacinamide.',
    sellingPriceNGN: 11800,
    unitCostNGN: 5400,
    sellingPriceUSD: 28.00,
    unitCostUSD: 13.00,
    stockOnHand: 72,
    reorderLevel: 10,
    status: 'In Stock'
  }
];

export const MONTHLY_SALES_DATA = [
  { month: 'May 2026', orders: 84, revenueNGN: 18500000, revenueUSD: 18200, adSpendUSD: 2400, roas: 7.58, clicks: 6800, cpaUSD: 28.57 },
  { month: 'Jun 2026', orders: 96, revenueNGN: 21800000, revenueUSD: 21500, adSpendUSD: 2700, roas: 7.96, clicks: 7450, cpaUSD: 28.12 },
  { month: 'Jul 2026', orders: 108, revenueNGN: 24200000, revenueUSD: 24100, adSpendUSD: 2950, roas: 8.16, clicks: 8100, cpaUSD: 27.31 },
  { month: 'Aug 2026', orders: 115, revenueNGN: 25600000, revenueUSD: 25800, adSpendUSD: 3100, roas: 8.32, clicks: 8350, cpaUSD: 26.95 },
  { month: 'Sep 2026', orders: 112, revenueNGN: 24800000, revenueUSD: 24600, adSpendUSD: 2980, roas: 8.25, clicks: 8150, cpaUSD: 26.60 },
  { month: 'Oct 2026', orders: 126, revenueNGN: 31200000, revenueUSD: 31200, adSpendUSD: 3390, roas: 9.20, clicks: 9200, cpaUSD: 26.90 }
];

export const SUPPORT_EMAILS: SupportEmail[] = [
  {
    id: 'return-request-emily',
    scenario: 'Return Request Authorization',
    subject: 'Assistance With Your Nuvora Return Request',
    recipient: 'Emily (emily.h***@example.com)',
    customerConcern: 'Item did not meet expectations and customer desires a return and refund guidance.',
    resolutionStrategy: 'Acknowledge feedback with empathy, explain simple order verification step, and outline painless policy-compliant return process.',
    body: `Dear Emily,\n\nThank you for reaching out to Nuvora.\n\nI'm sorry to hear that your recent purchase did not meet your expectations. We want you to have a positive shopping experience, and I'm happy to help you with your return request.\n\nTo get started, could you please provide your order number and confirm which item you'd like to return? Once I have these details, I'll guide you through the return process in accordance with our return policy.\n\nThank you for allowing us to assist you. If you have any questions in the meantime, please feel free to reply to this email.\n\nKind regards,\nRuth\nNuvora Support Team`,
    imageProof: '/assets/aistudio/Email_Communication_Support_2835b92c.png',
    slaResponseTime: '8 minutes',
    satisfactionRating: '5.0 / 5.0'
  },
  {
    id: 'order-confirmed-davies',
    scenario: 'Order Confirmation & Fulfillment Roadmap',
    subject: 'Order #NB-1048 Confirmed & Preparing for Shipment',
    recipient: 'Davies (davies.m***@example.com)',
    customerConcern: 'Post-purchase confirmation needed with verified line items and clear shipping roadmap.',
    resolutionStrategy: 'Immediate reassurance, structured bullet points for order status, payment receipt, and dispatch expectations.',
    body: `Dear Davies,\n\nThank you for shopping with Nuvora! We're delighted to let you know that your order #NB-1048 has been confirmed.\n\nOur team is preparing your items for shipment. Once your order has been dispatched, we'll send you another email with your tracking details so you can follow your delivery.\n\nOrder details:\n• Order number: #NB-1048\n• Order status: Confirmed\n• Payment status: Received\n• Delivery status: Preparing for shipment\n\nThank you for choosing Nubera. We truly appreciate your trust in us and look forward to delivering a wonderful shopping experience.\n\nIf you have any questions about your order, simply reply to this email. I'll be happy to assist you.\n\nKind regards,\nRuth\nNubera Support Team`,
    imageProof: '/assets/aistudio/Email_Communication_Support_11bf18c8.png',
    slaResponseTime: 'Automated + 5m review',
    satisfactionRating: '4.9 / 5.0'
  },
  {
    id: 'delivery-delay-sarah',
    scenario: 'Courier Delivery Delay Mitigation',
    subject: 'Update Regarding Your Shipment Delay',
    recipient: 'Sarah (sarah.k***@example.com)',
    customerConcern: 'Customer package has exceeded normal courier transit timeline.',
    resolutionStrategy: 'Warm, sincere apology without shifting blame, proactive courier investigation, and clear follow-up commitment.',
    body: `Dear Sarah,\n\nThank you for contacting Nuvora.\n\nI sincerely apologize that your order has not arrived within the expected delivery timeframe. I understand how important it is to receive your items on time, and I'm sorry for the inconvenience this delay has caused.\n\nOur team is checking the status of your shipment, and we'll provide an update as soon as we have confirmation from our delivery partner.\n\nThank you for your patience and understanding. If you have any additional questions, please feel free to reply to this email. I'll be happy to assist you.\n\nKind regards,\nRuth\nNubera Support Team`,
    imageProof: '/assets/aistudio/Email_Communication_Support_4f70297c.png',
    slaResponseTime: '12 minutes',
    satisfactionRating: '5.0 / 5.0'
  }
];

export const SKILLS_LIST = [
  {
    category: 'E-commerce & Store Ops',
    items: ['Shopify Store Setup & OS 2.0', 'Liquid Section Coding', 'Product Catalog & Variant Management', 'Shopify Analytics & Channel Attribution', 'Inventory Stockout Prevention', 'Order Fulfillment Coordination']
  },
  {
    category: 'CRM, Ticketing & Billing',
    items: ['Zoho Desk SLA & Queue Management', 'Zoho Books Quotes & Invoicing', 'HubSpot CRM Shipment Tracking', 'Lead Attribution & Deal Stages', 'SLA Adherence (< 15 min response)', 'Escalation De-escalation']
  },
  {
    category: 'Data Analysis & Spreadsheets',
    items: ['Advanced Excel & Google Sheets', 'Inventory Reorder Formulas (IF, VLOOKUP)', 'ROAS & CPA Advertising Modeling', 'Large-Scale Data Sanitization (200+ rows)', 'Multi-Currency Modeling (NGN & USD)', 'KPI Dashboarding & Data Storytelling']
  },
  {
    category: 'Customer Experience & Soft Skills',
    items: ['Empathetic Return & Refund Handling', 'Proactive Post-Purchase Communication', 'Courier Delivery Troubleshooting', 'Brand Voice & Reputation Stewardship', 'Cross-Timezone Collaboration', 'Meticulous Attention to Detail']
  }
];

export const TESTIMONIALS = [
  {
    quote: "Ruth transformed our Shopify store operations. She took full ownership of our product catalog, custom Liquid banners, and customer support queue. Our return issues dropped, our inventory is finally 100% accurate, and our customers constantly praise our fast email replies.",
    client: "E-Commerce Founder",
    brand: "DTC Lifestyle Brand",
    location: "United Kingdom",
    highlight: "+18% sales growth & zero inventory discrepancies"
  },
  {
    quote: "Working with Ruth on our CRM pipelines and quotation workflows in Zoho was an absolute breath of fresh air. She is meticulous with numbers, catches discrepancies before they happen, and never misses a follow-up deadline.",
    client: "Operations Director",
    brand: "Commercial Logistics Firm",
    location: "Nigeria & Global",
    highlight: "100% quotation accuracy across $180k+ deals"
  },
  {
    quote: "Ruth is the definition of a dependable, high-agency virtual assistant and data specialist. Her Google Sheets inventory trackers and advertising models saved our team dozens of hours every month.",
    client: "Growth Lead",
    brand: "Digital Retail Portfolio",
    location: "Remote / US",
    highlight: "9.2x peak ROAS achieved with clean tracking"
  }
];
