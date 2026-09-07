import {
  sanitizeRegistration,
  formatRegistration,
} from "../utils/registration";
import type { AircraftData } from "../types/aircraft";

// Estrutura exata dos campos como vêm no arquivo dados_aeronaves.json da ANAC
interface AnacRawAircraft {
  MARCA: string; // Ex: "PRCRC"
  DS_MODELO?: string; // Ex: "G280"
  NM_FABRICANTE?: string; // Ex: "GULFSTREAM AEROSPACE"
  NR_ANO_FABRICACAO?: string; // Ex: "2023"
  NM_OPERADOR?: string; // Ex: "NATUREZA PRODUCOES ARTISTICAS..."
  DS_TIPO_HABILITACAO?: string; // Ex: "MLTE"
  DS_MOTIVO_CANCELAMENTO?: string;
  CD_INTERDICAO?: string;
}

// Cache em memória para busca instantânea O(1)
let aircraftIndexMap: Map<string, AnacRawAircraft> | null = null;
let loadPromise: Promise<Map<string, AnacRawAircraft>> | null = null;

async function loadAnacDatabase(): Promise<Map<string, AnacRawAircraft>> {
  if (aircraftIndexMap) return aircraftIndexMap;

  if (!loadPromise) {
    loadPromise = (async () => {
      // Busca o JSON da pasta public
      const base = import.meta.env.BASE_URL || "/";
      const response = await fetch(`${base}data/data.json`);

      if (!response.ok) {
        throw new Error("Falha ao carregar banco de dados da ANAC");
      }

      const rawData = await response.json();

      // O JSON da ANAC pode vir como um array direto ou encapsulado em objeto
      const list: AnacRawAircraft[] = Array.isArray(rawData)
        ? rawData
        : rawData.data || rawData.aeronaves || [];

      const map = new Map<string, AnacRawAircraft>();

      for (const item of list) {
        if (item.MARCA) {
          map.set(sanitizeRegistration(item.MARCA), item);
        }
      }

      aircraftIndexMap = map;
      return map;
    })();
  }

  return loadPromise;
}

export async function findAircraftInAnac(
  query: string,
): Promise<Partial<AircraftData> | null> {
  const cleanQuery = sanitizeRegistration(query);
  if (!cleanQuery) return null;

  const map = await loadAnacDatabase();
  const raw = map.get(cleanQuery);

  if (!raw) return null;

  return {
    registration: formatRegistration(raw.MARCA),
    model: raw.DS_MODELO || "Modelo não informado",
    manufacturer: raw.NM_FABRICANTE || "Fabricante não informado",
    year: raw.NR_ANO_FABRICACAO || "Ano não informado",
    operator: raw.NM_OPERADOR || "Não informado / Privado",
    qualificationType: raw.DS_TIPO_HABILITACAO || "MNTE",
  };
}
