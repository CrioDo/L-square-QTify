import React, { useEffect, useState } from "react";
import { Accordian } from "./Accordian";
import styles from "./FAQSection.module.css";
const AccordianList = [
  {
    title: "Is QTify free to use?",
    details: [
      "Yes! It is 100% free, and has 0% ads!",
      "Yes! It is 100% free, and has 0% ads!",
    ],
  },
  {
    title: "Can I download and listen to songs offline?",
    details: [
      "Sorry, unfortunately we don't provide the service to download any songs.",
    ],
  },
];

export const FAQSection = () => {
  const [accordians, setAccordians] = useState([]);
  useEffect(() => {
    setAccordians(AccordianList);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}> FAQs</div>
      {accordians.map((accordian) => (
        <Accordian title={accordian.title} details={accordian.details} />
      ))}
    </div>
  );
};
