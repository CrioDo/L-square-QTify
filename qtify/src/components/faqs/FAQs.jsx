import styles from './faqs.module.css'
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import expandIcon from '../../assets/expand-icon.png'

function FAQs() {

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            expandIcon={<img src={expandIcon} width={28} />}
            {...props}
        />
    ))(({ theme }) => ({
        backgroundColor: '#121212',
        color : '#fff',
        border: '1px solid #fff',
        borderRadius : '10px',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            
        },
        '& .MuiAccordionSummary-content': {
            marginTop : '20px',
            marginBottom : '20px'
        },
    }));

    return (
        <section className={styles.faqContainer}>
            <h2 className={styles.heading}>FAQs</h2>
            <div>

                <Accordion style = {{borderRadius: '10px', marginBottom: '24px'}}>
                    <AccordionSummary expandIcon={<img src={expandIcon} width={28} />}>
                        <p className={styles.accordionTitle}>Is QTify free to use?</p>
                    </AccordionSummary>
                    <AccordionDetails style={{paddingTop: '16px'}}>
                        <p className={styles.accordionContent}>Yes! It is 100% free, and has 0% ads!</p>
                    </AccordionDetails>
                </Accordion>

                <Accordion style = {{borderRadius: '10px'}}>
                    <AccordionSummary expandIcon={<img src={expandIcon} width={28} />}>
                        <p className={styles.accordionTitle}>Can I download and listen to songs offline?</p>
                    </AccordionSummary>
                    <AccordionDetails style={{paddingTop: '16px'}}>
                        <p className={styles.accordionContent}>Sorry, unfortunately we don't provide the service to download any songs.</p>
                    </AccordionDetails>
                </Accordion>

            </div>
        </section>)
}

export default FAQs