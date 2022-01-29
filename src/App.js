import { useRef } from "react";
import "./App.css";
import HeroSection from "./components/heroSection/HeroSection";
import NavBar from "./components/navBar/NavBar";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";

function App() {
  const aboutRef = useRef();
  const projectsRef = useRef();

  const handleAboutRefClick = (refSection) => {
    if (refSection === "about") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (refSection === "projects") {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <NavBar handleAboutRefClick={handleAboutRefClick} />
      <HeroSection handleAboutRefClick={handleAboutRefClick} />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
