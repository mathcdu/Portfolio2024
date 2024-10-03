import React from "react";
import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";

function ProjectCard({ src, id, h3, h4, p }) {
  return (
    <div className={styles.projectCard}>
      <img className={styles.hover} src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <h4>{h4}</h4>
      <p className={styles.projectDescription}>{p}</p>
      <Link to={`/project/${id}`}>
        <h5 className={styles.seeMore}>Voir plus...</h5>
      </Link>
    </div>
  );
}

export default ProjectCard;
