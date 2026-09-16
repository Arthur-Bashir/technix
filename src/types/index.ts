export interface ServiceItem {
  id: string;
  title: string;
  category: 'digital' | 'cloud' | 'it-support' | 'data' | 'training' | 'consultancy';
  tagline: string;
  description: string;
  startingPrice?: string;
  pricingPeriod?: string;
  highlights: string[];
  iconName: string;
  popular?: boolean;
}

export interface WebsitePackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period?: string;
  recommendedFor: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  whatsAppMessage: string;
}

export interface CarePackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  workstations: string;
  features: string[];
  popular?: boolean;
  sla: string;
}

export interface CommercialProduct {
  id: string;
  name: string;
  tagline: string;
  explanation: string;
  whoItIsFor: string;
  mainBenefits: string[];
  whatsIncluded: string[];
  startingPrice?: string;
  pricingNote?: string;
  badge?: string;
  ctaText: string;
  targetSection: string;
  whatsAppMessage: string;
  crossSells: { id: string; name: string; reason: string }[];
}

export interface Course {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  schedule: string;
  fee: string;
  summary: string;
  outcomes: string[];
  upcomingDate: string;
  category: 'Business & Office' | 'Data & Analytics' | 'Development' | 'IT & Security';
}

export interface CaseStudy {
  id: string;
  client: string;
  clientCategory: 'NGO & Development' | 'Health & Relief' | 'Commercial Business' | 'Education';
  title: string;
  problem: string;
  solution: string;
  result: string;
  techHighlight: string;
  impactMetrics: { label: string; value: string }[];
}

export interface CustomerType {
  id: string;
  title: string;
  iconName: string;
  subtitle: string;
  painPoints: string[];
  recommendedSolutions: string[];
  cta: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organisation: string;
  location: string;
  service: string;
}

export interface HealthCheckAnswer {
  questionId: number;
  selectedOption: number;
}
