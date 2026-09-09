export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  scope: string;
  highlights: {
    label: string;
    value: string;
  }[];
}

export interface TradeStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export interface Pillar {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface TradeTileItem {
  id: string;
  category: string;
  title: string;
  origin: string;
  destination: string;
  leadTime: string;
  moq: string;
  compliance: string;
  badge: string;
  iconName: string;
  description: string;
  inspectionTier: string;
}
