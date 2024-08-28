import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styles from './Section.module.css';
import Card from '../Card/Card';
import axios from 'axios';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';
import CarouselLeftNavigation from '../Carousel/CarouselLeftNavigation';
import CarouselRightNavigation from '../Carousel/CarouselRightNavigation';

/**
 * @param {function} setCurrGenresSongsList
 * sets data to songs list
 * @param {list} list
 * all songs list
 * @returns 
 */
const TabsContainer = ({ setCurrGenresSongsList, list }) => {
    const [value, setValue] = useState(0);
    // const allSongsList = useRef(list);

    // const [genre, setGenre] = useState({
    //     "key": "all",
    //     "label": "All"
    // });
    const genreListInitial = [{
        "key": "all",
        "label": "All"
    }];
    const [genresList, setGenresList] = useState(genreListInitial);
    
    useEffect(() => {
        async function fetchData() {
            try{
                const response = await axios.get('https://qtify-backend-labs.crio.do/genres');
                const data = response.data.data;
                setGenresList(genreListInitial.concat(data));
            } catch(e) {
    
            }
        }

        fetchData();
    },[]);

    // useEffect(() => {
    //     async function fetchData() {
    //         try{
    //             // const response = await axios.get()
    //         } catch(e) {
    
    //         }
    //     }

    //     fetchData();
    // }, [genre]);

    const handleGenreChange = (value) => {
        const currGenre = genresList[value].key;
        if(currGenre === 'all') {
            setCurrGenresSongsList(list);
        } else {
            const currGenresSongsList = list.filter((song) => song.genre.key === currGenre);
            setCurrGenresSongsList(currGenresSongsList);
        }
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        handleGenreChange(newValue);
    };

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
        };
    }

    return (
        <Box className={styles.tabs_container}>
            <Tabs 
                value={value} 
                onChange={handleChange}
                TabIndicatorProps={{
                    style: {
                        backgroundColor: "var(--color-primary)",
                    },
                }}
            >
                {
                    genresList.map((genre) => {
                        return (
                            <Tab 
                                key={genre.key} 
                                label={genre.label} 
                                {...a11yProps(genre.key)} 
                                className={styles.tab_button}
                            />
                        );
                    })
                }
            </Tabs>
        </Box>
    );
};

const Controls = ({ list }) => {
    const swiper = useSwiper();

    useEffect(() => {
        swiper.slideTo(0);
    }, [list]);

    return <></>;
};

/**
 * 
 * @param {List<object>} list
 * list of albums or songs 
 * @param {boolean} isAlbum
 * is album or song list
 * @returns 
 */
const Carousel = ({ list, isAlbum }) => {
    
    return (
        <Box>
            <Swiper
                spaceBetween={40}
                slidesPerView={7}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <Controls list={list} />
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                {
                    list.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <Card 
                                    image={item.image}
                                    title={item.title}
                                    follows={ item.follows ? `${item.follows} Follows` : `${item.likes} Likes`}
                                    slug={item.slug}
                                    isAlbum={isAlbum}
                                    noOfSongs={item.songs ? item.songs.length : 0}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </Box>
    );
};

/**
 * 
 * @param {List<object>} list
 * list of albums or songs 
 * @param {boolean} isAlbum
 * is album or song list
 * @returns 
 */
const CardGrid = ({ list, isAlbum }) => {
    return (
        <Box className={styles.card_grid}>
            {
                list.map((item) => {
                    return (
                        <Card 
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            follows={ item.follows ? `${item.follows} Follows` : `${item.likes} Likes`}
                            slug={item.slug}
                            isAlbum={isAlbum}
                            noOfSongs={item.songs ? item.songs.length : 0}
                        />
                    )
                })
            }
        </Box>
    );
};

/**
 * 
 * @param {string} sectionTitle
 * title of section Top, New or Songs
 * @param {List<Object>} list 
 * list of albums or songs, for songs its always all songs list
 * @param {List<Object>} currGenresSongsList
 * list of songs of currently selected genre
 * @param {Function} setCurrGenresSongsList
 * set list of songs for songs
 * @returns {} none
 */

const Section = ({ sectionTitle, list, setCurrGenresSongsList, currGenresSongsList }) => {
    const [isButtonCollapse, setIsButtonCollapse] = useState(true);

    return (
        <>
            <Box className={styles.section_body}>
                <Box className={styles.heading_button_container}>
                    <p className={styles.heading}>
                        {sectionTitle}
                    </p>
                    {
                        (sectionTitle !== 'Songs') 
                            &&
                        <button 
                            className={styles.button}
                            onClick={() => setIsButtonCollapse((prev) => !prev) }
                        >
                            {!isButtonCollapse ? 'Collapse' : 'Show all'}
                        </button>
                    }
                </Box>
                {
                    (sectionTitle === 'Songs') 
                        &&
                    <TabsContainer setCurrGenresSongsList={setCurrGenresSongsList} list={list} />
                }
                {
                    isButtonCollapse
                     ? (
                        <Carousel 
                            list={sectionTitle !== 'Songs'? list : currGenresSongsList} 
                            isAlbum={sectionTitle !== 'Songs'? true : false} 
                        />
                    ) : (
                        <CardGrid 
                            list={list} 
                            isAlbum={sectionTitle !== 'Songs'? true : false} 
                        />
                    )
                }
            </Box>
            {
                (!isButtonCollapse && sectionTitle === 'Top Albums') && <hr className={styles.hr} />
            }
        </>
    );
};

export default Section;