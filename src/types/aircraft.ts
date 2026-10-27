export interface PhotoCredit {
  photographer: string | null;
  source: string;
}

export interface AircraftData {
  registration: string;
  model: string;
  manufacturer: string;
  year: number | string;
  proprietary?: string;
  operator: string;
  nmserie?: string;
  tppouso?: string;
  tpmotor?: string;
  imageUrl?: string | null;
  credits?: PhotoCredit | null;
}
