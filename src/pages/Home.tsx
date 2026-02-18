import { useState } from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { History } from "../components/History/History";
import { Result } from "../components/Result/Result";
import { Search } from "../components/Search/Search";
import type { AircraftResult, AircraftSaved } from "../types/aircraft";

const Home = () => {
  const [aircraft, setAircraft] = useState<AircraftResult>(null);
  const [aircraftSaved, setAircraftSaved] = useState<AircraftSaved[]>(() => {
    const stored = localStorage.getItem("aircrafts");
    return stored ? JSON.parse(stored) : [];
  });

  const STORAGE_KEY = "aircrafts";

  function saveAircraft(aircraft: AircraftResult) {
    if (!aircraft) return;

    const newAircraft: AircraftSaved = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      photo: "X",
      aircraft,
    };

    const updated = [newAircraft, ...aircraftSaved];

    setAircraftSaved(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  function handleSearch(result: AircraftResult) {
    setAircraft(result);
    saveAircraft(result);
  }

  function clearHistory() {
    setAircraftSaved([]);
    localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <>
      <Header />
      <Search onSearch={handleSearch} />
      <Result aircraft={aircraft} />
      <History data={aircraftSaved} onClear={clearHistory} />
      <Footer />
    </>
  );
};

export default Home;
