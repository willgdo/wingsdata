import { useState } from "react";
import { useTranslation } from "react-i18next";
import { findAircraftByRegistration } from "../../services/aircraftSearchService";
import type { AircraftResult } from "../../types/aircraft";
import "./Search.css";

type Props = {
  onSearch: (data: AircraftResult) => void;
};

export const Search = ({ onSearch }: Props) => {
  const { t } = useTranslation();
  const [registration, setRegistration] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = findAircraftByRegistration(registration);
    onSearch(result);
  };

  return (
    <section id="search">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <div className="input-search">
            <input
              id="search-input"
              type="text"
              value={registration}
              onChange={(e) => setRegistration(e.target.value)}
              placeholder={t("search.placeholder")}
            />
            <button
              type="submit"
              className="search-btn"
              aria-label={t("search.button")}
            >
              <img
                src="./btn-airplane.png"
                alt={t("search.button")}
                className="plane-img"
              />
            </button>
          </div>
          <div>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">{t("search.checkbox")}</label>
          </div>
        </div>
      </form>
    </section>
  );
};
