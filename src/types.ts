/**
 * Types and Interfaces for Quads Gym Premium Web Experience
 */

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  role: string;
  age: string;
  yearsOfTraining: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  brand: string;
  category: "Legs" | "Chest" | "Back" | "Free Weights" | "Rare Vintage";
  description: string;
  quantity: string;
  weightRange?: string;
  notableDetail: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  badge: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
  objectionBuster: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "Access" | "Equipment" | "Policies" | "History";
}
