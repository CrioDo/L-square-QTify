import React from "react";
import styles from "./Card.module.css";
import { Tooltip , Chip} from "@mui/material"

function Card({data ,type}){
    const getCard = (type) => {
        switch(type){
            case "album": {
                const {image,follows,title,slug,songs} = data;
                return (
                    <Tooltip title={`${songs.length} songs`} placement="top" arrow> 
                        <div className={styles.wrapper}>
                            <div className={styles.card}>
                                <img src={image} alt='album'/>
                                <div className={styles.banner}>
                                    <div className={styles.pill}>
                                        <p>{follows} Follows</p>
                                    </div>
                                    {/* <Chip label={`${follows} Follows`} size="small" className={styles.pill}/> */}
                                </div>
                            </div>
                            <div className={styles.titleWrapper}>
                                <p>{title}</p>
                            </div>
                        </div>
                    </Tooltip>
                )
            }
            case "song": {
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
            default:
                return <></>
        }
    }
    
    return getCard(type);
}

export default Card;