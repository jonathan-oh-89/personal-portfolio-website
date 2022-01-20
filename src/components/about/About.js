import "./About.css";

const About = ({ aboutRef }) => {
  return (
    <div ref={aboutRef} className="aboutContainer">
      <div>
        <h3>About Me</h3>
      </div>
    </div>
  );
};

export default About;
