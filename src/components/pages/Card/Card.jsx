import React from 'react'
import styles from './Card.module.css'

const Card = ({ album }) => {
  const { image, follows, title } = album;
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.chip}>{follows} Follows</div>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  )
}

export default Card