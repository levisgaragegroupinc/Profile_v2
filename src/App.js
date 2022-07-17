import "./App.css";
import About from "./components/About";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import TitleDivider from "./components/Dividers/Divider";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
