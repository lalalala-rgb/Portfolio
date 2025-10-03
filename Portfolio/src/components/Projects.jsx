import React, { useState } from "react";
import { HiDesktopComputer, HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import portfolioConfig from "../config/portfolioConfig.js";

const Projects = () => {
  const { projects } = portfolioConfig;
  const [filter, setFilter] = useState("all");

  const featuredProjects = projects.filter((project) => project.featured);
  const allProjects = projects;
  const displayProjects =
    filter === "featured" ? featuredProjects : allProjects;

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center text-gray-500">
              <HiDesktopComputer className="w-16 h-16 mx-auto mb-2" />
              <p className="text-sm">Project Preview</p>
            </div>
          )}
        </div>

        {project.featured === true ? (
          <div className="absolute top-4 right-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              Featured
            </span>
          </div>
        ) : (
          <div className="absolute top-4 right-4">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              {project.featured_message || "in development"}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          {project.available === true ? (
            <>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  <HiExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:text-gray-900 transition-colors text-sm font-medium"
                >
                  <FaGithub className="w-4 h-4 mr-2" />
                  Code
                </a>
              )}
            </>
          ) : (
            <div className="bg-red-200 font-semibold py-1 px-2 rounded-2xl text-red-500 text-sm">
              {project.message || "Project not available"}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A selection of projects that showcase my skills and passion for
            development
          </p>

          {/* Filter buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              All Projects ({allProjects.length})
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                filter === "featured"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Featured ({featuredProjects.length})
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {displayProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No projects found for the selected filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
