import "./App.css";
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Blends from "./components/blends/Blends";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";
import Whatido from "./components/whatido/Whatido";
// import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Education />
      <Whatido />
      <Projects />
      <Blends />
      <Footer />
    </div>
  );
}

export default App;
