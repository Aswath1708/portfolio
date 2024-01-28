import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { getTechSkills } from "./utils/getSkills";
import { getNonTechSkills } from "./utils/getSkills";

function App() {
  const techSkills = getTechSkills();
  const nonTechSkills = getNonTechSkills();

  return (
    <div className="font-sans">
      <NavBar />
      <About />
      <Skills {...techSkills} />
      <Skills {...nonTechSkills} />
      <Projects />
      <Experience />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
