import React, { useState } from 'react'
import styles from "./Section.module.css"
import { CircularProgress } from '@mui/material'
import Card from '../Card/Card'
import Carousel from '../Carousel/Carousel'


function Section({ title, data, type }) {

    const [carousel, setCarousel] = useState(false);
    const handleCarousel = () => {
        setCarousel(!carousel);
    };

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 onClick={handleCarousel} className={styles.toggle}>{carousel ? "Show All" : "Collapse" }</h4>
            </div>
            {
                data.length === 0 ? (<CircularProgress />) :
                    (
                        <div className={styles.cardWrapper}>
                            {!carousel ? (
                                <div className={styles.wrapper}>
                                    {data.map((item) =>
                                        <Card type={type} data={item} />
                                    )}
                                </div>
                            ) : (
                                <Carousel data={data} component={(item) => <Card type={type} data={item} />} />
                                )
                            }
                        </div>
                    )
            }
        </div>
    )
}

export default Section