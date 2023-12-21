import React from 'react';
import styles from "./Navbar.module.css";
import Search from '../Search/Search';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Navbar({ searchData }) {

    return (
        <div>
            <nav className={styles.navbar}>
                <Link to='/' >
                    <Logo />
                </Link>
                <Search placeholder={"Search a album of your choice"} />
                <Button >Give Feedback</Button>
            </nav>
        </div>
    )
}

export default Navbar