import React, { useState } from "react";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import FeedBackModal from "../Modals/FeedBackModal/FeedBackModal";
import { showToast } from "../../config/helper-methods";
import { useNavigate } from "react-router-dom";

const NavBar = ({ data, logo = true, search = true, feedback = true }) => {
	const [isFeedBackModalOpen, setIsFeedBackModalOpen] = useState(false);
	const navigate = useNavigate();

	const _toggleFeedBackModal = (value = false) => {
		setIsFeedBackModalOpen(value);
	};

	const _onSuccess = () => {
		// show toast
		showToast("Feedback Submitted", "success");
	};

	return (
		<div className={styles.wrapper}>
			<nav className={styles.navbar}>
				<div className={styles.logoWrapper} onClick={() => navigate(`/`)}>
					{logo ? <Logo id={styles.logo} /> : null}
				</div>
				{search ? (
					<div className={styles.searchWrapper}>
						<SearchBar
							placeholder="Search a album of your choice"
							data={data}
						/>
					</div>
				) : null}

				{feedback ? (
					<button
						className={styles.nav_link}
						onClick={() => _toggleFeedBackModal(true)}>
						Give Feedback
					</button>
				) : null}
			</nav>
			<FeedBackModal
				isOpen={isFeedBackModalOpen}
				onSuccess={_onSuccess}
				onDismiss={_toggleFeedBackModal}
			/>
		</div>
	);
};

export default NavBar;
