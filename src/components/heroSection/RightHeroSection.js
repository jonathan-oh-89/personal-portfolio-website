import "./RightHeroSection.css";
import myimg from "../../assets/me-banf.jpg";

const RightHeroSection = () => {
  return (
    <>
      <div className="rightHeroSectionContainer">
        <div className="imageContainer">
          <img className="image" src={myimg} alt="Jonathan Oh in Banff" />
        </div>
      </div>
    </>
  );
};

export default RightHeroSection;
