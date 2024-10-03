import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import JSE from "../../assets/JSE.jpeg";
import VV from "../../assets/VV.jpeg";
import SC from "../../assets/SC.jpeg";
import AP from "../../assets/AP.jpeg";
import WEB from "../../assets/IAWEB1.png";
import TTM from "../../assets/web123.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projets</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          id="jse"
          src={JSE}
          h3="Jean-Sebastien et Eric"
          h4="React / Firebase"
        />
        <ProjectCard
          id="vengenceEtVertue"
          src={VV}
          h3="Vengence et Vertue"
          h4="Unity 2D / C#"
        />
        <ProjectCard
          id="spaceCruiser"
          src={SC}
          h3="Space Cruiser"
          h4="Unity 3D / C#"
        />
        <ProjectCard
          id="AP"
          src={AP}
          h3="Le voyage infini"
          h4="After Effect / Motion"
        />
        <ProjectCard
          id="IWEB"
          src={WEB}
          h3="Quizz Web Trivia"
          h4="HTML / CSS / Javascript"
        />
        <ProjectCard id="TTM" src={TTM} h3="TeeTIM" h4="PHP / JSON" />
      </div>
    </section>
  );
}

export default Projects;
