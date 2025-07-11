import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-center">
          <ul>Home</ul>
          <ul>Projects</ul>
          <ul>About me</ul>
          <div className="navbar-right">
            <ul>Contact me</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
