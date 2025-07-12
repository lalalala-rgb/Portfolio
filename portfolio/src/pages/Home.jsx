import "../styles/Homepage.css";
import myimage from "../image/my-pic.png";
import bank from "../image/bank.png";
import logo from "../image/logo.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Projectcard from "../component/Projectcard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Home = () => {
  const projects = [
    {
      id: 1,
      image: bank,
      title: "C# Bank System",
      description: "Bank system built with C# and Windows Forms.",
      github: "https://example.com/project1",
    },
     {
      id: 2,
      title: "Noli Me Tangere",
      description: "A 2D game based on the novel by Jose Rizal.",
      image: logo,
      github: "https://github.com/lalalala-rgb/Ibarra-sTale",
    },
     {
      id: 3,
      title: "C# Bank System",
      description: "Bank system built with C# and Windows Forms.",
      image: myimage,
      github: "https://example.com/project1",
    },
      {
      id: 4,
      title: "C# Bank System",
      description: "Bank system built with C# and Windows Forms.",
      image: myimage,
      github: "https://example.com/project1",
    },
      {
      id: 4,
      title: "C# Bank System",
      description: "Bank system built with C# and Windows Forms.",
      image: myimage,
      github: "https://example.com/project1",
    },
    
  ];
  return (
    <>
      <section className="intro-section">
        <h1>Introduction</h1>
        <img src={myimage} alt="my-image"></img>
        <div className="my-info">
          <h2>My name is Louise David S. Lirio</h2>
          <p>
            I am a software developer with a passion for creating innovative
            solutions.
          </p>
          <p>Feel free to explore my projects and learn more about me.</p>
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
            <div className="project-container">
              <button className="projects-button">Projects</button>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section">
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

      <section className="aboutme-section">
        <h1>About me</h1>
      </section>
      <footer></footer>
    </>
  );
};

export default Home;
