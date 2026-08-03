import React from "react";
import styles from "./Faq.module.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Faq({ faqs }) {
    return (
        <Container maxWidth="sm">
            <div className={styles.faq}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container direction="row"
                        sx={{
                            justifyContent: "center"
                        }}>
                        <Typography gutterBottom variant="h1" component="div" sx={{
                            color: "var(--color-white)",
                            fontWeight: "600",
                            fontSize: "50px",
                            marginTop: "10px",
                            textAlign: "center",
                        }}>
                            FAQS
                        </Typography>
                    </Grid>
                </Box>
                {faqs.map((faq, index) => (
                    <Accordion key={index} sx={{
                        borderRadius: "10px",
                        border: "1px",
                        marginBottom: "10px",
                        borderColor: "var(--color-white)",
                    }}>
                        <AccordionSummary sx={{
                            backgroundColor: "var(--color-black)",
                            color: "var(--color-white)"
                        }} expandIcon={<ExpandMoreIcon sx={{ color: "var(--color-white)" }} />}
                        >
                            <h3>{faq.question}</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p style={{ textAlign: "left" }}>{faq.answer}</p>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </Container >
    );
}