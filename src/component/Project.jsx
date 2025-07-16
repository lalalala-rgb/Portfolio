import "../styles/project.css";
import bank from "../image/bank.png";
import logo from "../image/logo.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Projectcard from "../component/Projectcard";
import { useState } from "react";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
      demo: "https://ibarrastale-2af5b.web.app",
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
      title: "Portfolio qedasfdgfasWebsite",
      description: "Thisafdasfaite built with React.",
      image: bank,
      github: "https://github.com/lalalala-rgb/portfolio",
      tech: ["React", "CSS"],
    },
    {
      id: 5,
      title: "Portfolio axvascxaWebsite",
      description: "This portfafadsfasdft with React.",
      image: bank,
      github: "https://github.com/lalalala-rgb/portfolio",
      tech: ["React", "CSS"],
    },
    {
      id: 6,
      title: "Portfolio 1231231Website",
      description: "This portfolio websilkjljkglkghjkghjt with React.",
      image: bank,
      github: "https://github.com/lalalala-rgb/portfolio",
      tech: ["React", "CSS"],
    },
    {
      id: 7,
      title: "dasfas Website",
      description: "This porsfasdfasduilt with React.",
      image: bank,
      github: "https://github.com/lalalala-rgb/portfolio",
      tech: ["React", "CSS"],
    },
  ];

  return (
    <section className="project-section" id="projects">
      <h1 className="project-title">Projects</h1>
      <div className="project-wrapper">
        {projects.length === 0 && (
          <p className="no-projects">No projects available.</p>
        )}

        <button
          className="project-btn"
          onClick={() => setCurrentIndex(currentIndex - 4)}
          disabled={currentIndex === 0}
          style={{ visibility: projects.length === 0 ? "hidden" : "visible" }}
        >
          <FaChevronLeft />
        </button>

        <div className="project-cards">
          {projects.slice(currentIndex, currentIndex + 4).map((project) => (
            <Projectcard key={project.id} project={project} />
          ))}
        </div>

        <button
          className="project-btn"
          onClick={() => setCurrentIndex(currentIndex + 4)}
          disabled={currentIndex === projects.length - 4}
          style={{ visibility: projects.length === 0 ? "hidden" : "visible" }}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Project;
