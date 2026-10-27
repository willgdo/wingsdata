import { useState } from "react";
import { Loader } from "../Loader/Loader";
import { NoPhotoFallback } from "../NoPhotoFallback/NoPhotoFallback";
import type { AircraftData } from "../../types/aircraft";
import "./ResultCard.css";

interface ResultCardProps {
  aircraft: AircraftData;
  isLoadingPhoto?: boolean;
}

export const ResultCard = ({
  aircraft,
  isLoadingPhoto = false,
}: ResultCardProps) => {
  const [imageError, setImageError] = useState(false);

  const cleanReg = aircraft.registration.replace("-", "").toUpperCase();
  const regWithHyphen = aircraft.registration.includes("-")
    ? aircraft.registration.toUpperCase()
    : `${aircraft.registration.slice(0, 2)}-${aircraft.registration.slice(2)}`.toUpperCase();

  const hasPhoto = Boolean(aircraft.imageUrl) && !imageError;
  const owners = (aircraft.proprietary ?? "").split(",");
  const operators = aircraft.operator.split(",");

  return (
    <article className="result-card">
      <div className="card-media">
        {isLoadingPhoto ? (
          <div className="photo-loader-container">
            <Loader />
          </div>
        ) : hasPhoto ? (
          <>
            <img
              src={aircraft.imageUrl || undefined}
              alt={`${aircraft.model} ${regWithHyphen}`}
              className="aircraft-photo"
              onError={() => setImageError(true)}
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
          </>
        ) : (
          <NoPhotoFallback registration={regWithHyphen} />
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
            <dt>Proprietário</dt>
            <dd>
              {owners.map((owner) => (
                <>
                  <span key={owner}>
                    {owners.length > 1 ? "•" : ""} {owner}
                  </span>
                  <br />
                </>
              ))}
            </dd>
          </div>
          <div className="spec-item">
            <dt>Operador</dt>
            <dd>
              {operators.map((operator) => (
                <>
                  <span key={operator}>
                    {operators.length > 1 ? "•" : ""} {operator}
                  </span>
                  <br />
                </>
              ))}
            </dd>
          </div>
          <div className="spec-item">
            <dt>Ano de Fabricação</dt>
            <dd>{aircraft.year}</dd>
          </div>
          <div className="spec-item">
            <dt>Número de Série</dt>
            <dd>{aircraft.nmserie}</dd>
          </div>
          <div className="spec-item">
            <dt>Tipo</dt>
            <dd>
              {aircraft.tppouso} {" - "}
              {aircraft.tpmotor}
            </dd>
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
