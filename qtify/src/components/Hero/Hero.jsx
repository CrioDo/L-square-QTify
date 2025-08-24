import React from 'react'
import styles from './Hero.module.css'
import headphone from '../../assets/headphone.png'

function Hero() {
    return(<div className={styles.hero}>
        <h1>
            100 Thousand Songs, ad-free<br/>
            Over thousands podcast episodes
        </h1>
        <img src={headphone} height={212}/>
    </div>)
}

export default Hero