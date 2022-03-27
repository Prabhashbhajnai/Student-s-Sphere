// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import LibraryHomeLayoutHOC from "./HOC/Library/Home.Library.Hoc";

// Components
import Temp from "./components/Temp";

// Pages
import HomePage from "./Pages/Home";
import LibraryHome from "./Pages/Library/LibraryHome";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={HomePage} />
      <LibraryHomeLayoutHOC path="/library" exact component={LibraryHome} />
    </>
  );
}

export default App;