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

export const burgerContext = createContext();

function App() {
  const techSkills = getTechSkills();
  const burgerRef = useRef();

  return (
    <burgerContext.Provider value={{ burgerRef }}>
      <div className="font-sans">
        <div className="h-screen flex flex-col">
          <NavBar />
          <Hamburger />
          <About />
        </div>
        <Projects />
        <div className="md:bg-skills-bg bg-no-repeat bg-[center_right_5rem]">
          <Skills {...techSkills} />
        </div>
        <Experience />
        <ContactMe />
        <Footer />
      </div>
    </burgerContext.Provider>
  );
}

export default App;
