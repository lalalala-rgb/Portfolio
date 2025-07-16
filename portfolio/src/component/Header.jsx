import React from "react";
import "../styles/Header.css";
import { Link, Element } from "react-scroll";

const Header = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-center">
          <Link to="intro" smooth={true} duration={500} offset={-70}>
            Home
          </Link>
          <Link to="projects" smooth={true} duration={500} offset={-80}>
            Projects
          </Link>
          <Link to="about" smooth={true} duration={500}>
            About me
          </Link>
          <div className="navbar-right">
            <Link>Contact me</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
