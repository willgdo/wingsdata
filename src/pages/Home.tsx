import { Header } from "../components/Header";
import { History } from "../components/History";
import { Result } from "../components/Result";
import { Search } from "../components/Search";

const App = () => {
  return (
    <>
      <Header />
      <Search />
      <Result />
      <History />
      <footer>
        Nenhum direito reservado
        <br />
        Desenvolvido por <strong>Willian Oliveira</strong> - v0.1.0
      </footer>
    </>
  );
};

export default App;
