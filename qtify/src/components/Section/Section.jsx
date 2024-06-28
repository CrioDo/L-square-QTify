import React, { useState } from 'react'
import { CircularProgress } from '@mui/material';
import Card from "../Card/Card";
import styles from "./Section.module.css"
import Carousel from '../Carousel/Carousel';

// eg of data recieved is:
// type='album' title='Top Albums' data={topAlbumSongs}
// here, topAlbumSongs is just an array of 16-17 albums with some info and an array of songs in that album

const Section=({type,title,data,toggle=true})=> {

// if carouselToggle is true means render "collapsed" view (ie corousel of albums) and  on the button provide "show all" text
// if carouselToggle is false means render "show all" view (ie All albums ) and  on the button provide "Collapse all" text
    const[carouselToggle,setCarouselToggle]=useState(true);

    const handleToggle=()=>{
        setCarouselToggle(!carouselToggle);
    }

  return (
    <div>
     {/* small top div with Name of section and "show all/collepse all" button */}
        <div className={styles.sectionTop}>
            <h3>{title}</h3>
            <h4 onClick={handleToggle} className={styles.toggleText}>

            {/*  check if we want to show the show/collapse button or not */}
            {toggle?(
                 carouselToggle?"Show All":"Collapse All"
            ):(
                <></>
            )}
            </h4>
        </div>
        
        {data.length?(
            <div className={styles.sectionInnerWrapper}>
             {/* here, if carouselToggle is false then show first condition here(means "show all albums"), else show second (means show "Collpased view with corousel")*/}
            {!carouselToggle?(
                <div className={styles.showAllWrapper}>
                {data.map((album)=>(
                    //show card here
                    <Card data={album} type={type} key={album.id}/>
                ))}
                </div>
            ):(
              <div>
              {/* show carousel here */}
              <Carousel data={data} renderCardComponent={(data)=><Card data={data} type={type}/>}/>
              </div>  
            )}
            </div>
        ):(
            <div className={styles.progressBar}>
            {/* when no data recieved just show circular loading icon */}
            <CircularProgress />
            </div>
        )}

    </div>
  )
}

export default Section;

/**
 Notes:
A.)Why are we passing the function "renderCardComponent" as a prop to carousel, can'nt we use the card component directly in carousel component?
    1. Separation of Loigc: By passing the rendering logic (renderCardComponent) from the carousel to the section, you separate concerns. 
          The carousel component should primarily handle the presentation of the carousel itself, while the section component should handle how the data is rendered within the carousel.

    2. Scalability: If you have multiple sections with different types of carousels or data structures, using a rendering function 
        allows you to handle each case appropriately without cluttering the carousel component with conditional rendering logic

    3. Reducing the import cost, by not importing the card component in the carousel.
 */