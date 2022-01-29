import "./ProjectCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProjectCarousel = ({ title, images, text, text2, link }) => {
  const imageLinks = images.map((img) => {
    return (
      <div className="imageDiv">
        <img src={img} alt="Screenshot of App" />
      </div>
    );
  });

  return (
    <div className="projectContainer">
      <h4 className="carouselTitle">{title}</h4>
      <div className="carouselContainer">
        <Carousel infiniteLoop={true} showThumbs={false} showStatus={false}>
          {imageLinks}
        </Carousel>
        <p className="description">
          {text} View project{" "}
          <a target="_blank" rel="noopener noreferrer" href={link}>
            here.
          </a>
        </p>
        <p className="description">{text2}</p>
      </div>
    </div>
  );
};

export default ProjectCarousel;
