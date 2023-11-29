import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "./FeedBackModal.module.css";
import { ReactComponent as CrossBtn } from "../../../assets/crossBtn.svg";
import { errorHandler } from "../../../config/helper-methods";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const FeedBackModal = ({ isOpen, onSuccess, onDismiss }) => {
	const [formFields, setFormFields] = useState({
		fullName: "",
		emailId: "",
		subject: "",
		description: "",
	});

	const _resetState = () => {
		const newFormFields = { ...formFields };
		Object.keys(newFormFields).forEach((key) => (newFormFields[key] = ""));
		setFormFields(newFormFields);
	};

	const _onSuccess = () => {
		onSuccess();
		_handleClose();
	};

	const _handleClose = () => {
		_resetState();
		onDismiss();
	};

	const _handleChange = (name, event) => {
		const value = event.target.value;
		setFormFields((prevFormFields) => ({
			...prevFormFields,
			[name]: value,
		}));
	};

	const _handleSubmit = () => {
		if (!fullName || !emailId || !subject || !description) {
			errorHandler({ reason: "Please fill in all required fields." });
			return;
		}
		// api call
		_onSuccess();
	};

	const { fullName, emailId, subject, description } = formFields;
	return (
		<div>
			<Modal
				className={styles.modalWrapper}
				open={isOpen}
				onClose={_handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<Box sx={style} className={styles.wrapper}>
					<div className={styles.header}>
						<h3>Feedback</h3>
						<h4 onClick={_handleClose}>{<CrossBtn />}</h4>
					</div>

					<div className={styles.inputWrapper}>
						<input
							className={styles.input}
							placeholder="Full name"
							type="text"
							value={fullName}
							name="fullName"
							onChange={(e) => {
								_handleChange("fullName", e);
							}}
						/>
						<input
							className={styles.input}
							placeholder="Email ID"
							type="email"
							value={emailId}
							name="emailId"
							onChange={(e) => {
								_handleChange("emailId", e);
							}}
						/>
						<input
							className={styles.input}
							placeholder="Subject"
							type="text"
							value={subject}
							name="subject"
							onChange={(e) => {
								_handleChange("subject", e);
							}}
						/>
						<textarea
							className={styles.description}
							placeholder="Description"
							value={description}
							name="description"
							onChange={(e) => {
								_handleChange("description", e);
							}}
						/>
					</div>

					<div>
						<div onClick={_handleSubmit} className={styles.btnContainer}>
							Submit Feedback
						</div>
					</div>
				</Box>
			</Modal>
		</div>
	);
};

export default FeedBackModal;
