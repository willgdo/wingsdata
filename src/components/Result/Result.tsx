import { useTranslation } from "react-i18next";
import type { AircraftResult } from "../../pages/Home";
import "./Result.css";

type Props = {
  aircraft: AircraftResult;
};

export const Result = ({ aircraft }: Props) => {
  const { t } = useTranslation();

  if (!aircraft) return null;

  return (
    <section id="result">
      <div className="image-result">
        <img
          src="https://cdn.jetphotos.com/full/5/907826_1765980816.jpg"
          alt="result image"
        />
      </div>

      <div className="data-result">
        <h2>{aircraft.registration}</h2>

        <div className="data-row">
          <span className="label">{t("result.manufacturer")}</span>
          <span className="value">{aircraft.manufacturer}</span>
        </div>

        <div className="data-row">
          <span className="label">{t("result.operator")}</span>
          <span className="value">{aircraft.operator}</span>
        </div>

        <div className="data-row">
          <span className="label">{t("result.model")}</span>
          <span className="value">{aircraft.model}</span>
        </div>

        <div className="data-row">
          <span className="label">{t("result.year")}</span>
          <span className="value">{aircraft.year}</span>
        </div>
      </div>
    </section>
  );
};
