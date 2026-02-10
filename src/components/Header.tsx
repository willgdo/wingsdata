import { useState } from "react";

type Language = "PT" | "EN";

export const Header = () => {
  const [lang, setLang] = useState<Language>("PT");
  return (
    <header>
      <div>
        <h1>Wings Data</h1>
        <div className="lang-select-wrapper">
          <nav>
            <ul>
              <li
                className={`${lang === "PT" ? "lang-selected" : ""}`}
                onClick={() => setLang("PT")}
              >
                PT
              </li>
              <li
                className={`${lang === "EN" ? "lang-selected" : ""}`}
                onClick={() => setLang("EN")}
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
