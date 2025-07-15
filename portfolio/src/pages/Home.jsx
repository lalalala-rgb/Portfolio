import "../styles/Homepage.css";
import bank from "../image/bank.png";
import logo from "../image/logo.png";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import {
  SiReact,
  SiDotnet,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import Projectcard from "../component/Projectcard";

const Home = () => {
  const projects = [
    {
      id: 1,
      image: bank,
      title: "C# Bank System",
      description: "Bank system built with C# and Windows Forms.",
      github: "https://github.com/lalalala-rgb/BankSystem",
      tech: ["C#", "Windows Forms"],
    },
    {
      id: 2,
      title: "Noli Me Tangere",
      description: "A website for a 2D game based on the novel by Jose Rizal.",
      image: logo,
      github: "https://github.com/lalalala-rgb/Ibarra-sTale",
      tech: ["Unity", "React", "CSS"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "This portfolio website built with React.",
      image: bank,
      github: "https://github.com/lalalala-rgb/portfolio",
      tech: ["React", "CSS"],
    },
  ];

  return (
    <>
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

      <section className="skills-section">
        <h1>Tech Stack</h1>
        <div className="skills-list">
          <span>C#</span>
          <span>
            <SiJavascript />
            JavaScript
          </span>
          <span>
            <SiHtml5 />
            HTML
          </span>
          <span>
            <SiCss3 />
            CSS
          </span>
        </div>
      </section>

      <section className="project-section" id="projects">
        <h1 className="project-title">Projects</h1>
        <div className="project-wrapper">
          <button className="project-btn">
            <FaChevronLeft />
          </button>
          <div className="project-cards">
            {projects.slice(0, 4).map((project) => (
              <Projectcard key={project.id} project={project} />
            ))}
          </div>
          <button className="project-btn">
            <FaChevronRight />
          </button>
        </div>
      </section>
      <section className="aboutme-section" id="about">
        <h1>About Me</h1>
        <div className="aboutme-content">
          <div>
            <p>
              Hi! I’m a passionate developer who loves building meaningful web
              applications and exploring the latest tech trends. Whether it's
              crafting sleek front-ends or solving back-end challenges, I'm all
              in.
            </p>
            <p>
              I specialize in JavaScript, React, and Node.js. Lately, I’ve been
              experimenting with AI integrations and Web3. I believe in writing
              clean, efficient code and staying curious.
            </p>
            <p>
              When I’m not coding, you’ll find me sketching UI ideas, learning a
              new framework, or hiking to clear my mind.
            </p>
          </div>
        </div>
      </section>
      <footer>
        &copy; {new Date().getFullYear()} Louise David S. Lirio &mdash; All
        rights reserved.
      </footer>
    </>
  );
};

export default Home;
