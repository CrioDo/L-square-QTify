import React, {useEffect, useState } from "react";
import styles from "./section.module.css";
import { Circularprogress} from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carouse)";
import Filters from "../Filters/Filters";
// import {Filters} from "@mui/icons-material";

export default function Section({ title, data,filterSource, type}) {
    const [carouselToggle, setCarouselToggle] = useState(true);
    const [filters, setFilters] = useState([{key: "all", label: "All"}])
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0)

    const handleToggle = () => {
        setCarouselToggle((prevState) => !prevState);

    }
    useEffect(() => {
        if(filterSource) {
            filterSource().then((response) => {
                const { data } = response;
                setFilters([...filters, ...data]);
            })
        }
    }, [ ]);
    const showFilters = filters.length > 1;
    const cardToRender = data.filters((card) => showFilters && selectedFilterIndex !== 0 ? card.genre.key ===
    filters[selectedFilterIndex].key : card);

   
    return (
        <div>
            <div className={StyleSheet.header}>
                <h3>{title}</h3>
                {!showFilters && (<h4 className={styles.toggleText} onClick={handleToggle}>(!carouselToggle ?
                "Collapse All": "Show All")</h4>)}   
            </div>
            {showFilters && (
                <div className={styles.filterswrapper}>
                        <Filters
                            filters={filters}
                            selectedFilterIndex={selectedFilterIndex}
                            setSelectedFilterIndex={setSelectedFilterIndex}
                        />
                </div>
            )}
            {cardToRender.length === 0 ? (
                <Circularprogress />
            ):(
                <div className={styles.cardWrapper}>
                   {!carouselToggle ? (
                      <div className={styles.wrapper}>
                        {cardToRender.map((ele) => {
                            <Card data={ele} type={type} />
                        })}
                      </div>
                   ): (
                     // Carousel logic will come here
                     <Carousel
                     data={cardToRender}
                     renderComponent={(d) => <Card data={d} type={type} />}
                     />
                   )}    
                </div>     

            )}
        </div>
    )

}

