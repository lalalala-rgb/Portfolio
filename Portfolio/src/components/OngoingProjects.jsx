import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiCog, HiDocumentText } from "react-icons/hi";
import portfolioConfig from "../config/portfolioConfig.js";

const OngoingProjects = () => {
  const { ongoingProjects } = portfolioConfig;

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "planning":
        return "bg-purple-100 text-purple-800";
      case "testing":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>
        <div className="flex space-x-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(
              project.status
            )}`}
          >
            {project.status}
          </span>
        </div>
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-bold text-blue-600">
            {project.progress}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Timeline and links */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <div className="text-sm text-gray-500">
          <span className="font-medium">Expected: </span>
          {project.expectedCompletion}
        </div>

        <div className="flex space-x-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              title="View on GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="ongoing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work in Progress
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Current projects I'm actively working on and developing
          </p>
        </div>

        <div className="flex justify-center">
          {ongoingProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {ongoingProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <HiDocumentText className="w-16 h-16 mx-auto" />
            </div>
            <p className="text-gray-500 text-lg">
              No ongoing projects at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OngoingProjects;
