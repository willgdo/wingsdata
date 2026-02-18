import { useTranslation } from "react-i18next";
import type { AircraftSaved } from "../../types/aircraft";
import "./History.css";

type HistoryProps = {
  data: AircraftSaved[];
  onClear: () => void;
};

export const History = ({ data, onClear }: HistoryProps) => {
  const { t } = useTranslation();
  const empty = data.length === 0;

  return (
    <section id="history">
      {empty ? (
        <div>{t("history.empty")}</div>
      ) : (
        <>
          {data.map((item) => (
            <div key={item.id} className="chip-history">
              {item.aircraft?.registration}
            </div>
          ))}
          <button onClick={onClear}>Limpar</button>
        </>
      )}
    </section>
  );
};
