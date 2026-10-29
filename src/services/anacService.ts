import {
  sanitizeRegistration,
  formatRegistration,
} from "../utils/registration";
import type { AircraftData } from "../types/aircraft";

// Estrutura exata dos campos como vêm no arquivo dados_aeronaves.json da ANAC
interface AnacRawAircraft {
  MARCA: string; // Ex: "PRCRC"
  DSMODELO?: string; // Ex: "G280"
  NMFABRICANTE?: string; // Ex: "GULFSTREAM AEROSPACE"
  NRANOFABRICACAO?: string; // Ex: "2023"
  CDTIPOICAO?: string; // Ex: "C152"
  PROPRIETARIOSJSON?: string; // Ex: "[{"NOME":"NATUREZA PRODUCOES ARTISTICAS LTDA"}]"
  OPERADORESJSON?: string; // Ex: "NATUREZA PRODUCOES ARTISTICAS..."
  NRSERIE?: string; // Ex: "12345"
  TPMOTOR?: string; // Ex: "TURBOFAN"
  TPPOUSO?: string; // Ex: "POUSO CONVENCIONAL"
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

  function parseOperators(value?: string): Array<{ NOME: string }> {
    if (!value) {
      return [];
    }

    try {
      return JSON.parse(value) as Array<{ NOME: string }>;
    } catch {
      const normalized = value.replaceAll('/""', '"').replaceAll('""/', '"');

      try {
        return JSON.parse(normalized) as Array<{ NOME: string }>;
      } catch (error) {
        console.error("OPERADORESJSON inválido:", value, error);
        return [];
      }
    }
  }

  const operatorNames = parseOperators(raw.OPERADORESJSON).map((x) => x.NOME);

  const proprietaryNames = parseOperators(raw.PROPRIETARIOSJSON).map(
    (x) => x.NOME,
  );

  console.log("raw", raw);

  return {
    registration: formatRegistration(raw.MARCA),
    model: raw.DSMODELO || "Não encontrado",
    manufacturer: raw.NMFABRICANTE || "Não encontrado",
    tipoIcao: raw.CDTIPOICAO || "Não encontrado",
    year: raw.NRANOFABRICACAO || "Não encontrado",
    operator: operatorNames.length
      ? operatorNames.join(", ")
      : "Não encontrado",
    proprietary: proprietaryNames.length
      ? proprietaryNames.join(", ")
      : "Não encontrado",
    nmserie: raw.NRSERIE || "Não encontrado",
    tpmotor: raw.TPMOTOR || "Não encontrado",
    tppouso: raw.TPPOUSO || "Não encontrado",
  };
}
