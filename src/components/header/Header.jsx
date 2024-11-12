import { useState } from "react";
import "./Header.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <div className="Navbar">

      <div className={`nav-items ${isOpen && "open"}`}>
          <a href="/" className="nav-logo"><span>mk</span></a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#aboutme">About me</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;
