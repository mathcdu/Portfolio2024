import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/MCD.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Croteau_Dufour_Mathieu_CV1 copy.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;

  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="ProfilePic" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Mathieu
          <br />
          Croteau-Dufour
        </h1>
        <h2>
          Finissant en intégration multimédia <br /> Aspirant développeur
          frontend
        </h2>
        <span>
          <a href="https://github.com/mathcdu" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/mathieu-croteau-dufour-a7717b73/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Passionné par le web et les technologies numériques, Je cherche à
          mettre mes compétences créatives et techniques au service de projets
          innovants.
        </p>
        <a href={CV} download>
          <button className="hover">CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
