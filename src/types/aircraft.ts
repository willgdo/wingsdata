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
  imageUrl: string;
  credits?: PhotoCredit;
}
