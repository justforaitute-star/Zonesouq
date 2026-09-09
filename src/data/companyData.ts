import { ServiceItem, TradeStep, Pillar, TradeTileItem } from '../types';

export const COMPANY_DETAILS = {
  name: 'Zone Souq',
  tagline: 'Modern Regional Trading Hub',
  positioning:
    'A modern regional trading hub connecting global suppliers with local markets through efficient, modern and customer-centric trading solutions.',
  phone: '0568777245',
  phoneFormatted: '+971 56 877 7245',
  email: 'zonesouq@gmail.com',
  address: {
    building: 'Compass Building',
    street: 'Al Shohada Road',
    zone: 'Al Hamra Industrial Zone-FZ',
    emirate: 'Ras Al Khaimah',
    country: 'United Arab Emirates',
    full: 'Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ, Ras Al Khaimah-U.A.E',
  },
  mission:
    'To deliver high-quality products at competitive prices with reliability, transparency, and exceptional service, ensuring long-term value for our customers, partners, and communities.',
  vision:
    'To become a leading regional trading hub known for trust, innovation, and excellence—connecting global suppliers with local markets through efficient, modern, and customer-centric trading solutions.',
  registration: {
    jurisdiction: 'Ras Al Khaimah Economic Zone (RAKEZ)',
    type: 'Free Zone International Trading Entity',
    hubRole: 'Cross-Continental Wholesale & Distribution Node',
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'wholesale-trading',
    number: '01',
    title: 'Wholesale Trading',
    tagline: 'High-Volume Commercial Supply',
    description: 'Supplying quality products in bulk at competitive prices.',
    capabilities: [
      'Bulk inventory sourcing & allocation',
      'Competitive wholesale pricing tiers',
      'Strict multi-batch quality verification',
      'Scalable regional order fulfillment',
    ],
    scope: 'Connecting international bulk manufacturing with regional merchant & enterprise demands.',
    highlights: [
      { label: 'Fulfillment', value: 'Bulk Consignments' },
      { label: 'Pricing Model', value: 'Volume-Optimized' },
      { label: 'Assurance', value: 'Standardized Inspection' },
    ],
  },
  {
    id: 'import-export',
    number: '02',
    title: 'Import & Export',
    tagline: 'End-to-End Transnational Logistics',
    description: 'Global sourcing, shipping, and full trade documentation.',
    capabilities: [
      'Cross-border freight coordination (Air, Sea & Land)',
      'Customs clearance & tariff compliance',
      'Comprehensive trade documentation & certification',
      'Multimodal transit tracking from origin to destination',
    ],
    scope: 'Navigating regulatory standards and transnational shipping lanes with complete transparency.',
    highlights: [
      { label: 'Documentation', value: 'Full Trade Compliance' },
      { label: 'Logistics', value: 'Multi-Modal Freight' },
      { label: 'Transit Scope', value: 'Intercontinental' },
    ],
  },
  {
    id: 'procurement-distribution',
    number: '03',
    title: 'Product Procurement & Distribution',
    tagline: 'Strategic Supplier Matching & Delivery',
    description: 'Finding reliable suppliers and delivering products efficiently.',
    capabilities: [
      'Direct manufacturer due diligence & vetted onboarding',
      'Contract negotiation & specifications alignment',
      'Regional warehousing & distribution orchestration',
      'Last-mile supply chain reliability to local markets',
    ],
    scope: 'Eliminating intermediaries to forge resilient, dependable supply chains for partners.',
    highlights: [
      { label: 'Supplier Vetting', value: 'Audited & Verified' },
      { label: 'Delivery Model', value: 'Efficient Local Dispatch' },
      { label: 'Service Focus', value: 'Customer-Centric' },
    ],
  },
];

export const CORE_PILLARS: Pillar[] = [
  {
    title: 'Trust & Transparency',
    tagline: 'Clear, Accountable Trade',
    description:
      'Every trade lifecycle is backed by complete documentation, clear pricing structures, and authentic supplier accountability.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Global Connectivity',
    tagline: 'Direct Global-to-Local Access',
    description:
      'Bridging trusted manufacturers across global corridors directly to high-demand regional distributors and retail channels.',
    iconName: 'Globe2',
  },
  {
    title: 'Strategic UAE Hub',
    tagline: 'Al Hamra Free Zone Gateway',
    description:
      'Headquartered in Ras Al Khaimah, leveraging the UAE’s world-class maritime ports, airports, and streamlined trading infrastructure.',
    iconName: 'Anchor',
  },
  {
    title: 'Efficiency & Reliability',
    tagline: 'Agile Procurement Execution',
    description:
      'From bulk sourcing inquiries to customs clearance and final handover, we deliver swift turnaround times without quality compromises.',
    iconName: 'Zap',
  },
];

