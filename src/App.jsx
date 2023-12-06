import Food from "./components/Food/Food";
import Gallery from "./components/Gallery/Gallery";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="siteContainer">
      <Navbar></Navbar>
      <Gallery></Gallery>
      <Food></Food>
    </div>
  );
}

export default App;
