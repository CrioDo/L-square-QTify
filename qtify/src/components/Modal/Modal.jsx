import React from 'react'
import styles from './Modal.module.css'
import MuiModal from '@mui/material/Modal'

function Modal({children, closeModal, open}) {
    return(<MuiModal open={open} onClose={closeModal}>
        <>{children}</>
    </MuiModal>)
}

export default Modal