// HOC
import HomeLayoutHOC from "./HOC/Home.Hoc";
import LibraryHomeLayoutHOC from "./HOC/Library/Home.Library.Hoc";
import NewspaperLayoutHOC from "./HOC/Library/Newspaper.Library.Hoc";

// Components
import Temp from "./components/Temp";

// Pages
import HomePage from "./Pages/Home";
import LibraryHome from "./Pages/Library/LibraryHome";
import Newspaper from "./Pages/Library/Newspaper";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={HomePage} />
      <LibraryHomeLayoutHOC path="/library" exact component={LibraryHome} />
      <NewspaperLayoutHOC path="/library/newspaper" exact component={Newspaper} />
    </>
  );
}

export default App;