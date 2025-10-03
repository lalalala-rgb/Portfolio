import React from "react";
import { HiLocationMarker, HiChevronDown } from "react-icons/hi";
import portfolioConfig from "../config/portfolioConfig.js";

const Hero = () => {
  const { name, tagline, bio, location, email, social } = portfolioConfig;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hello, I'm {""}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {name}
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
              {tagline}
            </h2>

            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              {bio}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a
                href={`mailto:${email}`}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-medium"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200 font-medium"
              >
                View My Work
              </a>
            </div>

            <div className="flex items-center justify-center space-x-6 text-gray-500">
              <div className="flex items-center">
                <HiLocationMarker className="w-5 h-5 mr-2" />
                {location}
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div className="text-sm">Available for new opportunities</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() =>
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <HiChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
