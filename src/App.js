import { createContext, useRef } from "react";
import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hamburger from "./components/Hamburger";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { getTechSkills } from "./utils/getSkills";
import { getNonTechSkills } from "./utils/getSkills";

export const burgerContext = createContext();

function App() {
  const techSkills = getTechSkills();
  const nonTechSkills = getNonTechSkills();
  const burgerRef = useRef();

  return (
    <burgerContext.Provider value={{ burgerRef }}>
      <div className="font-sans">
        <NavBar />
        <Hamburger />
        <About />
        <Skills {...techSkills} />
        <Skills {...nonTechSkills} />
        <Projects />
        <Experience />
        <ContactMe />
        <Footer />
      </div>
    </burgerContext.Provider>
  );
}

export default App;
