import React, { useState } from "react";
import styles from "./Accordion.module.css";
import { ReactComponent as UpArrows } from "../../assets/UpArrow.svg";
import { ReactComponent as DownArrows } from "../../assets/DownArrow.svg";

const faqItems = [
  {
    id: 1,
    question: "Is QTify free to use?",
    answer: "Yes! It is 100% free, and has 0% ads!",
  },
  {
    id:2,
    question: "Can I download and listen to songs offline?",
    answer:
      "Sorry, unfortunately we don't provide the service to download any songs.",
  }
];

const AccordionItem = () => {
  const [showIndex, setShowIndex] = useState(-1);

  const display = (index) => {
    if (showIndex === index) {
      setShowIndex(-1);
    } else {
      setShowIndex(index);
    }
  };
  return (
    <>
      <h1>FAQs</h1>
     
      <div className={styles.container}>
        <div className={styles.accordionBlock}>
          {faqItems.map((item) => (
            <>
              <div key={item.id} className={styles.questions}>
                <p>{item.question}</p>
                <p onClick={() => display(item.id)}>
                  {showIndex === item.id ? <UpArrows /> : <DownArrows />}
                </p>
              </div>
              <div className={styles.answers}>
                {showIndex === item.id && <p>{item.answer}</p>}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
