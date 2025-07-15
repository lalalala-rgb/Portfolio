import React from "react";
import "../styles/project.css";
import bank from "../image/bank.png";
import logo from "../image/logo.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Projectcard from "../component/Projectcard";

const project = () => {
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
  );
};

export default project;
