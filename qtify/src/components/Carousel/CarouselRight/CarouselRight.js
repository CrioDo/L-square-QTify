import React, { useEffect ,useState} from "react";
import {ReactComponent as RightArrow} from "../../../assets/rightarrow.svg"
import { useSwiper } from "swiper/react";
import style from "./CarouselRight.module.css"
const CarouselRight=()=>{
    const swiper =useSwiper();
    const [isEnd,setisEnd]=useState(swiper.isEnd);
   useEffect(()=>{
    swiper.on("slideChange",function(){
        setisEnd(swiper.isEnd);
    })
   },[]);
   
   return(<div className={style.right}>
    {/* begining illana kaittu' */}
    <RightArrow onClick={()=>swiper.slideNext()}/>

 {/* {!isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>}  */}
    </div>)
}
export default CarouselRight;