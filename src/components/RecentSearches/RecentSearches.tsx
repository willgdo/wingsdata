import "./RecentSearches.css";

interface RecentSearchesProps {
  items: string[];
  onSelect: (registration: string) => void;
  onRemove: (registration: string) => void;
  onClearAll?: () => void;
}

export const RecentSearches = ({
  items,
  onSelect,
  onRemove,
  onClearAll,
}: RecentSearchesProps) => {
  if (items.length === 0) return null;

  return (
    <section className="recent-searches" aria-label="Buscas recentes">
      <div className="recent-header">
        <span className="recent-title">Recentes</span>
        {onClearAll && (
          <button type="button" className="clear-all-btn" onClick={onClearAll}>
            Limpar
          </button>
        )}
      </div>

      <div className="chips-wrapper">
        {items.slice(0, 5).map((reg) => (
          <div key={reg} className="chip">
            <button
              type="button"
              className="chip-label-btn"
              onClick={() => onSelect(reg)}
              title={`Buscar ${reg}`}
            >
              {reg}
            </button>
            <button
              type="button"
              className="chip-remove-btn"
              onClick={(e) => {
                e.stopPropagation();
                onRemove(reg);
              }}
              aria-label={`Remover ${reg} do histórico`}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
