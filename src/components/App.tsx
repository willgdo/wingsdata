import AircraftResult from "./AircraftResult";
import Header from "./Header";
import HelpPopover from "./HelpPopover";
import SearchAircraft from "./SearchAircraft";
import SearchHistory from "./SearchHistory";

const App = () => {
  return (
    <>
      <Header />
      <SearchAircraft />
      <AircraftResult />
      <SearchHistory />
      <HelpPopover />
    </>
  );
};

export default App;
