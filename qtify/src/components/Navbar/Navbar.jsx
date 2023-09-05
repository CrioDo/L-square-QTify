import React from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import styles from './Navbar.module.css'
import Search from '../SearchBar/Search'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Logo />
        <Search placeholder='Search an album of your choice'/>
        <Button children='Give Feedback'/>
    </nav>
  )
}

export default Navbar