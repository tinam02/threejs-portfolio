import React, { useState } from "react";
import SingleProject from "./SingleProject";
import data from "../utils/data";
import linkedin from "../Assets/linkedin.svg";
import plane from "../Assets/plane.svg";
import resume from "../Assets/resume.svg";
// top left
const NameContainer = () => {
  return (
    <section className="main-container">
      <div className="main-content">
        <h1>
          Tina&nbsp;
          <span className="media-hide">Milosavljevic</span>
        </h1>
        <br />
        <h2>
          {" "}
          <span className="media-hide">Frontend Developer</span>{" "}
        </h2>
      </div>
    </section>
  );
};
// bottom left
const ProjectContainer = () => {
  const [projects, setProjects] = useState(data);
  return (
    <section className="project-container">
      <h1>My projects:</h1>
      <br />
      <article className="info">
        {projects.map((project) => (
          <SingleProject key={project.id} {...project} />
        ))}
      </article>
    </section>
  );
};

// top right

// bottom right
const SocialsContainer = () => {
  return (
    <section>
      <div className="socials-container">
        <a
          href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:c70b0dd6-bbe9-49ea-a43d-f4f10654f872"
          target="_blank"
        >
          <img src={resume} alt="resume" className="socials-icon" />
        </a>{" "}
        <h2>&nbsp;&bull;&nbsp;</h2>
        <a
          href="https://www.linkedin.com/in/tina-milosavljevic-2454931b9/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" className="socials-icon" />
        </a>
        <h2>&nbsp;&bull;&nbsp;</h2>
        <a href="mailto:oge612@gmail.com" target="_blank">
          <img src={plane} alt="mail" className="socials-icon" />{" "}
        </a>
      </div>
    </section>
  );
};
export { NameContainer, ProjectContainer, SocialsContainer };
