import "./About.css";
import meImage from "../../assets/me-banf.jpg";

const About = ({ aboutRef }) => {
  return (
    <div ref={aboutRef} className="aboutOuterContainer">
      {/* <div> */}
      <h3>About Me</h3>
      <div className="aboutInnerContainer">
        <div className="portraitContainer" />
        <div className="aboutMeText">
          <p>
            Hi! My name is Jonathan Oh and I am a software engineer based in San Francisco, CA. I
            first started programming as a Data Analyst using Python to wrangle and manipulate data.
            I also got extensive experience working with databases including Sql Server, MySql,
            Postgres, and Mongo. In 2020, I transitioned into a software engineer role and began
            working with C#. Currently, I work backend using Golang and Postgres Sql.
          </p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default About;
