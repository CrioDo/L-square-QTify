import React from 'react';
import HeroImg from "../../assets/heroImage.png"
import styles from "../Hero/Hero.module.css"

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
            <img src={HeroImg} alt="Headphone Logo" width={212}/>
        </div>
       
    </div>
  );
}

export default Hero;
