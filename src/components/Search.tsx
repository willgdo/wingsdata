import { useTranslation } from "react-i18next";

export const Search = () => {
  const { t } = useTranslation();

  return (
    <section id="search">
      <form>
        <div className="input-wrapper">
          <input
            id="search-input"
            type="text"
            placeholder={t("search.placeholder")}
          />
          <div>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">{t("search.estrangeira")}</label>
          </div>
        </div>
        <button type="submit">Search</button>
      </form>
    </section>
  );
};
