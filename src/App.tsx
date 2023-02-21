import "normalize.css"
import Apresentation from "./Components/Apresentation/Apresentation";
import Creations from "./Components/Creations/Creations";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import "./styles/global.scss"

function App() {
  return (
    <div className="App">
      <Home />
      <Apresentation />
      <Creations />
      <Footer />
    </div>
  );
}

export default App;
