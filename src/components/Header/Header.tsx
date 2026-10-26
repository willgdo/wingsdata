import "./Header.css";

interface HeaderProps {
  onOpenAbout: () => void;
}

export const Header = ({ onOpenAbout }: HeaderProps) => {
  return (
    <header className="app-header">
      <div className="header-inner">
        <h1 className="header-logo">WingsData</h1>

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
