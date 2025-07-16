import "../styles/about.css";
import { SiJavascript, SiHtml5, SiCss3, SiReact } from "react-icons/si";
import CopyEmailButton from "./CopyEmailButton";

const about = () => {
  const baseIcons = [
    { Icon: SiJavascript, color: "yellow" },
    { Icon: SiHtml5, color: "orange" },
    { Icon: SiReact, color: "#61DAFB" },
    { Icon: SiCss3, color: "blue" },
  ];

  const fallingIcons = Array.from({ length: 8 }, () => {
    const randomIndex = Math.floor(Math.random() * baseIcons.length);
    return baseIcons[randomIndex];
  });
  return (
    <section className="aboutme-section" id="about">
      <h1>About Me</h1>
      <div className="aboutme-content">
        <div className="grid1">
          <h2>
            Hi! <br />
            I'm Louise David Lirio
          </h2>
          <p>
            Passionate Web developer crafting <br />
            sleek, responsive websites <br />
            that bring ideas to life through clean code and creative design.
          </p>
        </div>
        <div className="grid2">
          <h2>Tech Stack</h2>
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
        </div>
        <div className="grid3">
          <h3>Contact me here</h3>
          <CopyEmailButton />
        </div>
        <div className="grid4">asdfasd</div>
      </div>
    </section>
  );
};

export default about;
