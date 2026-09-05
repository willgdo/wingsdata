import { useState } from "react";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ResultCard } from "./components/ResultCard/ResultCard";
import type { AircraftData } from "./types/aircraft";
import "./App.css";

// Dados mockados temporários para validar o layout
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

  const handleSearch = (registration: string) => {
    console.log("Buscar prefixo:", registration);
  };

  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <SearchBar onSearch={handleSearch} />
        {selectedAircraft && <ResultCard aircraft={selectedAircraft} />}
      </main>
    </div>
  );
}

export default App;
