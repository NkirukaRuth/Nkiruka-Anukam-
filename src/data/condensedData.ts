export interface ProjectItem {
  id: string;
  title: string;
  category: 'Shopify' | 'Design & Social' | 'Operations & ClickUp' | 'Data & Spreadsheets' | 'Support';
  categoryLabel: string;
  metric: string;
  image: string;
  tagline: string;
  tools: string[];
  description: string;
  outcome: string;
}

export interface EducationCert {
  id: string;
  title: string;
  issuer: string;
  year: string;
  grade: string;
  image?: string;
  skills: string;
}

export const CONDENSED_PROJECTS: ProjectItem[] = [
  // 1. Canva Design Dashboard
  {
    id: 'canva-social-media',
    title: 'Canva Social Media & Brand Marketing Creatives',
    category: 'Design & Social',
    categoryLabel: 'Canva & Social Media',
    metric: '8+ Branded Creatives',
    image: '/assets/aistudio/Nuvora_Designs_in_Canva_Dashboard_af4a2bb9.png',
    tagline: 'Instagram product carousels, website hero banners, sale announcements & testimonials.',
    tools: ['Canva', 'Instagram', 'Social Media Management', 'Brand Design'],
    description: 'Designed comprehensive branded creative assets in Canva for Nuvora: website hero banners, Instagram product posts (perfume, tote bags, sunglasses), flash sale countdown announcement cards (20% OFF), customer review graphics (Sarah T.), new arrivals collection layouts, and delivery packaging graphics. Managed social media post scheduling and feed consistency.',
    outcome: 'Elevated visual brand consistency across social media and increased customer engagement.'
  },
  // 2. ClickUp Workflow Board
  {
    id: 'clickup-va-board',
    title: 'ClickUp Executive Workflow & Client Task Board',
    category: 'Operations & ClickUp',
    categoryLabel: 'Operations & ClickUp',
    metric: '100% Sprint Adherence',
    image: '/assets/aistudio/Screenshot_2026-10-26_110334_6f71bbfd.png',
    tagline: 'High-priority task management, client follow-ups, and weekly sprint execution.',
    tools: ['ClickUp', 'Virtual Assistance', 'SOP Tracking', 'Sprint Planning'],
    description: 'Structured and executed daily executive VA workflows in ClickUp under Client Work: High Priority (client email follow-ups, LinkedIn outreach messages, social media content, Shopify product updates, weekly reports), This Week deliverables (Canva design graphics, Mailchimp email automation, file organization), and ongoing team SOPs. Assignee: Anukam Ruth Nkiruka (AN).',
    outcome: 'Streamlined executive daily operations, prioritized high-value tasks, and ensured zero missed deadlines.'
  },
  // 3. Campaign ROAS Trend & CPA Acquisition Model
  {
    id: 'campaign-roas-trend',
    title: 'Campaign ROAS Trend & CPA Acquisition Model',
    category: 'Data & Spreadsheets',
    categoryLabel: 'Data & Spreadsheets',
    metric: '9.20x ROAS / $27.85 CPA',
    image: '/assets/aistudio/Screenshot_2026-10-26_194210_021d8be6.png',
    tagline: 'Google Sheets advertising model tracking 46,150 clicks, CPA, and ROAS growth.',
    tools: ['Google Sheets', 'ROAS Trend Line', 'CPA Analysis', 'Ad Metrics'],
    description: 'Engineered an advertising performance tracking model in Google Sheets ($ currency): analyzed 46,150 total clicks, conversion volume, click-through rates (CTR), and cost per click (CPC), achieving an average cost per acquisition (CPA) of $27.85 with an upward ROAS trend curve scaling up to 9.20x.',
    outcome: 'Demonstrated high marketing capital efficiency and predictable return on digital ad spend.'
  },
  // 4. Monthly Revenue vs Ad Spend Analysis
  {
    id: 'sales-revenue-vs-spend',
    title: 'Monthly Revenue vs Ad Spend Performance Analysis',
    category: 'Data & Spreadsheets',
    categoryLabel: 'Data & Spreadsheets',
    metric: '$30k+ Monthly Revenue',
    image: '/assets/aistudio/sales_performance_a2cd0586.png',
    tagline: 'Comparative bar chart tracking monthly store revenue ($18k to $30k+) against ad spend.',
    tools: ['Google Sheets', 'Revenue vs Ad Spend', 'Financial Modeling', 'Data Visualization'],
    description: 'Modeled historical monthly revenue progression from May to October 2026 ($18k to $30k+) alongside ad spend in Google Sheets. Tracked 641 total orders and verified campaign scale while keeping acquisition costs controlled.',
    outcome: 'Provided executive clarity on monthly top-line revenue growth and ad spend sustainability.'
  },
  // 5. 50-Product Dynamic Inventory Tracker
  {
    id: 'inventory-tracker-sheet',
    title: '50-Product Dynamic Inventory & Reorder Tracker',
    category: 'Data & Spreadsheets',
    categoryLabel: 'Data & Spreadsheets',
    metric: '50 SKUs Monitored',
    image: '/assets/aistudio/50-Product_Inventory_Tracker_e0097820.png',
    tagline: 'Google Sheets automated stock balances, profit margins, and reorder alerts.',
    tools: ['Google Sheets', 'Formulas (VLOOKUP, IF)', 'Conditional Formatting', 'Inventory Health'],
    description: 'Architected an automated multi-currency inventory management system in Google Sheets covering 50 distinct items, calculating unit costs, selling prices in NGN and USD, real-time stock balances, and dynamic reorder alerts.',
    outcome: 'Eliminated stockouts on bestseller variants and gave management instant margin clarity.'
  },
  // 6. Shopify Storefront Architecture
  {
    id: 'shopify-storefront',
    title: 'Nuvora Storefront Architecture & Theme Layout',
    category: 'Shopify',
    categoryLabel: 'Shopify & Store Ops',
    metric: '+34% Session Time',
    image: '/assets/aistudio/Shopify_Homepage_957f18b3.png',
    tagline: 'Shopify OS 2.0 storefront redesign, lifestyle hero banners, and trust badges.',
    tools: ['Shopify OS 2.0', 'Theme Design', 'UX Architecture', 'Conversion Optimization'],
    description: 'Executed complete visual storefront redesign for Nuvora Everyday Essentials: custom lifestyle hero sections, benefit badges (Worldwide Shipping, 100% Secure Checkout, Eco-Friendly, Reliable Support), and featured collection navigation.',
    outcome: 'Increased session duration by 34% and elevated brand trust across desktop and mobile.'
  },
  // 7. Custom Liquid Countdown Banner
  {
    id: 'shopify-liquid-countdown',
    title: 'Custom Liquid Dynamic Countdown Urgency Banner',
    category: 'Shopify',
    categoryLabel: 'Shopify & Store Ops',
    metric: '+22% Flash Sales',
    image: '/assets/aistudio/shopify__countdown_banner__a4f17632.png',
    tagline: 'Lightweight native Liquid countdown section for flash sale campaigns.',
    tools: ['Shopify Liquid', 'Vanilla JS', 'Theme Code Editor', 'Urgency Ticker'],
    description: 'Developed native Liquid section with dynamic countdown timer ("20% OFF on all new arrivals"), avoiding bloated third-party apps that slow down site speed.',
    outcome: 'Zero page speed penalty and a 22% conversion spike during flash promotion periods.'
  },
  // 8. Product Catalog & Inventory Dashboard
  {
    id: 'shopify-catalog-dashboard',
    title: '50+ Product Catalog & Stock Health Dashboard',
    category: 'Shopify',
    categoryLabel: 'Shopify & Store Ops',
    metric: '$12,845 Inventory',
    image: '/assets/aistudio/Shopify_Products_dashboard_c61b93ab.png',
    tagline: 'SKU organization, pricing tiers, and inventory availability tracking in Shopify.',
    tools: ['Shopify Admin', 'Catalog Taxonomy', 'Pricing Strategy', 'Stock Valuation'],
    description: 'Structured 50 active products with SKU naming standards, price optimization ($32.90 avg), and low-stock replenishment monitors.',
    outcome: 'Maintained 84% healthy in-stock ratio with 0 catalog listing discrepancies.'
  },
  // 9. SEO Product Copywriting & Listing
  {
    id: 'shopify-product-copy',
    title: 'Product Detail Optimization & SEO Copywriting',
    category: 'Shopify',
    categoryLabel: 'Shopify & Store Ops',
    metric: '4.8/5 Review Sentiment',
    image: '/assets/aistudio/Shopify_Product_Listing_83512c89.png',
    tagline: 'SEO product copywriting, benefit bullets, and multi-angle photo gallery.',
    tools: ['Shopify Admin', 'SEO Copywriting', 'Product Tagging', 'Printful Sync'],
    description: 'Authored high-converting product descriptions (Luna Everyday Tote Bag in Vegan Leather), structured feature bullet points, tagged search taxonomy, and synced multi-channel publishing across Online Store and POS.',
    outcome: 'Luna Tote Bag became the store’s top bestseller ($1,820 launch sales) with high customer review sentiment.'
  },
  // 10. Shopify Sales Analytics & Channel Attribution
  {
    id: 'shopify-sales-analytics',
    title: 'Shopify Store Performance Analytics & Channel BI',
    category: 'Shopify',
    categoryLabel: 'Shopify & Store Ops',
    metric: '$8,420 Gross (+18%)',
    image: '/assets/aistudio/Shopify_Analytics_d29498ae.png',
    tagline: 'Gross sales tracking, 28.4% returning customer rate, and order fulfillment.',
    tools: ['Shopify Analytics', 'KPI Tracking', 'Channel Attribution', 'Financial Reporting'],
    description: 'Monitored store KPIs in Shopify Analytics: $8,420.50 gross sales, 126 fulfilled orders (+22%), 28.4% returning customer rate, and multi-channel revenue attribution (Online Store 81%, POS, Shop channel).',
    outcome: 'Identified top revenue channels and boosted fulfillment throughput by 22%.'
  },
  // 11. Zoho Desk SLA Ticketing
  {
    id: 'zoho-desk-ticketing',
    title: 'Zoho Desk Customer SLA & Helpdesk Management',
    category: 'Operations & ClickUp',
    categoryLabel: 'Operations & ClickUp',
    metric: '99.4% SLA Adherence',
    image: '/assets/aistudio/Zoho_Ticketing_7ecf8fd8.png',
    tagline: 'Helpdesk queue ownership, time entry, and escalation workflows.',
    tools: ['Zoho Desk', 'Ticket Routing', 'SLA Tracking', 'Macros'],
    description: 'Primary Ticket Owner (Ruth Nkiruka) managing inbound corporate support tickets (Kunle Adeyemi, Mrs. Adenuga), logging resolution times, applying macros, and achieving sub-15 minute response times.',
    outcome: 'Resolved corporate service tickets rapidly with under 15-minute first response times.'
  },
  // 12. Zoho Books Invoicing
  {
    id: 'zoho-books-invoicing',
    title: 'Zoho Books Client Quoting & Billing Administration',
    category: 'Operations & ClickUp',
    categoryLabel: 'Operations & ClickUp',
    metric: '100% Billing Accuracy',
    image: '/assets/aistudio/Zoho_Invoice_28c12a7c.png',
    tagline: 'Formal client quotation generation, reference tracking, and invoice validation.',
    tools: ['Zoho Books', 'Zoho One', 'Invoicing', 'Tax Compliance'],
    description: 'Drafted and issued formal corporate quotations (Quote #QT-000001, Lekki) in Zoho Books with verified billing addresses, tax templates, reference numbers, and payment terms.',
    outcome: 'Cut sales-to-quote turnaround time from 2 days to under 1 hour.'
  },
  // 13. HubSpot Logistics Pipeline
  {
    id: 'hubspot-logistics-pipeline',
    title: 'HubSpot International Shipment & Customs Pipeline',
    category: 'Operations & ClickUp',
    categoryLabel: 'Operations & ClickUp',
    metric: '20+ Active Shipments',
    image: '/assets/aistudio/HubSpot_75b59415.png',
    tagline: 'Bill of lading milestones, container tracking, and customs clearance.',
    tools: ['HubSpot CRM', 'Logistics Ops', 'Milestone Tracking', 'Enrichment'],
    description: 'Customized HubSpot CRM views to monitor container shipments (INQ-001 BuildRight Ltd), tracking container IDs, port of entry clearances, and contact association for corporate logistics.',
    outcome: 'Reduced client status inquiries by 70% with real-time pipeline visibility.'
  },
  // 14. Customer Support Sample 1
  {
    id: 'email-support-returns',
    title: 'Support Sample 1: Return Request Resolution Protocol',
    category: 'Support',
    categoryLabel: 'Customer Support',
    metric: '< 15 Min Response',
    image: '/assets/aistudio/Email_Communication_Support_2835b92c.png',
    tagline: 'Assistance With Your Nuvora Return Request (Emily)',
    tools: ['Email Support', 'Return Authorization', 'Conflict De-escalation'],
    description: 'Direct response to Emily handling a return request with empathy, verifying order number and item details, and walking the customer through a smooth, policy-compliant return process.',
    outcome: 'Validated customer experience, prevented chargeback disputes, and maintained brand trust.'
  },
  // 15. Customer Support Sample 2
  {
    id: 'email-support-confirmation',
    title: 'Support Sample 2: Order Confirmation & Roadmap',
    category: 'Support',
    categoryLabel: 'Customer Support',
    metric: '98% CSAT Rating',
    image: '/assets/aistudio/Email_Communication_Support_11bf18c8.png',
    tagline: 'Order #NB-1048 Confirmed & Preparing for Shipment (Davies)',
    tools: ['Post-Purchase CX', 'Order Tracking', 'Transactional Email'],
    description: 'Proactive order confirmation sent to Davies for order #NB-1048, detailing order number, confirmed status, payment received, delivery preparation, and next tracking dispatch steps.',
    outcome: 'Eliminated post-purchase anxiety and reduced "Where is my order" support queries by 45%.'
  },
  // 16. Customer Support Sample 3
  {
    id: 'email-support-delays',
    title: 'Support Sample 3: Courier Delay Mitigation & Inquiry',
    category: 'Support',
    categoryLabel: 'Customer Support',
    metric: '100% De-escalation',
    image: '/assets/aistudio/Email_Communication_Support_4f70297c.png',
    tagline: 'Courier Delivery Delay Investigation & Sincere Apology (Sarah)',
    tools: ['Courier Coordination', 'Customer Care', 'Escalation Handling'],
    description: 'Handled an overdue shipment for Sarah with a sincere apology, active coordination with delivery carrier partners, and prompt follow-up commitments.',
    outcome: 'Successfully retained a frustrated customer through transparent communication and fast courier tracking.'
  }
];

