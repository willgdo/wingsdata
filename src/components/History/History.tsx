import { useTranslation } from "react-i18next";
import "./History.css";

export const History = () => {
  const { t } = useTranslation();
  const empty = false;

  return (
    <section id="history">
      {empty ? (
        <div>{t("history.empty")}</div>
      ) : (
        <>
          <div className="chip-history">PR-GUM</div>
          <div className="chip-history">PR-EBJ</div>
          <div className="chip-history">PS-NJR</div>
          <div className="chip-history">PR-JRY</div>
          <div className="chip-history">PR-XBV</div>
          <div className="chip-history">7T-VPS</div>
          <div className="chip-history">N607UP</div>
          <div className="chip-history">VH-XZJ</div>
          <div className="chip-history">N844FD</div>
          <div className="chip-history">D-ABYS</div>
        </>
      )}
    </section>
  );
};
