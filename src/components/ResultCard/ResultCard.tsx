import type { AircraftData } from "../../types/aircraft";
import "./ResultCard.css";

interface ResultCardProps {
  aircraft: AircraftData;
}

export const ResultCard = ({ aircraft }: ResultCardProps) => {
  const cleanReg = aircraft.registration.replace("-", "").toUpperCase();
  const regWithHyphen = aircraft.registration.includes("-")
    ? aircraft.registration.toUpperCase()
    : `${aircraft.registration.slice(0, 2)}-${aircraft.registration.slice(2)}`.toUpperCase();

  return (
    <article className="result-card">
      <div className="card-media">
        <img
          src={aircraft.imageUrl}
          alt={`${aircraft.model} ${regWithHyphen}`}
          className="aircraft-photo"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "./placeholder-plane.jpg";
          }}
        />
        {aircraft.credits && (
          <div className="photo-credit-badge">
            <span>
              Foto: <strong>{aircraft.credits.photographer}</strong>
            </span>
            <span className="dot">•</span>
            <span>{aircraft.credits.source}</span>
          </div>
        )}
      </div>

      <div className="card-body">
        <header className="aircraft-title">
          <h2>{regWithHyphen}</h2>
          <span className="aircraft-model">{aircraft.model}</span>
        </header>

        <dl className="aircraft-specs-grid">
          <div className="spec-item">
            <dt>Ano de Fabricação</dt>
            <dd>{aircraft.year}</dd>
          </div>
          <div className="spec-item">
            <dt>Operador / Proprietário</dt>
            <dd>{aircraft.operator || "Não informado"}</dd>
          </div>
          <div className="spec-item">
            <dt>Fabricante</dt>
            <dd>{aircraft.manufacturer}</dd>
          </div>
          <div className="spec-item">
            <dt>Tipo de Habilitação</dt>
            <dd>{aircraft.qualificationType || "MNTE / IFR"}</dd>
          </div>
        </dl>
      </div>

      <footer className="card-footer">
        <div className="source-meta">
          <small>
            Base cadastral: <strong>RAB ANAC</strong>
          </small>
        </div>

        <nav className="quick-actions" aria-label="Links externos">
          <a
            href={`https://www.flightradar24.com/data/aircraft/${cleanReg.toLowerCase()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn fr24"
          >
            Flightradar24 ↗
          </a>
          <a
            href={`https://www.jetphotos.com/registration/${regWithHyphen}`}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn jetphotos"
          >
            JetPhotos ↗
          </a>
          <a
            href="https://sistemas.anac.gov.br/aeronaves/cons_rab.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn anac"
          >
            Consulta RAB ↗
          </a>
        </nav>
      </footer>
    </article>
  );
};
