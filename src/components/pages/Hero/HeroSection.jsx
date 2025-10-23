import React from 'react'
import styles from './Herosection.module.css'

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>
          100 Thousand Songs, ad-free <br /> Over thousands podcast episodes
        </h1>
      </div>
      <img src='/vibrating-headphone 1.png' alt='Headphones' className={styles.image} />
    </section>
  )
}

export default HeroSection
