import LeftHeroSection from "./LeftHeroSection";
import RightHeroSection from "./RightHeroSection";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <div className="heroContainer">
        <div className="heroTextSection">
          <h2> Hey there! My name is </h2>
          <h1 className="nameHighlight">Jonathan Oh.</h1>
          <h2>I am a software engineer.</h2>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
