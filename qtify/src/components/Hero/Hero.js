import "./Hero.module.css";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <img
        src={require("../../assets/vibrating-headphone.png")}
        alt="Vibrating Headphones"
      />
    </div>
  );
}
