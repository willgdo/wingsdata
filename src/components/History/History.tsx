import { useTranslation } from "react-i18next";
import "./History.css";

export const History = () => {
  const { t } = useTranslation();

  return (
    <section id="history">
      <div>{t("history.empty")}</div>
    </section>
  );
};
