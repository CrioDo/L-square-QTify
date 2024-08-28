import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { Box } from "@mui/material";
import styles from './Navbar.module.css';
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";

// for modal
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    // for modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        description: ""
    });

    function handleOnChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit() {
        handleClose();
        setFormData({
            name: "",
            email: "",
            subject: "",
            description: ""
        });
    }

    return (
        <Box className={styles.navbar}>
            <Logo />
            <SearchBar />
            <Button text="Give Feedback" handleOpen={handleOpen} />
            {/* for modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={styles.modal_box}>
                    <Box className={styles.modal_header}>
                        <h3> </h3>
                        <h3>Feedback</h3>
                        <button 
                            className={styles.close_button}
                            onClick={handleClose}
                        >
                            <CloseIcon sx={{height: '16px', width: '10px'}} />
                        </button>
                    </Box>
                    <Box className={styles.form_box}>
                        <input
                            name="name" 
                            type="text"
                            value={formData.name}
                            placeholder="Full name"
                            onChange={handleOnChange}
                        />
                        <input
                            name="email" 
                            type="email"
                            value={formData.email}
                            placeholder="Email ID"
                            onChange={handleOnChange}
                        />
                        <input
                            name="subject" 
                            type="text"
                            value={formData.subject}
                            placeholder="Subject"
                            onChange={handleOnChange}
                        />
                        <textarea
                            name="description" 
                            type="text"
                            value={formData.description}
                            placeholder="Description"
                            onChange={handleOnChange}
                            style={{height: '128px', resize: 'none'}}
                        />
                        <Box sx={{display: 'flex', justifyContent: 'center'}}>
                            <button 
                                className={styles.submit_button}
                                onClick={handleSubmit}
                            >
                                Submit Feedback
                            </button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

export default Navbar;