import React, { useState } from 'react'
import styles from "./Section.module.css"
import { CircularProgress } from '@mui/material'
import Card from '../Card/Card'
// import Carousel from '../Carousel/Carousel'


function Section({ title, data, type }) {

    const [carouselToggle, setCarouselToggle] = useState(true);

    const handleCarousel = () => {
        setCarouselToggle(!carouselToggle);
    };

    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 onClick={handleCarousel} className={styles.toggle}>{!carouselToggle ? "Collapse All" : "Show All"}</h4>
            </div>
            {
                data.length === 0 ? (
                    <CircularProgress />
                ) : (
                    <div className={styles.cardWrapper}>
                        {
                            !carouselToggle ? (
                                <div className={styles.wrapper}>
                                    {data.map((ele) =>
                                        (<Card data={ele} type={type} key={ele.id} />)
                                    )}
                                </div>
                            ) : (
                                <></>
                            )
                        }
                    </div>
                )
            }
        </div>

    )
}

export default Section