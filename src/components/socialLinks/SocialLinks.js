import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import "./SocialLinks.css";

const SocialLinks = () => {
  return (
    <div className="socialLinksContainer">
      <div className="socialLinks">
        <a className="socialIcon" href="mailto:info@example.com">
          <AiOutlineMail size={30} />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="socialIcon"
          href="https://github.com/jonathan-oh-89?tab=repositories"
        >
          <AiOutlineGithub size={30} />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="socialIcon"
          href="https://www.linkedin.com/in/jonathanoh89/"
        >
          <AiFillLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
