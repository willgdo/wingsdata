import "./App.css";

const searchAircraft = () => {
  console.log("Searching for aircraft...");
};

function App() {
  return (
    <>
      <header>
        <h1>WingsData</h1>
      </header>
      <section>
        <main>
          <p className="message">
            Digite o registro da aeronave
            {/* <br />
            Type the aircraft registration */}
          </p>
          <div>
            <input type="text" id="registration" name="registration" />
            <button
              type="submit"
              className="search-btn"
              aria-label={"Search"}
              disabled={false}
              onClick={searchAircraft}
            >
              <img src="./btn-airplane.png" alt={"Search"} />
            </button>
          </div>
        </main>
      </section>
    </>
  );
}

export default App;
