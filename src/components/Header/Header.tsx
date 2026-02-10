import { useTranslation } from "react-i18next";
import "./Header.css";

type Language = "pt" | "en";

export const Header = () => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language as Language;

  const handleLanguageChange = (lang: Language) => {
    if (lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <header>
      <div>
        <h1>.:WingsData:.</h1>

        <div className="lang-select-wrapper">
          <nav>
            <ul>
              <li
                className={currentLang === "pt" ? "lang-selected" : ""}
                onClick={() => handleLanguageChange("pt")}
              >
                PT
              </li>

              <li
                className={currentLang === "en" ? "lang-selected" : ""}
                onClick={() => handleLanguageChange("en")}
              >
                EN
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
