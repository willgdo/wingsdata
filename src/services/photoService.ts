import { sanitizeRegistration } from "../utils/registration";

interface PhotoResult {
  imageUrl: string;
  photographer: string;
  source: string;
}

export async function fetchAircraftPhoto(
  registration: string,
): Promise<PhotoResult> {
  const cleanReg = sanitizeRegistration(registration);
  const endpoint = `https://api.planespotters.net/pub/photos/reg/${encodeURIComponent(cleanReg)}`;
  const defaultPlaceholder = "./placeholder-plane.jpg";

  try {
    const res = await fetch(endpoint);
    if (!res.ok) {
      return {
        imageUrl: defaultPlaceholder,
        photographer: "Autor desconhecido",
        source: "Registro Local",
      };
    }

    const data = await res.json();

    if (data.photos && data.photos.length > 0) {
      const best = data.photos[0];
      return {
        imageUrl:
          best.thumbnail_large?.src ||
          best.thumbnail?.src ||
          defaultPlaceholder,
        photographer: best.photographer || "Planespotters Member",
        source: "Planespotters.net",
      };
    }

    return {
      imageUrl: defaultPlaceholder,
      photographer: "Sem foto cadastrada",
      source: "Planespotters.net",
    };
  } catch {
    return {
      imageUrl: defaultPlaceholder,
      photographer: "Desconhecido",
      source: "Local",
    };
  }
}
