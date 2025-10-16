// lib/types.ts

// Defines the structure for a single airport object
export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
}

// Defines the structure for a single flight deal
export interface Deal {
  id: string;
  from: string;
  to: string;
  airline: string;
  price: number;
  originalPrice: number;
  savings: number;
  type: 'anomaly' | 'hot' | 'default';
  confidence: number;
  departureDate: string;
  returnDate: string;
  detectedAt: string;
  affiliateLink: string;
  isNew?: boolean; // Optional flag for pulsing animation
}

// Defines the structure for different currencies
export interface Currency {
  symbol: string;
  rate: number; // Rate relative to USD
}

export type Currencies = {
  [key: string]: Currency;
};