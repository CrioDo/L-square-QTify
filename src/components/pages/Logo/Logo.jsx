import React from 'react'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <img
      src='/qtify_logo.png'
      alt='QTify Logo'
      className={styles.logo}
    />
  )
}

export default Logo
