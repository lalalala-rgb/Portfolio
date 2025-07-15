import "../styles/skills.css";
import {
  SiReact,
  SiDotnet,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const skills = () => {
  return (
       <section className="skills-section">
        <h1>Tech Stack</h1>
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
  )
}

export default skills
