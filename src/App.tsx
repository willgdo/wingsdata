import { useEffect, useState, useCallback } from "react";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { RecentSearches } from "./components/RecentSearches/RecentSearches";
import { ResultCard } from "./components/ResultCard/ResultCard";
import { Footer } from "./components/Footer/Footer";
import { AboutModal } from "./components/AboutModal/AboutModal";
import { useRecentSearches } from "./hooks/useRecentSearches";
import { findAircraftInAnac } from "./services/anacService";
import { fetchAircraftPhoto } from "./services/photoService";
import type { AircraftData } from "./types/aircraft";
import "./App.css";

export function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [selectedAircraft, setSelectedAircraft] = useState<AircraftData | null>(
    null,
  );
  const [isSearching, setIsSearching] = useState(false);
  const [isLoadingPhoto, setIsLoadingPhoto] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const { recentSearches, addSearch, removeSearch, clearSearches } =
    useRecentSearches();

  const handleSearch = useCallback(
    async (rawQuery: string, updateUrlHistory = true) => {
      setIsSearching(true);
      setNotFound(false);

      try {
        // 1. Busca imediata no RAB (instantânea via Map)
        const anacData = await findAircraftInAnac(rawQuery);

        if (!anacData || !anacData.registration) {
          setNotFound(true);
          setSelectedAircraft(null);
          return;
        }

        addSearch(anacData.registration);

        // 2. Renderiza dados técnicos IMEDIATAMENTE (sem imagem ainda)
        setSelectedAircraft({
          registration: anacData.registration,
          model: anacData.model || "Desconhecido",
          proprietary: anacData.proprietary || "Não informado",
          manufacturer: anacData.manufacturer || "Desconhecido",
          year: anacData.year || "-",
          tpmotor: anacData.tpmotor || "Desconhecido",
          tppouso: anacData.tppouso || "Desconhecido",
          nmserie: anacData.nmserie || "Desconhecido",
          operator: anacData.operator || "Não informado",
          imageUrl: null,
        });

        // Atualiza a URL apenas se não for navegação de histórico (voltar/avançar)
        if (updateUrlHistory) {
          const cleanReg = anacData.registration.replace("-", "").toUpperCase();
          const newUrl = `${window.location.pathname}?reg=${cleanReg}`;
          window.history.pushState({ reg: cleanReg }, "", newUrl);
        }

        // 3. Busca a foto em segundo plano
        setIsLoadingPhoto(true);
        const photo = await fetchAircraftPhoto(anacData.registration);

        // 4. Injeta a foto assim que o Planespotters responder
        setSelectedAircraft((prev): AircraftData | null => {
          if (!prev || prev.registration !== anacData.registration) {
            return prev;
          }

          return {
            ...prev,
            imageUrl: photo.imageUrl,
            credits: {
              photographer: photo.photographer,
              source: photo.source,
            },
          };
        });
      } catch (error) {
        console.error("Erro na busca:", error);
        setNotFound(true);
      } finally {
        setIsSearching(false);
        setIsLoadingPhoto(false);
      }
    },
    [addSearch],
  );

  const handleReset = () => {
    setSelectedAircraft(null);
    setNotFound(false);

    // Limpa o parâmetro da URL mantendo apenas o pathname (ex: /wingsdata/)
    const cleanUrl = window.location.pathname;
    window.history.pushState({}, "", cleanUrl);
  };

  // Sincronização inicial da URL e escuta das setas Voltar/Avançar
  useEffect(() => {
    const handleLocationChange = () => {
      const params = new URLSearchParams(window.location.search);
      const regFromUrl = params.get("reg");

      if (regFromUrl) {
        handleSearch(regFromUrl, false);
      } else {
        setSelectedAircraft(null);
        setNotFound(false);
      }
    };

    // Lê na primeira carga
    handleLocationChange();

    // Ouve as setas de voltar e avançar do navegador
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, [handleSearch]);

  const hasContent = Boolean(selectedAircraft || notFound);

  return (
    <div className="app-container">
      <Header onOpenAbout={() => setIsAboutOpen(true)} onReset={handleReset} />

      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />

      <main className="app-main">
        <div
          className={`search-section ${!hasContent ? "is-centered" : "is-active"}`}
        >
          <SearchBar onSearch={handleSearch} isLoading={isSearching} />

          <RecentSearches
            items={recentSearches}
            onSelect={handleSearch}
            onRemove={removeSearch}
            onClearAll={clearSearches}
          />
        </div>

        {notFound && (
          <div className="results-wrapper">
            <p className="not-found-msg">
              Aeronave não localizada no Registro Aeronáutico Brasileiro (RAB).
            </p>
          </div>
        )}

        {selectedAircraft && (
          <div className="results-wrapper">
            <ResultCard
              aircraft={selectedAircraft}
              isLoadingPhoto={isLoadingPhoto}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
