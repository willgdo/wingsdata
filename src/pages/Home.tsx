import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { History } from "../components/History/History";
import { Result } from "../components/Result/Result";
import { Search } from "../components/Search/Search";

const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <Result />
      <History />
      <Footer />
    </>
  );
};

export default Home;
