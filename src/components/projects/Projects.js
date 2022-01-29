import "./Projects.css";
import ProjectCarousel from "../projectCarousel/ProjectCarousel";
import scopeoutOutImage1 from "../../assets/scopeout-1.png";
import scopeoutOutImage2 from "../../assets/scopeout-2.png";
import ezWeather1 from "../../assets/ez-weather-app-1.png";
import ezWeather2 from "../../assets/ez-weather-app-2.png";
import photoAlbum1 from "../../assets/photo-album-app-1.png";
import photoAlbum2 from "../../assets/photo-album-app-2.png";
import photoAlbum3 from "../../assets/photo-album-app-3.png";

const Projects = ({ projectsRef }) => {
  return (
    <>
      <div ref={projectsRef} className="projectsContainer">
        <h3>Projects</h3>
        <ProjectCarousel
          title={"ScopeOut"}
          images={[scopeoutOutImage1, scopeoutOutImage2]}
          text={
            "ScopeOut is an app that helps real estate investors analyze markets and neighborhoods. Users can submit a search for a given address and view demographic, economic, and housing data. The data that powers the website is gathered by another project written in Python."
          }
          text2={"Technologies: NextJS, Mongo, Python."}
          link={"https://scopeout.io/"}
        />
        <ProjectCarousel
          title={"Photo Album App"}
          images={[photoAlbum1, photoAlbum2, photoAlbum3]}
          text={
            "Photo Album App is website where that displays a photo gallery consisting of photos uploaded by all users. After creating an account, users can drag and drop photos that will appear in the main gallery."
          }
          text2={"Technologies: React, NodeJS, ExpressJS, Cloudinary, PassportJS, Mongo."}
          link={"https://photo-app-jono.herokuapp.com/"}
        />
        <ProjectCarousel
          title={"EZ Weather Tracker"}
          images={[ezWeather1, ezWeather2]}
          text={
            "EZ Weather Tracker is a simple app that retrieves current weather and forecast for a given zipcode."
          }
          text2={"Technologies: React, NodeJS, ExpressJS, Redux."}
          link={"https://ez-weather-tracker.herokuapp.com/"}
        />
      </div>
    </>
  );
};

export default Projects;
