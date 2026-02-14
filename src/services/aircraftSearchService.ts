import data from "../../data/data.json";

type Aircraft = {
  MARCA: string;
  NMFABRICANTE: string;
  DSMODELO: string;
  NMOPERADOR: string;
  NRANOFABRICACAO: string;
};

const aircraftIndex: Record<string, Aircraft> = (data as Aircraft[]).reduce(
  (acc: Record<string, Aircraft>, aircraft: Aircraft) => {
    acc[aircraft.MARCA] = aircraft;
    return acc;
  },
  {},
);

export function findAircraftByRegistration(registration: string) {
  const normalized = registration.toUpperCase().replace("-", "");

  const aircraft = aircraftIndex[normalized];

  if (!aircraft) return null;

  return {
    registration: aircraft.MARCA,
    manufacturer: aircraft.NMFABRICANTE,
    model: aircraft.DSMODELO,
    operator: aircraft.NMOPERADOR,
    year: aircraft.NRANOFABRICACAO,
  };
}
