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
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const { recentSearches, addSearch, removeSearch, clearSearches } =
    useRecentSearches();

  const handleSearch = async (rawQuery: string) => {
    setLoading(true);
    setNotFound(false);

    try {
      // 1. Consulta no Map da ANAC
      const anacData = await findAircraftInAnac(rawQuery);

      if (!anacData || !anacData.registration) {
        setNotFound(true);
        setSelectedAircraft(null);
        return;
      }

      // Adiciona aos recentes somente se a aeronave realmente existir no RAB
      addSearch(anacData.registration);

      // 2. Estado inicial com placeholder rápido
      const currentData: AircraftData = {
        registration: anacData.registration,
        model: anacData.model || "Desconhecido",
        manufacturer: anacData.manufacturer || "Desconhecido",
        year: anacData.year || "-",
        operator: anacData.operator || "Não informado",
        imageUrl: "./placeholder-plane.jpg",
      };
      setSelectedAircraft(currentData);

      // 3. Busca a foto no Planespotters em segundo plano
      const photo = await fetchAircraftPhoto(anacData.registration);
      setSelectedAircraft((prev) =>
        prev
          ? {
              ...prev,
              imageUrl: photo.imageUrl,
              credits: {
                photographer: photo.photographer,
                source: photo.source,
              },
            }
          : null,
      );
    } catch (error) {
      console.error("Erro na busca:", error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <SearchBar onSearch={handleSearch} isLoading={loading} />

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

        {selectedAircraft && <ResultCard aircraft={selectedAircraft} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
