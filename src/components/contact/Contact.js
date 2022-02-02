import "./Contact.css";
import Button from "../button/Button";
import SocialLinks from "../socialLinks/SocialLinks";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <h3>Contact</h3>

      <div className="contactContainer">
        <form className="contactForm">
          <label className="inputLabel" for="fullname">
            Name
          </label>
          <input className="contactInput" type="text" id="fullname" />
          <label className="inputLabel" for="email">
            Email
          </label>
          <input className="contactInput" type="text" id="email" />
          <label className="inputLabel" for="message">
            Message
          </label>
          <textarea className="contactInput longtext" type="text" id="message" />
          <Button text={"Submit"} />
        </form>
      </div>
      <SocialLinks />
    </>
  );
};

export default Contact;
