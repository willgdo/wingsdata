export interface PhotoCredit {
  photographer: string;
  source: string;
}

export interface AircraftData {
  registration: string;
  model: string;
  manufacturer: string;
  year: number | string;
  operator: string;
  qualificationType?: string;
  imageUrl: string;
  credits?: PhotoCredit;
}
