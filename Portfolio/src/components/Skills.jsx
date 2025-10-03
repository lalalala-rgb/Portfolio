import React from "react";
import portfolioConfig from "../config/portfolioConfig.js";

const Skills = () => {
  const { skills } = portfolioConfig;

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={category}
              className="bg-gray-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skillList.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-200 hover:border-blue-300 hover:text-blue-700 transition-all duration-200 text-sm font-medium shadow-sm"
                    style={{
                      animationDelay: `${
                        (index * skillList.length + skillIndex) * 0.1
                      }s`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Info */}
        <div className="text-center mt-16">
          <div className="bg-blue-800 text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg opacity-90">
              Technology evolves rapidly, and I'm passionate about staying
              current with the latest trends, frameworks, and best practices in
              software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
