import { useState } from "react";
import "./App.css";

export function App() {
  const [registration, setRegistration] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!registration.trim()) return;

    console.log("Searching for aircraft...");
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>WingsData</h1>
      </header>

      <main className="app-main">
        <section className="search-section">
          <p className="search-message">Digite o registro da aeronave</p>

          <form className="search-form" onSubmit={handleSearch}>
            <div className="input-group">
              <input
                type="text"
                id="registration"
                name="registration"
                value={registration}
                onChange={(e) => setRegistration(e.target.value.toUpperCase())}
                placeholder="EX: PR-CRC"
                maxLength={5}
              />
              <button
                type="submit"
                className="search-btn"
                aria-label="Buscar aeronave"
              >
                <img src="./btn-airplane.png" alt="" aria-hidden="true" />
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