export const EDUCATION_CERTIFICATIONS: EducationCert[] = [
  {
    id: 'bsc-economics',
    title: 'B.Sc. Economics',
    issuer: 'Imo State University',
    year: '2016',
    grade: 'Second Class Honours Upper Division',
    image: '/assets/certs/bsc_economics.png',
    skills: 'Quantitative analysis, economic modeling, market research, statistics'
  },
  {
    id: 'data-analytics',
    title: 'Data Analysis Certificate',
    issuer: 'CWW Tech Africa',
    year: 'April 2024',
    grade: 'Grade: Very Good',
    image: '/assets/certs/data_analysis.png',
    skills: 'Microsoft Power BI, Tableau, SQL queries, data visualization'
  },
  {
    id: 'ai-automation',
    title: 'Certificate in AI Automation',
    issuer: 'DV Digital Academy',
    year: 'June 2026',
    grade: 'Certificate of Completion',
    image: '/assets/certs/ai_automation.png',
    skills: 'n8n workflow automation, Zapier integration, AI agent prompts'
  },
  {
    id: 'canva-video',
    title: 'Create a Promotional Video Using Canva',
    issuer: 'Coursera Project Network',
    year: 'April 2024',
    grade: 'Project Certificate',
    image: '/assets/certs/canva_coursera.png',
    skills: 'Canva graphic design, brand video production, marketing creatives'
  },
  {
    id: 'it-skills-training',
    title: 'On Demand IT Skills Training',
    issuer: 'Digital Witch Academy',
    year: 'April 2024',
    grade: 'Certificate of Completion',
    image: '/assets/certs/digital_witch_it.png',
    skills: 'Executive virtual assistance, Google Workspace, remote collaboration'
  },
  {
    id: 'pmp-cert',
    title: 'Project Management Professional (PMP)',
    issuer: 'Professional Certification',
    year: '2018',
    grade: 'Certified Professional',
    skills: 'Agile sprints, SOP documentation, stakeholder communication'
  }
];

export const TECH_TOOLS = [
  'Shopify OS 2.0',
  'Liquid Coding',
  'Canva Design',
  'Printful Mockups',
  'ClickUp',
  'Social Media Mgmt',
  'Zoho Desk',
  'Zoho Books',
  'HubSpot CRM',
  'Google Sheets',
  'Microsoft Excel',
  'Zendesk',
  'Slack',
  'Google Workspace'
];
