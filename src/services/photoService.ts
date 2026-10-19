import { sanitizeRegistration } from "../utils/registration";

export interface PhotoResult {
  imageUrl: string | null;
  photographer: string | null;
  source: string;
}

export async function fetchAircraftPhoto(
  registration: string,
): Promise<PhotoResult> {
  const cleanReg = sanitizeRegistration(registration);
  const endpoint = `https://api.planespotters.net/pub/photos/reg/${encodeURIComponent(cleanReg)}`;

  try {
    const res = await fetch(endpoint);
    if (!res.ok) {
      return {
        imageUrl: null,
        photographer: null,
        source: "Planespotters.net",
      };
    }

    const data = await res.json();

    if (data.photos && data.photos.length > 0) {
      const best = data.photos[0];
      return {
        imageUrl: best.thumbnail_large?.src || best.thumbnail?.src || null,
        photographer: best.photographer || "Planespotters Member",
        source: "Planespotters.net",
      };
    }

    return { imageUrl: null, photographer: null, source: "Planespotters.net" };
  } catch {
    return { imageUrl: null, photographer: null, source: "Planespotters.net" };
  }
}
