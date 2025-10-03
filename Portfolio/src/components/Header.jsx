import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import portfolioConfig from "../config/portfolioConfig.js";

const Header = () => {
  const { name, social } = portfolioConfig;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">{name}</div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("ongoing")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Ongoing Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            )}
            {social.resume && (
              <a
                href={social.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Resume
              </a>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <HiMenu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
