import { useRef } from "react";
import "./App.css";
import HeroSection from "./components/heroSection/HeroSection";
import NavBar from "./components/navBar/NavBar";
import About from "./components/about/About";

function App() {
  const aboutRef = useRef();

  const handleAboutRefClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <NavBar handleAboutRefClick={handleAboutRefClick} />
      <HeroSection />
      <About aboutRef={aboutRef} />
    </div>
  );
}

export default App;
