import React from 'react';
import styles from "./Navbar.module.css";
import Search from '../Search/Search';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import qtify from '../../assets/qtify.png';
import headphone from '../../assets/headphone.png';

function Navbar() {

    return (
        <div>
            <nav className={styles.navbar}>
                {/* <Logo qtify={qtify} headphone={headphone} /> */}
                <Logo />
                <Search placeholder={"Search a album of your choice"} />
                <Button >Give Feedback</Button>
            </nav>
        </div>
    )
}

export default Navbar