import React from 'react';
import styles from "./Card.module.css";
import { Chip, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';


function Card({ data, type }) {
    const getCard = (type) => {
        switch (type) {
            case "album": {
                const { image, title, follows, songs, slug } = data;
                return (
                    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
                        <Link to={`/album/${slug}`}>
                            <div className={styles.wrapper}>
                                <div className={styles.card}>
                                    <img src={image} alt="song" loading="lazy" />
                                    <div className={styles.banner}>
                                        <Chip label={`${follows} Follows`}
                                            size="small"
                                            className={styles.chip} />
                                        {/* <div className={styles.pill}>
                                            <p>{likes} Follows</p>
                                        </div> */}
                                    </div>
    
                                </div>
                                <div className={styles.titleWrapper}>
                                    <p>{title}</p>
                                </div>
                            </div>
                        </Link>
                    </Tooltip >
                )
    
            }
            case "song": {
                const { image, likes, title } = data;
                return (
                    <div className={styles.wrapper}>
                        <div className={styles.card}>
                            <img src={image} alt="song" loading="lazy" />
                            <div className={styles.banner}>
                                <div className={styles.pill}>
                                    <p>{likes} Likes</p>
                                </div>
                            </div>
    
                        </div>
                        <div className={styles.titleWrapper}>
                            <p>{title}</p>
                        </div>
                    </div>
                )
            }
            default: return <></>;
        }
    }
    return getCard(type);
}

export default Card