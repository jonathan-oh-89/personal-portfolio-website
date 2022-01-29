import "./Resume.css";
import Pdf from "../../assets/testResume.pdf";
import Button from "../button/Button";
import { IoDocumentOutline, IoDownloadOutline } from "react-icons/io5";
import { GrDocumentDownload } from "react-icons/gr";

const Resume = () => {
  return (
    <div className="resumeOuterContainer">
      <h1>Resume</h1>
      <div className="resumeButtonSection">
        <a className="resumeLink" href={Pdf} without rel="noopener noreferrer" target="_blank">
          <Button text={"View Resume"} size={"m"} icon={<IoDocumentOutline size={20} />} />
        </a>
        <a className="resumeLink" href={Pdf} download>
          <Button text={"Downlod Resume"} size={"m"} icon={<IoDownloadOutline size={20} />} />
        </a>
      </div>
    </div>
  );
};

export default Resume;
