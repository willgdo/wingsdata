import { useEffect, useState } from "react";
import "./Footer.css";

export const Footer = () => {
  const [updateDate, setUpdateDate] = useState<string>("");

  useEffect(() => {
    const base = import.meta.env.BASE_URL || "/";
    fetch(`${base}data/update_date.txt`)
      .then((res) => (res.ok ? res.text() : ""))
      .then((text) => setUpdateDate(text.trim()))
      .catch(() => setUpdateDate(""));
  }, []);

  return (
    <footer className="app-footer">
      <div className="footer-content">
        {updateDate && (
          <small className="update-date-text">
            Última sincronização com o RAB (ANAC): {updateDate}
          </small>
        )}
        <p>
          Feito por <strong>Willian</strong>
        </p>
      </div>
    </footer>
  );
};
