import React from "react";
import "../styles/intro.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import bank from "../image/bank.png";

const intro = () => {
  return (
    <section className="intro-section" id="intro">
      <h1>Introduction</h1>
      <img src={bank} alt="my-image" />
      <div className="my-info">
        <h2>My name is Louise David S. Lirio</h2>
        <p>
          I'm a fresh graduate from <b>STI College Caloocan</b> with a passion
          for software development and a keen interest in creating innovative
          solutions.
        </p>
        <p>
          Feel free to check out my projects from my college journey and learn
          more about me.
        </p>
        <div className="buttonrow">
          <div className="social-links">
            <a
              href="https://facebook.com/yourprofile"
              className="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/lalalala-rgb"
              className="gitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/louise-lirio-49165a277/"
              className="linkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="project-container">
            <button className="projects-button">Projects</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default intro;
