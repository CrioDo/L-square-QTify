import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "./Accordians.module.css";

export const Accordian = ({ title, details }) => {
  return (
    <div className={styles.container}>
      <Accordion className={styles.accordian}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon style={{ color: "var(--color-primary)" }} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.summarytext}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.details}>
          {details.map((ans) => (
            <Typography className={styles.detailstext}>{ans}</Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
