import { useTranslation } from "react-i18next";
import "./Footer.css";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div>
        {t("footer.rights")}
        <br />
        {t("footer.developedBy")} <strong>Willian Oliveira</strong> - v0.1.0
      </div>
    </footer>
  );
};
