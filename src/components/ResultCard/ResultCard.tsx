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
            <dt>Fabricante</dt>
            <dd>{aircraft.manufacturer}</dd>
          </div>
          <div className="spec-item">
            <dt>Modelo</dt>
            <dd>{aircraft.model}</dd>
          </div>
          <div className="spec-item">
            <dt>Ano de Fabricação</dt>
            <dd>{aircraft.year}</dd>
          </div>
          <div className="spec-item">
            <dt>Operador</dt>
            <dd>{aircraft.operator || "Não informado"}</dd>
          </div>
        </dl>
      </div>

      <div className="plane-loader">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#ffffff">
            <circle cx="66.5" cy="29.9" r="4.4" opacity="0.90" />
            <circle cx="57.7" cy="35.3" r="4.0" opacity="0.85" />
            <circle cx="49.8" cy="42.0" r="3.7" opacity="0.80" />
            <circle cx="42.9" cy="49.8" r="3.4" opacity="0.75" />
            <circle cx="37.2" cy="58.6" r="3.1" opacity="0.70" />
            <circle cx="32.7" cy="68.2" r="2.8" opacity="0.65" />
            <circle cx="29.5" cy="78.3" r="2.6" opacity="0.60" />
            <circle cx="27.6" cy="88.9" r="2.4" opacity="0.55" />
            <circle cx="27.1" cy="99.7" r="2.2" opacity="0.50" />
            <circle cx="28.0" cy="110.5" r="2.0" opacity="0.45" />
            <circle cx="30.3" cy="121.1" r="1.8" opacity="0.40" />
            <circle cx="33.9" cy="131.3" r="1.6" opacity="0.36" />
            <circle cx="38.9" cy="140.8" r="1.5" opacity="0.32" />
            <circle cx="45.0" cy="149.5" r="1.4" opacity="0.28" />
            <circle cx="52.2" cy="157.1" r="1.3" opacity="0.24" />
            <circle cx="60.4" cy="163.5" r="1.2" opacity="0.20" />
            <circle cx="69.4" cy="168.6" r="1.1" opacity="0.16" />
            <circle cx="79.1" cy="172.2" r="1.0" opacity="0.12" />
            <circle cx="89.3" cy="174.4" r="0.9" opacity="0.08" />
            <circle cx="99.8" cy="175.0" r="0.8" opacity="0.05" />
          </g>

          <path
            d="M 115 22 
         L 104 18 
         L 99 7 
         L 95 7 
         L 97 18 
         L 84 19 
         L 80 14 
         L 77 14 
         L 78 22 
         L 77 30 
         L 80 30 
         L 84 25 
         L 97 26 
         L 95 37 
         L 99 37 
         L 104 26 
         Z"
            fill="#ffffff"
          />
        </svg>
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
            href={`https://www.planespotters.net/search?q=${cleanReg.toLowerCase()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn planespotters"
          >
            Planespotters ↗
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
