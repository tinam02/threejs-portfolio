import React, { useState } from "react";
import { motion } from "framer-motion";
const SingleProject = (params) => {
  const [expanded, setExpanded] = useState(false);

  const transition = {
    duration: 0.5,
    ease: [0.6, 0.01, -0.05, 0.9],
  };
  const infoAnim = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      transition,
    },
  };

  return (
    <article className="project">
      <header>
        <div className="project-info">
          <h2 onClick={() => setExpanded(!expanded)} className="project-title">
          &bull; {params.title}
            <span className="separator mq-hidden">|</span>
          </h2>
          <small>{params.tech.map((item) => item).join(", ")}</small>
        </div>

        <button className="btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? <h1>-</h1> : <h1>+</h1>}
        </button>
      </header>
      {expanded && (
        <motion.div
          variants={infoAnim}
          initial="hidden"
          animate="show"
          className="project-show-div"
        >
          {" "}
          <p className="project-info-p">{params.info}</p>
          <a className="project-info-p" href={params.link} target="_blank">
            <span className="mq-hidden">Check it out here: </span>
            <span className="link">{params.link}</span>
          </a>
        </motion.div>
      )}
    </article>
  );
};

export default SingleProject;
