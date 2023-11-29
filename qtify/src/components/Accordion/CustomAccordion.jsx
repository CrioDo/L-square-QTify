import React, { useState } from "react";
import styles from "./CustomAccordion.module.css";
import { ReactComponent as UpArrowIcon } from "../../assets/upArrow.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/downArrow.svg";

const CustomAccordion = ({ data }) => {
	const [show, setShow] = useState(false);

	const _handleClick = () => {
		setShow(!show);
	};

	const { question, answer } = data;
	return (
		<div className={styles.wrapper}>
			<div className={styles.questionWrapper}>
				<h3>{question}</h3>
				<p onClick={_handleClick}>
					{show ? <UpArrowIcon /> : <DownArrowIcon />}
				</p>
			</div>
			{show && <p className={styles.answerWrapper}>{answer}</p>}
		</div>
	);
};

export default CustomAccordion;
