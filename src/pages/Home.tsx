import { Header } from "../components/Header";
import { Search } from "../components/Search";

const App = () => {
  return (
    <>
      <Header />
      <Search />
      <section className="result"></section>
      <section className="history"></section>
    </>
  );
};

export default App;
