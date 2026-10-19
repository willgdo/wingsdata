export interface PhotoCredit {
  photographer: string | null;
  source: string;
}

export interface AircraftData {
  registration: string;
  model: string;
  manufacturer: string;
  year: number | string;
  operator: string;
  imageUrl?: string | null;
  credits?: PhotoCredit | null;
}
