import "../styles/projectcard.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projectcard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-poster">
          <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {project.tech && (
          <div className="project-tags">
            {project.tech.map(tag => <span className="tag" key={tag}>{tag}</span>)}
          </div>
        )}
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub Repository">
              <button className="github-button">
                <FaGithub style={{ marginRight: 6 }} /> Repository
              </button>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Live Demo">
              <button className="demo-button">
                <FaExternalLinkAlt style={{ marginRight: 6 }} /> Live Demo
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projectcard;
