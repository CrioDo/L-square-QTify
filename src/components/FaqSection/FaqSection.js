import { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import styles from './FaqSection.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqSection = () => {
    const [faqList, setFaqList] = useState([]);
    // console.log(faqList)
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://qtify-backend-labs.crio.do/faq');
                setFaqList(response.data.data);
            } catch(e) {

            }
        }

        fetchData();
    }, []);

    return (
        <Box className={styles.faq_body}>
            <p className={styles.faq_title}>FAQs</p>
            <Box className={styles.accordion_body}>
                {
                    faqList.map((item, index) => {
                            return (
                                <Accordion 
                                    key={index}
                                    className={styles.accordion}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon className={styles.accordion_icon} />}
                                        aria-controls={`panel${index}-content`}
                                        id={index}
                                        className={styles.accordion_summary}
                                    >
                                        {item.question}
                                    </AccordionSummary>
                                    <AccordionDetails className={styles.accordion_details}>
                                        {item.answer}
                                    </AccordionDetails>
                                </Accordion>
                            )
                    })
                }
            </Box>
        </Box>
    );
};

export default FaqSection;