import React from "react";
import styles from "./Skillist.module.css";

function Skillist({ skill }) {
  return (
    <div className={styles.skillItem}>
      <span className={styles.skillText}>{skill}</span>
    </div>
  );
}

export default Skillist;
