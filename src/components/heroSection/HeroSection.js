import "./HeroSection.css";
import Button from "../button/Button";

const HeroSection = ({ handleAboutRefClick }) => {
  return (
    <>
      <div className="heroContainer">
        <div className="heroTextSection">
          <h2> Hey there! My name is </h2>
          <h1 className="nameHighlight">Jonathan Oh.</h1>
          <h2>I am a software engineer.</h2>
          <Button
            text={"View Portfolio"}
            onClickFunction={() => {
              handleAboutRefClick("projects");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
