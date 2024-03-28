import styles from "./hero.module.css";
export default function HeroSection({ textLine1, textLine2, image }) {
  return (
    

    <div className={styles.heroBox}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <div>{textLine1}</div>
          <div>{textLine2}s</div>
        </div>

        <img src={image} alt="heroimage" className={styles.heroImg} />
      </div>
    </div>
  );
}