import React from 'react'
import styles from './Card.module.css'
import Chip from '@mui/material/Chip';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

function Card({ data, type }) {

    if (type == "album") {
        return (
            <Tooltip title={`${data.songs.length} Songs`} placement="top" arrow>
                <Link href='/'>
                <div className={styles.card}>
                    <div className={styles.banner}>
                        <img src={data.image} />
                        <Chip label={`${data.follows} Follows`} className={styles.chip} size="small" />
                    </div>
                    <p>{data.title}</p>
                </div>
                </Link>
            </Tooltip>
        )
    }

    return (
        <div className={styles.card}>
            <div className={styles.banner}>
                <img src={data.image} />
                <Chip label={`${data.likes} Likes`} className={styles.chip} size="small" />
            </div>
            <p>{data.title}</p>
        </div>
    )
}

export default Card