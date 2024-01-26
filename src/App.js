import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Skills />
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
