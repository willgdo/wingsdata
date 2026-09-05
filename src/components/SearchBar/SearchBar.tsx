import { useState } from "react";
import "./SearchBar.css";

interface SearchBarProps {
  onSearch: (registration: string) => void;
  isLoading?: boolean;
}

export const SearchBar = ({ onSearch, isLoading = false }: SearchBarProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanValue = value.trim().toUpperCase();
    if (!cleanValue) return;
    onSearch(cleanValue);
  };

  return (
    <section className="search-section">
      <p className="search-message">Digite o registro da aeronave</p>

      <form className="search-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            id="registration"
            name="registration"
            value={value}
            onChange={(e) => setValue(e.target.value.toUpperCase())}
            placeholder="EX: PR-CRC"
            maxLength={5}
          />
          <button
            type="submit"
            className="search-btn"
            aria-label="Buscar aeronave"
            disabled={isLoading}
          >
            <img src="./btn-airplane.png" alt="" aria-hidden="true" />
          </button>
        </div>
      </form>
    </section>
  );
};
