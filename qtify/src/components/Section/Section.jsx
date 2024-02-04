import React from 'react'
import styles from './Section.module.css'
import { useState } from 'react';
import {CircularProgress } from '@mui/material';
import Card  from '../Card/Card'
import { Carousel } from '../Carousel/Carousel';
const Section = ({data,title,type}) => {
    const [carouselToggle , setCarouselToggle] = useState(true);

    const handleToggle =() => {
        setCarouselToggle(!carouselToggle);
    }
 
  return (
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toogleText} onClick={handleToggle}> 
                {!carouselToggle ? "Collapse all" : "Show All"}
            </h4>
        </div>
        {
            data.length === 0 ? (
                <CircularProgress/>
            ):(
                <div className={styles.cardsWrapper}>
                    {!carouselToggle ? (<div className={styles.wrapper}> 
                        {data.map((ele) => (
                            <Card data={ele} type={type}/>
                        ))}
                    </div>):
                    (<Carousel data={data} renderComponent={(ele) => <Card data={ele} type={type}/>}/>)
                    }
                </div>
            )
        }
    </div>
  )
}

export default Section