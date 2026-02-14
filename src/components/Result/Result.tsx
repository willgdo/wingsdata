import { useTranslation } from "react-i18next";
import "./Result.css";

export const Result = () => {
  const { t } = useTranslation();
  const imageUrl = "https://cdn.jetphotos.com/full/5/907826_1765980816.jpg";

  return (
    <section id="result">
      <div className="image-result">
        <img src={imageUrl} alt="result image" />
      </div>
      <div className="data-result">
        <h2>PR-XBV</h2>
        <div className="data-row">
          <span className="label">{t("result.manufacturer")}</span>
          <span className="value">Airbus</span>
        </div>

        <div className="data-row">
          <span className="label">{t("result.operator")}</span>
          <span className="value">LATAM Airlines</span>
        </div>

        <div className="data-row">
          <span className="label">{t("result.model")}</span>
          <span className="value">A320-271N</span>
        </div>

        <div className="data-row">
          <span className="label">{t("result.year")}</span>
          <span className="value">2006</span>
        </div>
      </div>
    </section>
  );
};
