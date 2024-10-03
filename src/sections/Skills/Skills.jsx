import styles from "./SkillsStyles.module.css";
import { useTheme } from "../../common/ThemeContext";
import checkMarkDark from "../../assets/checkmark-dark.svg";
import checkMarkLight from "../../assets/checkmark-light.svg";
import Skillist from "../../common/Skillist";

function Skills() {
  const { theme } = useTheme();

  const checkMarkIcon = theme === "light" ? checkMarkLight : checkMarkDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Habiletés</h1>
      <div className={styles.skillList}>
        <Skillist src={checkMarkIcon} skill="HTML" />
        <Skillist src={checkMarkIcon} skill="CSS" />
        <Skillist src={checkMarkIcon} skill="JavaScript" />
        <Skillist src={checkMarkIcon} skill="React" />
        <Skillist src={checkMarkIcon} skill="PHP" />
        <Skillist src={checkMarkIcon} skill="TypeScript" />
        <Skillist src={checkMarkIcon} skill="Photoshop" />
        <Skillist src={checkMarkIcon} skill="After Effects" />
        <Skillist src={checkMarkIcon} skill="Maya" />
        <Skillist src={checkMarkIcon} skill="Unity 2D/3D" />
      </div>
    </section>
  );
}

export default Skills;
