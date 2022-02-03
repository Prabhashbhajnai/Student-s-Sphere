import Footer from "./components/Footer";
import Landing from "./components/Landing";
import "./App.css";
import NavigationBar from "./components/Navbar";

function App() {
  return (
    <div>
      <NavigationBar/>
      <Landing></Landing>
      <Footer></Footer>
    </div>
  );
}

export default App;
