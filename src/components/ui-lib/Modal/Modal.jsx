import { useEffect } from "react";
import { Box, Fade, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ open, onClose, title, children, width = 400 }) => {
    // Disable background scrolling when modal is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    if (!open) return null;

    return (
        <Fade in={open} timeout={300}>
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    bgcolor: "rgba(0,0,0,0.7)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1300,
                }}
                onClick={onClose}
            >
                <Box
                    sx={{
                        position: "relative",
                        bgcolor: "background.paper",
                        p: 2,
                        borderRadius: 2,
                        boxShadow: 24,
                        width,
                    }}
                    onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
                >
                    <IconButton
                        onClick={onClose}
                        sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            color: "#34c94b",
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {title && (
                        <Typography sx={{ color: "#000000ff" }} variant="h6" gutterBottom>
                            {title}
                        </Typography>
                    )}

                    {children}
                </Box>
            </Box>
        </Fade>
    );
};

export default Modal;
