import React from "react";
import styles from "./Hero.module.css"
import { ReactComponent as Headphone } from "../../assets/headphone.svg";
function Hero(){
    return (
        <div  className={styles.wrapper}>
            <div>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1> Over thousands podcast episodes</h1>
            </div>
            <div>
                <Headphone/>    
            </div>
        </div>
    )
}

export default Hero;