import { CircularProgress ,Box} from "@mui/material";
import Cards from "../Cards/Cards";
import styles from "../Section/Section.module.css";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../BasicTabs/BasicTabs";
import {useState} from "react";


const Section = ({ title, data, type ,filteredDataValues=[],value,handleChange}) => {
  // const [carouselToggel, setCarouselToggle] = useState(true);

  // const handleToggle = () => {
  //       setCarouselToggle(!carouselToggel);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
       
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {!toggle ? "Show All" : "Collapse All"}
          </h4>
        
      </div>
      {type === "song" ? <BasicTabs value={value} handleChange={handleChange} /> : null}
      {data.length === 0 ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress />
        </Box>
      ) : 
        <div className={styles.cardsWrapper}>
          {toggle ? 
            <div className={styles.wrapper}>
              { filteredDataValues.map((item) => {
                return (<Cards data={item} type={type}/>)
              })}
            </div>
           :(
            <Carousel data={filteredDataValues} renderCardComponent={(data)=><Cards data={data} type={type} key={data.id} />} />
      
          )}
        </div>
      }
    </div>
  );
};

export default Section;
