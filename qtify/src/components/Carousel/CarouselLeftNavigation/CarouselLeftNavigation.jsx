import React from "react";
import styles from "./CarouselLeftNavigation.module.css";
import { ReactComponent as LeftArrow } from "../../../assets/Group 3741.svg";
import { useSwiper } from "swiper/react";

function CurousalLeftNavigation () {
    const swiper = useSwiper();
    const [isBegining, setIsBegining] = useState(swiper.isBeginning);

    useEffect(() => {
       swiper.on("slideChange", function(){
          setIsBegining(swiper.isBegining);
    })
}, []);
return (
    <div className={styles.leftNavigation}>
        {!isBegining &&  <LeftArrow onClick={() => swiper.slidePrew()} />}
    </div>
)

}

export default CurousalLeftNavigation;