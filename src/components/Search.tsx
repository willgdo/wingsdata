import { useTranslation } from "react-i18next";

export const Search = () => {
  const { t } = useTranslation();

  return (
    <section id="search">
      <form>
        <div className="input-wrapper">
          <div className="input-search">
            <input
              id="search-input"
              type="text"
              placeholder={t("search.placeholder")}
            />
            <button type="submit" className="search-btn" aria-label="Buscar">
              <img src="/airplane.png" alt="Buscar" className="plane-img" />
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
