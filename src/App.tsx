import { useState } from "react";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { RecentSearches } from "./components/RecentSearches/RecentSearches";
import { ResultCard } from "./components/ResultCard/ResultCard";
import { useRecentSearches } from "./hooks/useRecentSearches";
import type { AircraftData } from "./types/aircraft";
import "./App.css";

const MOCK_AIRCRAFT: AircraftData = {
  registration: "PR-CRC",
  model: "Gulfstream G280",
  manufacturer: "Gulfstream Aerospace",
  year: 2023,
  operator: "NATUREZA PRODUÇÕES ARTÍSTICAS E PUBLICIDADE S/S LTDA",
  qualificationType: "MLTE / IFR",
  imageUrl: "./prcrc.jpg",
  credits: {
    photographer: "Mojav",
    source: "JetPhotos",
  },
};

export function App() {
  const [selectedAircraft, setSelectedAircraft] = useState<AircraftData | null>(
    MOCK_AIRCRAFT,
  );

  // Consome a persistência do localStorage
  const { recentSearches, addSearch, removeSearch, clearSearches } =
    useRecentSearches();

  const handleSearch = (registration: string) => {
    // 1. Registra no histórico do localStorage
    addSearch(registration);

    // 2. Temporariamente mantém o mock (logo integraremos com os dados reais da ANAC)
    console.log("Pesquisar:", registration);
  };

  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <SearchBar onSearch={handleSearch} />

        <RecentSearches
          items={recentSearches}
          onSelect={handleSearch}
          onRemove={removeSearch}
          onClearAll={clearSearches}
        />

        {selectedAircraft && <ResultCard aircraft={selectedAircraft} />}
      </main>
    </div>
  );
}

export default App;
