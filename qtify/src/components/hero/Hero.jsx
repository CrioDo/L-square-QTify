import React from 'react';
import stylehero from "./Hero.module.css"
import heroimg from "../../assets/hero.png"
const Hero=()=>{
    return (
        <div className={stylehero.hero}>
            <div>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <div>
              <img src={heroimg} alt="heroimage" width={212}/> 
            </div>
        </div>
    );
}
export default Hero;