import React, { useEffect, useState } from 'react';
import styles from './FAQ.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';


export default function FAQ() {
    const [faqData, setFaqData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('https://qtify-backend-labs.crio.do/faq');
            const data = response.data.data;
            setFaqData(data);
        }
        fetchData();
    }, []);

    return (
        <div className={styles.faqContainer}>
            <h1 className={styles.faqTitle}>FAQs</h1>
            <div className={styles.faqItem}>
                {faqData.map((item, index) => (
                    <Accordion key={index} style={{ borderRadius: '10px', marginBottom: '5px' }} {...(index === 0 ? { defaultExpanded: true } : {})} >
                        <AccordionSummary className={styles.questionContainer} expandIcon={<ExpandMoreIcon sx={{ fill: '#34C94B', width: '2rem', height: '2rem' }} />} aria-controls="panel1-content" id="panel1-header">
                            <Typography className={styles.question} component="span">{item.question}</Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{ padding: '18px 14px' }} className={styles.answerContainer}>
                            <Typography>
                                {item.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))};
            </div>

        </div>
    )
}