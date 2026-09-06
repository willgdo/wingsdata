import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "@wingsdata:recent_searches";
const MAX_ITEMS = 5;

export function useRecentSearches() {
  // Inicializa o estado lendo direto do localStorage com lazy initialization
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed.slice(0, MAX_ITEMS) : [];
    } catch (error) {
      console.error("Erro ao carregar buscas recentes:", error);
      return [];
    }
  });

  // Salva no localStorage sempre que a lista mudar
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(recentSearches));
    } catch (error) {
      console.error("Erro ao salvar buscas recentes:", error);
    }
  }, [recentSearches]);

  // Adiciona um novo prefixo no topo, remove duplicatas e limita em 5
  const addSearch = useCallback((registration: string) => {
    const cleanReg = registration.trim().toUpperCase();
    if (!cleanReg) return;

    setRecentSearches((prev) => {
      const filtered = prev.filter((item) => item !== cleanReg);
      return [cleanReg, ...filtered].slice(0, MAX_ITEMS);
    });
  }, []);

  // Remove um item específico pelo 'X'
  const removeSearch = useCallback((registration: string) => {
    setRecentSearches((prev) => prev.filter((item) => item !== registration));
  }, []);

  // Limpa todo o histórico
  const clearSearches = useCallback(() => {
    setRecentSearches([]);
  }, []);

  return {
    recentSearches,
    addSearch,
    removeSearch,
    clearSearches,
  };
}
