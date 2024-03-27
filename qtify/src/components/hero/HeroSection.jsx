import heroImg from "../../assets/hero_headphones.png";
import styles from "./hero.module.css";
export default function HeroSection({ textLine1, textLine2, image }) {
  return (
    

    <div className={styles.heroBox}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <div>{textLine1}</div>
          <div>{textLine2}s</div>
        </div>

        <img src={image} alt="hero image" className={styles.heroImg} />
      </div>
    </div>
  );
}