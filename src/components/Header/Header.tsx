import "./Header.css";

interface HeaderProps {
  onOpenAbout: () => void;
  onReset?: () => void;
}

export const Header = ({ onOpenAbout, onReset }: HeaderProps) => {
  return (
    <header className="app-header">
      <div className="header-inner">
        <button
          type="button"
          className="header-logo-btn"
          onClick={onReset}
          title="Ir para a página inicial"
        >
          <h1 className="header-logo">WingsData</h1>
        </button>

        <button
          type="button"
          className="about-trigger-btn"
          onClick={onOpenAbout}
          title="Sobre o projeto"
          aria-label="Abrir informações sobre o projeto"
        >
          <span className="about-icon">?</span>
          <span className="about-label">Sobre</span>
        </button>
      </div>
    </header>
  );
};
