export type AircraftResult = {
  registration: string;
  manufacturer: string;
  model: string;
  operator: string;
  year: string;
} | null;

export type AircraftSaved = {
  id: string;
  date: string;
  photo: string;
  aircraft: AircraftResult;
};
