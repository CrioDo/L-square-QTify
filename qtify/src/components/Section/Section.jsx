import React, { useState } from 'react'
import styles from './Section.module.css';
import { CircularProgress } from '@mui/material';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
const Section = ({data,title,type}) => {
    const [toggle,setToggle] = useState(true);
    const handleToggle = () => {
        setToggle(!toggle);
    }
  return (
    <div>
    <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
            {toggle ?("Show All") : ("Collapse")}
        </h4>
    </div>
    {data.length === 0 ? (<CircularProgress/>) : 
    (
        <div className={styles.cardWrapper}>
            {!toggle ? 
            (<div className={styles.wrapper}>
            {
                data.map((ele) => (
                    <Card data={ele} type={type} key={ele.id}/>
                ))
            }
            </div>
            ) :
            (<Carousel data={data} renderCardComponent={(data) => <Card data={data} type={type}/>}/>)
            }
        </div>
    )
    }
    </div>
    
  )
        
}

export default Section