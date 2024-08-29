import React from "react";
import styles from "../Hero/Hero.module.css";
import HeroImage from "../assets/hero_headphones.png"

const Hero = () => {
  return (
    <>  
        <section className={styles.Hero}>
            <div className={styles.HeroTitle}>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
                <img className={styles.HeroImage} src={HeroImage} alt='headphone'/>
        </section>
    </>
  )
}

export default Hero