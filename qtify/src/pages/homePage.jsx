import HeroSection from "../components/hero/HeroSection";
import heroImg from "../assets/hero_headphones.svg";
import styles from "./homePage.module.css";
export default function HomePage() {
  return (
    <div className={styles.container}>
      <HeroSection
        textLine1={"100 Thousand Songs, ad-free"}
        textLine2={"Over thousands podcast episodes"}
        image={heroImg}
      />
     
    </div>
  );
}