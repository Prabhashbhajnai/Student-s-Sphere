// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

// Components
import Temp from "./components/Temp";

// Pages
import HomePage from "./Pages/Home";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={HomePage} />
    </>
  );
}

export default App;