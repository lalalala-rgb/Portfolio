import React from "react";
import "../styles/skills.css";
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

const baseIcons = [
  { Icon: SiJavascript, color: "yellow" },
  { Icon: SiHtml5, color: "orange" },
  { Icon: SiCss3, color: "blue" },
];

const fallingIcons = Array.from({ length: 8 }, () => {
  const randomIndex = Math.floor(Math.random() * baseIcons.length);
  return baseIcons[randomIndex];
});

const Skills = () => {
  return (
    <section className="skills-section">
      <h1>Tech Stack</h1>

      <div className="falling-icons-container">
        {fallingIcons.map(({ Icon, color }, index) => (
          <div
            key={index}
            className="falling-icon"
            style={{
              right: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          >
            <Icon style={{ color }} />
          </div>
        ))}
      </div>

      <div className="skills-list">
        <span>C#</span>
        <span>
          <SiJavascript />
          JavaScript
        </span>
        <span>
          <SiHtml5 />
          HTML
        </span>
        <span>
          <SiCss3 />
          CSS
        </span>
      </div>
    </section>
  );
};

export default Skills;
