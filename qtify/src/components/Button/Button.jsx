import React from 'react'
import styles from './Button.module.css'

function Button({children, handleClick}) {
    return(
        <button className={styles.btn} onClick={handleClick}>{children}</button>
    )
}

export default Button