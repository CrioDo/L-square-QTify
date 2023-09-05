import React from 'react'
import styles from './Hero.module.css'
import {ReactComponent as HeroImage} from '../../assets/HeroImage.svg'

const hero = ({line1,line2}) => {
  return (
    <>
    <div className={styles.hero}>
        <div className={styles.container}>
            <p>{line1}</p>
            <p>{line2}</p>
        </div>
        <HeroImage />
    </div>
    </>
  )
}

export default hero