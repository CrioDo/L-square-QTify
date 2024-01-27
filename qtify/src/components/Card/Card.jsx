import React from "react";
import styles from "./Card.module.css";

function Card({data ,type}){
    const {image , title , likes} = data;
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img src={image} alt="song" loading="lazy"/>
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

export default Card;