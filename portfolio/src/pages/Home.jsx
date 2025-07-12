import "../styles/Homepage.css";
import myimage from "../image/my-pic.png";
import bank from "../image/bank.png";
import logo from "../image/logo.png";
import { FaFacebook, FaGithub, FaLinkedin, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
      description: "A 2D game based on the novel by Jose Rizal.",
      image: logo,
      github: "https://github.com/lalalala-rgb/Ibarra-sTale",
      tech: ["Unity", "C#", "2D Game"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "This portfolio website built with React.",
      image: bank,
      github: "https://github.com/lalalala-rgb/portfolio",
      tech: ["React", "CSS"],
    },
    {
      id: 4,
      title: "C# Bank System",
      description: "Bank system built with C# and Windows Forms.",
      image: bank,
      github: "https://example.com/project1",
      tech: ["C#", "Windows Forms"],
    },
  ];

  return (
    <>
      <section className="intro-section" id="intro">
        <h1>Introduction</h1>
        <img src={myimage} alt="my-image" />
        <div className="my-info">
          <h2>My name is Louise David S. Lirio</h2>
          <p>
            I am a software developer with a passion for creating innovative solutions.
          </p>
          <p>Feel free to explore my projects and learn more about me.</p>
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
        <h1>Skills</h1>
        <div className="skills-list">
          <span>React</span>
          <span>C#</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
        
        </div>
      </section>

      <section className="project-section" id="projects">
        <h1 className="project-title">Projects</h1>
        <div className="project-wrapper">
          <button className="project-btn"><FaChevronLeft /></button>
          <div className="project-cards">
            {projects.slice(0, 4).map((project) => (
              <Projectcard key={project.id} project={project} />
            ))}
          </div>
          <button className="project-btn"><FaChevronRight /></button>
        </div>
      </section>

      <section className="aboutme-section" id="about">
        <h1>About me</h1>
        <p>
          I am a passionate developer who loves building projects and learning new technologies.
          My goal is to create impactful software and continuously grow as a developer.
        </p>
      </section>

      <footer>
        &copy; {new Date().getFullYear()} Louise David S. Lirio &mdash; All rights reserved.
      </footer>
    </>
  );
};

export default Home;
