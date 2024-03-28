import React, { useState } from "react";
import stylecss from "./Section.module.css"

import {CircularProgress} from "@mui/material"
import Carousel from "../Carousel/Carousel";
import Cards from "../Card/Card"

 const Section=({title,data,type,filterfn})=>{
    
    const [carouselToggle,setcarouselToogle]=useState(true);
   
   function handlebutton(){
    setcarouselToogle((preState)=>!preState)
   }
   return (
        <>

            {/* // title newalbum  */}
            <div className={stylecss.title}>
                <h3>{title}</h3>
                <h3 className={stylecss.textcolor} onClick={handlebutton}>{carouselToggle?("Show All"):("Collapse")}</h3>
            </div>

        


           {data.length===0?
           (<CircularProgress/>):

         //show all and carousel when  carouselToggle is true 
           
          (<div>
           
        {carouselToggle? 
             // true ----anonymous function ()=>{}
             (<Carousel data={data} CardComponent={(data)=><Cards data={data} type={type}/>} />):
            // false 
            (<div className={stylecss.cardContainer} >{data.map((ele)=>(<Cards data={ele} type={type}/>))}</div>) 

          }
      </div> )} 
       </>)
          
}
export default Section;