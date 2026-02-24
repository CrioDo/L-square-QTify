import styles from "./Hero.module.css";
import headphones from "../../assets/hero_headphones.png";

function Hero() {
  return (
    <div className={styles.hero}>
  <div className={styles.textContainer}>
    <h1>100 Thousand Songs, ad-free</h1>
    <h1>Over thousands podcast episodes</h1>
  </div>

  <img
    className={styles.image}
    src={headphones}
    alt="headphones"
  />
</div>
  );
}

export default Hero;