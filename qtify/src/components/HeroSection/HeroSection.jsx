import React from "react";
import styles from "./HeroSection.module.css";
import Headphone from "../../assets/headphone.svg";

const HeroSection = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.heroImageWrapper}>
					<div className={styles.banner}>
						<h1>100 Thousand Songs, ad free</h1>
						<h1>Over thousands podcast episodes</h1>
					</div>
					<div>
						<img src={Headphone} alt="Headphone" height="212px" width="212px" />
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
