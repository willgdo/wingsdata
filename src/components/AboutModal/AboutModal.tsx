import { useEffect } from "react";
import "./AboutModal.css";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  // Fecha com a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // trava o scroll do fundo
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          ✕
        </button>

        <header className="modal-header">
          <span className="modal-badge">INFO // WINGSDATA</span>
        </header>

        <div className="modal-body">
          <p>
            O <strong>WingsData</strong> foi desenvolvido para entusiastas da
            aviação, pilotos e spotters, proporcionando uma busca ágil de dados
            cadastrais de aeronaves civis registradas no Brasil com fotos em
            tempo real.
          </p>

          <div className="modal-feature-box">
            <div className="feature-item">
              <span className="feature-icon">📁</span>
              <div>
                <strong>Fonte dos dados:</strong>
                <span>RAB (Registro Aeronáutico Brasileiro / ANAC)</span>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📸</span>
              <div>
                <strong>Imagens:</strong>
                <span>Planespotters.net API</span>
              </div>
            </div>
          </div>

          <div className="author-card">
            <p>
              Criado por <strong>Willian Oliveira</strong>
              <br />
              Engenheiro de Software | Piloto Privado
              <br />
              Contato: willian.oliveira737@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
