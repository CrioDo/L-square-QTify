import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./faq.module.css";
import "./acoStyles.css";

export default function Faq() {
  let [faqList, SetFaqList] = useState([]);
  let [accoList, setAccoList] = useState([]);
  useEffect(() => {
    (async () => {
      let list = await axios.get("https://qtify-backend-labs.crio.do/faq");
      SetFaqList(list.data.data);
    })();
  }, []);
  useEffect(() => {
    if (faqList.length) {
      let list = faqList.map((ele, idx) => {
        let expand = idx === 0 ? "defaultExpanded" : "";
        return (
          <Accordion
            className={styles.Accbody}
            defaultExpanded={idx === 0 ? true : false}
            key={idx}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="Btn" fontSize="large" />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={styles.AcoHeader}
            >
              {ele.question}
            </AccordionSummary>
            <AccordionDetails className={styles.ans}>
              {ele.answer}
            </AccordionDetails>
          </Accordion>
        );
      });
      setAccoList(list);
    }
  }, [faqList]);
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>FAQs</h1>
      <div className={styles.accoContainer}>{accoList}</div>
    </div>
  );
}