import React from 'react'
import styles from "./ButtonFeedBack.module.css";
const ButtonFeedBack = ({text}) => {
  return (
    <button className={styles.button} type='submit'>{text}</button>
  )
}

export default ButtonFeedBack