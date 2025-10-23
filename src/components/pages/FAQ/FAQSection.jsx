import React, { useState, useEffect, useRef } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    CircularProgress,
    Alert,

} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";



const FAQ_API = "https://qtify-backend.labs.crio.do/faq";

const FAQSection = () => {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (_, isExpanded) =>
        setExpanded(isExpanded ? panel : false);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                setLoading(true);
                const response = await axios.get(FAQ_API);
                setFaqs(response.data.data || []);
            } catch (err) {
                console.error("FAQ fetch error:", err);
                setError("Failed to fetch FAQs");
            } finally {
                setLoading(false);
            }
        };

        fetchFAQs();
    }, []);

    if (loading) return <CircularProgress />;
    if (error) return <Alert severity="error">{error}</Alert>;

    return (
        <Box sx={{ width: "600px", height: "auto", margin: "0 auto" }}>
            <Typography variant="h5" gutterBottom>
                Frequently Asked Questions
            </Typography>
            {faqs.map((faq, i) => {
                const isOpen = expanded === i;

                return (
                    <Box key={faq.id || i} sx={{ mb: 1 }}>
                        <Accordion
                            expanded={isOpen}
                            onChange={handleChange(i)}
                            sx={{
                                backgroundColor: "black",
                                color: "white",
                                border: "1px solid #fff",
                                borderRadius: "5px",
                                "&:before": { display: "none" },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon size={40} fontSize="large"
                                        sx={{
                                            color: "#20f731",
                                            transform: isOpen ? "rotate(360deg)" : "rotate(0deg)",
                                            transition: "transform 0.3s ease",
                                        }}
                                    />
                                }
                            >
                                <Typography fontWeight="bold">{faq.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    backgroundColor: "#ffffff",
                                    borderTop: "1px solid #333",
                                    color: "#000000",
                                    textAlign: "left",
                                }}
                            >
                                {faq.answer}
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                );
            })}
        </Box>
    );
}


export default FAQSection