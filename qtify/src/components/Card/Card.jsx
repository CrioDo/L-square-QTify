import React from "react";
import { Tooltip, Chip } from "@mui/material";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({ data, type }) => {
	const navigate = useNavigate();

	const getCard = (type) => {
		switch (type) {
			case "album":
				return (
					<Tooltip title={`${data.songs.length} songs`} placement="top" arrow>
						<div
							className={styles.wrapper}
							onClick={() => navigate(`/album/${data?.slug}`)}>
							<div className={styles.card}>
								<img src={data.image} alt="album" />
								<div className={styles.banner}>
									<Chip
										label={`${data.follows} Follows`}
										className={styles.chip}
										size="small"
									/>
								</div>
							</div>
							<div className={styles.titleWrapper}>
								<p>{data.title}</p>
							</div>
						</div>
					</Tooltip>
				);

			case "songs":
				return (
					<div className={styles.wrapper}>
						<div className={styles.card}>
							<img src={data.image} alt="song" loading="lazy" />
							<div className={styles.banner}>
								<div id={styles.pill}>
									<p>{data.likes} Likes</p>
								</div>
							</div>
						</div>
						<div className={styles.titleWrapper}>
							<p>{data.title}</p>
						</div>
					</div>
				);
			default:
				return <></>;
		}
	};

	return getCard(type);
};

export default Card;
