// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";

// Components
import Temp from "./components/Temp";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Temp} />
    </>
  );
}

export default App;