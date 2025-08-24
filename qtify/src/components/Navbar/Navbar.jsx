import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import Searchbar from '../Searchbar/Searchbar'
import Modal from '../Modal/Modal'
import { useState } from 'react'
import close from '../../assets/close.png'

function Navbar() {

    const [openModal, setModalOpen] = useState(false)

    return (<nav className={styles.navbar}>
        <a href='/'><Logo /></a>
        <Searchbar />
        <Button handleClick={() => setModalOpen(true)}>Give Feedback</Button>
        <Modal closeModal={() => setModalOpen(false)} open={openModal}>
            <div className={styles.modalwrapper}>
                <h3>Feedback</h3>
                <button className={styles.closeModal} onClick={() => setModalOpen(false)}>
                    <img src={close} height={16} />
                </button>
                <form>
                    <input type='text' placeholder='Full name' required />
                    <input type="email" placeholder='Email ID' required />
                    <input type="text" placeholder='Subject' />
                    <textarea placeholder='Description'></textarea>
                    <button>Submit Feedback</button>
                </form>
            </div>
        </Modal>
    </nav>)
}

export default Navbar