export const TRADE_PROCESS_STEPS: TradeStep[] = [
  {
    step: '01',
    title: 'Supplier Discovery & Due Diligence',
    description:
      'We identify, vet, and audit global manufacturers to verify product standards, production capabilities, and ethical compliance.',
    details: ['Rigorous quality audit', 'Material & batch verification', 'Competitive cost validation'],
  },
  {
    step: '02',
    title: 'Wholesale Procurement & Contracting',
    description:
      'Aligning commercial specifications, volume commitments, and transparent terms tailored to local market demand.',
    details: ['Volume-tiered contracts', 'Escrow & trade protection', 'Specification matching'],
  },
  {
    step: '03',
    title: 'Shipping, Customs & Trade Documentation',
    description:
      'Complete handling of bills of lading, certificates of origin, customs declaration, and regional import protocols.',
    details: ['Full regulatory compliance', 'Multi-modal transit routing', 'Real-time consignment milestones'],
  },
  {
    step: '04',
    title: 'Hub Warehousing & Regional Distribution',
    description:
      'Goods are routed through our UAE free zone hub in Ras Al Khaimah for staging and rapid distribution into target markets.',
    details: ['Hub inventory staging', 'Secure handling protocols', 'On-time market delivery'],
  },
];

export const TRADE_TILES_DATA: TradeTileItem[] = [
  {
    id: 'tile-electronics',
    category: 'Commercial Electronics',
    title: 'Precision Commercial Hardware & Components',
    origin: 'East Asia (Shenzhen, Taipei, Incheon)',
    destination: 'UAE Hub & GCC Regional Distribution',
    leadTime: '8 - 14 Days Transit',
    moq: '1,000 Units / Mixed FCL',
    compliance: 'CE, RoHS, SASO Verified',
    badge: 'High Turnaround',
    iconName: 'Cpu',
    description: 'Direct procurement of factory-tested power assemblies, communication modules, and consumer hardware with batch traceability.',
    inspectionTier: 'Pre-Shipment 100% Optical QA',
  },
  {
    id: 'tile-fmcg',
    category: 'Fast-Moving Consumer Goods',
    title: 'Packaged Foodstuffs & Pantry Commodities',
    origin: 'South Asia & Southeast Asia',
    destination: 'UAE Port & Regional Wholesale Markets',
    leadTime: '5 - 10 Days Maritime',
    moq: 'Full Container Load (20ft / 40ft)',
    compliance: 'Halal Certified, Dubai/RAK Food Safety',
    badge: 'Core Wholesale',
    iconName: 'Package',
    description: 'Bulk supply of certified packaged consumables, staple grains, and culinary provisions with verified shelf life and customs clearance.',
    inspectionTier: 'Health & Sanitary Laboratory Certs',
  },
  {
    id: 'tile-textiles',
    category: 'Industrial Textiles & Apparel',
    title: 'Institutional Linens & Uniform Fabrics',
    origin: 'India, Pakistan & Turkey Corridors',
    destination: 'Ras Al Khaimah Logistics Staging',
    leadTime: '7 - 12 Days Intermodal',
    moq: '5,000 Metres / 2,500 Sets',
    compliance: 'OEKO-TEX Standard 100',
    badge: 'Custom Specification',
    iconName: 'Layers',
    description: 'High-density industrial yarn, hospitality linens, and protective workwear textiles sourced straight from certified looms.',
    inspectionTier: 'Tensile & Colorfastness Testing',
  },
  {
    id: 'tile-building',
    category: 'Industrial & Building Hardware',
    title: 'Architectural Fittings & Steel Fasteners',
    origin: 'East Asia & Central Europe',
    destination: 'Direct-to-Site & Dealer Warehousing',
    leadTime: '12 - 18 Days Sea Freight',
    moq: '10 Metric Tons',
    compliance: 'ISO 9001 / ASTM Certified',
    badge: 'Bulk Freight',
    iconName: 'Wrench',
    description: 'Galvanized fixtures, structural bolts, stainless connectors, and specialized engineering fittings for trade distributors.',
    inspectionTier: 'Metallurgical Mill Test Reports',
  },
  {
    id: 'tile-packaging',
    category: 'Sustainable Packaging',
    title: 'Biodegradable Cartons & Poly Containers',
    origin: 'Malaysia & Vietnam Corridors',
    destination: 'UAE Free Zone Fulfillment Center',
    leadTime: '6 - 11 Days Regional Transit',
    moq: '20,000 Pcs / Containerized',
    compliance: 'FSC Certified & Eco-Standard',
    badge: 'Eco-Forward',
    iconName: 'Box',
    description: 'High-grade corrugated shipping boxes, rigid food containers, and tamper-evident packaging materials at competitive volume prices.',
    inspectionTier: 'Burst Pressure & Moisture Check',
  },
  {
    id: 'tile-tools',
    category: 'Precision Trade Equipment',
    title: 'Contractor Power Equipment & Measurement',
    origin: 'Germany & Japan Transit Nodes',
    destination: 'Ras Al Khaimah Central Distribution',
    leadTime: '4 - 8 Days Air & Express Freight',
    moq: '250 Units / Commercial Tier',
    compliance: 'TÜV Rheinland & GCC Conformity',
    badge: 'Certified Premium',
    iconName: 'Gauge',
    description: 'Professional-grade digital meters, calibration instrumentation, and motorized workshop equipment backed by manufacturer warranties.',
    inspectionTier: 'Individual Serial Verification',
  },
];
