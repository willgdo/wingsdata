import { useState } from "react";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { RecentSearches } from "./components/RecentSearches/RecentSearches";
import { ResultCard } from "./components/ResultCard/ResultCard";
import { Footer } from "./components/Footer/Footer";
import { useRecentSearches } from "./hooks/useRecentSearches";
import { findAircraftInAnac } from "./services/anacService";
import { fetchAircraftPhoto } from "./services/photoService";
import type { AircraftData } from "./types/aircraft";
import "./App.css";

export function App() {
  const [selectedAircraft, setSelectedAircraft] = useState<AircraftData | null>(
    null,
  );
  const [isSearching, setIsSearching] = useState(false);
  const [isLoadingPhoto, setIsLoadingPhoto] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const { recentSearches, addSearch, removeSearch, clearSearches } =
    useRecentSearches();

  const handleSearch = async (rawQuery: string) => {
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
        manufacturer: anacData.manufacturer || "Desconhecido",
        year: anacData.year || "-",
        operator: anacData.operator || "Não informado",
        imageUrl: "./placeholder-plane.jpg",
      });

      // 3. Busca a foto em segundo plano
      setIsLoadingPhoto(true);
      const photo = await fetchAircraftPhoto(anacData.registration);

      // 4. Injeta a foto assim que o Planespotters responder
      setSelectedAircraft((prev) =>
        prev && prev.registration === anacData.registration
          ? {
              ...prev,
              imageUrl: photo.imageUrl,
              credits: {
                photographer: photo.photographer,
                source: photo.source,
              },
            }
          : prev,
      );
    } catch (error) {
      console.error("Erro na busca:", error);
      setNotFound(true);
    } finally {
      setIsSearching(false);
      setIsLoadingPhoto(false);
    }
  };

  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <SearchBar onSearch={handleSearch} isLoading={isSearching} />

        <RecentSearches
          items={recentSearches}
          onSelect={handleSearch}
          onRemove={removeSearch}
          onClearAll={clearSearches}
        />

        {notFound && (
          <p className="not-found-msg">
            Aeronave não localizada no Registro Aeronáutico Brasileiro (RAB).
          </p>
        )}

        {selectedAircraft && (
          <ResultCard
            aircraft={selectedAircraft}
            isLoadingPhoto={isLoadingPhoto}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
