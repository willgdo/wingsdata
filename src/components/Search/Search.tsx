import { useTranslation } from "react-i18next";
import "./Search.css";

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
