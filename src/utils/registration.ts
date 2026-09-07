// Remove traços, espaços e converte para maiúsculo
export function sanitizeRegistration(raw: string): string {
  return raw.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
}

// Formata com hífen padrão brasileiro (ex: PRCRC -> PR-CRC)
export function formatRegistration(cleanReg: string): string {
  if (cleanReg.length >= 4 && !cleanReg.includes("-")) {
    return `${cleanReg.slice(0, 2)}-${cleanReg.slice(2)}`;
  }
  return cleanReg;
}
