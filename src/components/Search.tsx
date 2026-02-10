export const Search = () => {
  return (
    <section id="search">
      <form>
        <div className="input-wrapper">
          <input
            id="search-input"
            type="text"
            placeholder="Digte o registro da aeronave..."
          />
          <div>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Estrangeira</label>
          </div>
        </div>
        <button type="submit">Search</button>
      </form>
    </section>
  );
};
