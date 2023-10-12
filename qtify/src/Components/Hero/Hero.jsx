import React from 'react';
import styles from './Hero.module.css';
import headphone from '../../Assests/Vibrating-headphone.png';

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div>
            <h1>100 Thousands Songs, ad-free</h1>
            <h1> Over thousands podcast episodes</h1>
        </div>
        <div>
            <img src={headphone} alt="headphones" width={212} />
        </div>
    </div>
  )
}

export default Hero