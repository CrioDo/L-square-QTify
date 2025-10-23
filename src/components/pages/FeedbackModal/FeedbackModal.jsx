import { TextField, Box } from "@mui/material";
import { useState } from "react";
import Modal from "../../ui-lib/Modal/Modal";
import Button from "../Button/Buttion";

const FeedbackModal = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        feedback: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        console.log("Feedback submitted:", formData);
        alert("Thank you for your feedback!");
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose} title="Feedback Form" width={500}>
            <Box>
                {["name", "email", "subject"].map((field) => (
                    <TextField
                        key={field}
                        name={field}
                        label={field === "name" ? "Full name" : field === "email" ? "Email ID" : "Subject"}
                        value={formData[field]}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: '#34c94b' },
                                '&:hover fieldset': { borderColor: '#20f731' },
                                '&.Mui-focused fieldset': { borderColor: '#0f9d58' },
                            },
                        }}
                    />
                ))}

                <TextField
                    name="feedback"
                    label="Description"
                    value={formData.feedback}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: '#34c94b' },
                            '&:hover fieldset': { borderColor: '#20f731' },
                            '&.Mui-focused fieldset': { borderColor: '#0f9d58' },
                        },
                    }}
                />

                <Button
                    sx={{ mt: 2, background: "#34c94b", padding: "5px 25px" }}
                    text="Submit feedback"
                    variant="contained"
                    onClick={handleSubmit}
                />
            </Box>
        </Modal>
    );
};

export default FeedbackModal;
