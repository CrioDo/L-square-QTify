import React, { useEffect ,useState} from "react";
// import {ReactComponent as LeftArrow} from "../../../assets/leftarrow.svg"
import { useSwiper } from "swiper/react";
import style from "./CarouselLeft.module.css"

import { ReactComponent as LeftArrow } from "../../../assets/leftarrow.svg";

const CarouselLeft = () => {
    const swiper =useSwiper();
    const [isBeginning,setisBeginning]=useState(swiper.isBeginning);
    useEffect(()=>{
            swiper.on("slideChange",function(){
                setisBeginning(swiper.isBeginning);
            })
           },[]);
    return (
        <div className={style.left}>             
         <LeftArrow onClick={()=>swiper.slidePrev()}/> 
            {/* {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}/>} */}
        </div>
    );
};

export default CarouselLeft;