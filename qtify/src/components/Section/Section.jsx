import React, { useEffect, useState } from 'react'
import styles from "./Section.module.css"
import { CircularProgress } from '@mui/material'
import Card from '../Card/Card'
import Carousel from '../Carousel/Carousel'
import Filters from '../Filters/Filters'


function Section({ title, data, filterSource, type }) {

    const [carouselToggle, setCarouselToggle] = useState(true);
    const [filters, setFilters] = useState([{ key: 'all', label: 'All' }]);
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

    const handleCarousel = () => {
        setCarouselToggle(!carouselToggle);
    };

    useEffect(() => {
        if (filterSource) {
            filterSource().then((response) => {
                const { data } = response;
                setFilters([...filters, ...data]);
            });
        }
        // eslint-disable-next-line
    }, []);

    const showFilters = filters.length > 1;
    const cardToRender = data.filter((card) => showFilters && selectedFilterIndex !== 0 ? card.genre.key === filters[selectedFilterIndex].key : card);

    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                {!showFilters && (<h4 onClick={handleCarousel} className={styles.toggle}>{!carouselToggle ? "Collapse All" : "Show All"}</h4>)}
            </div>
            {showFilters && (
                <div className={styles.filterWrapper}>
                    <Filters
                        filters={filters}
                        selectedFilterIndex={selectedFilterIndex}
                        setSelectedFilterIndex={setSelectedFilterIndex}
                    />
                </div>
            )}
            {
                cardToRender.length === 0 ? (
                    <CircularProgress />
                ) : (
                    <div className={styles.cardWrapper}>
                        {
                            !carouselToggle ? (
                                <div className={styles.wrapper}>
                                    {cardToRender.map((ele) =>
                                        (<Card data={ele} type={type} key={ele.id} />)
                                    )}
                                </div>
                            ) : (
                                <div>

                                    <Carousel
                                        data={cardToRender} renderComponent={(data) => <Card data={data} type={type} />}
                                    />
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>

    )
}

export default Section