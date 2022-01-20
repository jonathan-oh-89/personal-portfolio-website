import "./NavBar.css";

const NavBar = ({ handleAboutRefClick }) => {
  return (
    <>
      <nav className="navBar">
        <ul className="navLinkList">
          <li className="navLink" onClick={handleAboutRefClick}>
            About
          </li>
          <li className="navLink">Projects</li>
          <li className="navLink">Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
