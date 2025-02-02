import React from 'react'
import styles from "./Button.module.css"

export const Button = ({children}) => {
  return (
    <div className={styles.btn} >{children}</div>
  )
}