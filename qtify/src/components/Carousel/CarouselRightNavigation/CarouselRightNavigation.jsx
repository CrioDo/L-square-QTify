import React from "react";
import styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/Group 3740.svg";
import { useSwiper } from "swiper/react";

function CurousalLeftNavigation () {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
       swiper.on("slideChange", function(){
          setIsEnd(swiper.isEnd);
    })
}, []);
return (
    <div className={styles.RightNavigation}>
        {!isEnd &&  <RightArrow onClick={() => swiper.slidePrew()} />}
    </div>
)

}

export default CurousalRightNavigation;