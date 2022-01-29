import "./NavBar.css";

const NavBar = ({ handleAboutRefClick }) => {
  return (
    <>
      <nav className="navBar">
        <ul className="navLinkList">
          <li
            className="navLink"
            onClick={() => {
              handleAboutRefClick("about");
            }}
          >
            About
          </li>
          <li
            className="navLink"
            onClick={() => {
              handleAboutRefClick("projects");
            }}
          >
            Projects
          </li>
          <li className="navLink">Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
