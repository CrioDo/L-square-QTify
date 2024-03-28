import React from "react";
import style from "./Songs.module.css";
import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Carousel from "../Carousel/Carousel";
import Cards from "../Card/Card";

const Songs = ({ title, data, type, filterfn, songdata }) => {
  const [genre, setgenre] = useState([]);
  const [song, setsong] = useState([]);
  const [filters, setfilters] = useState([]);
  const [value,setvalue]=useState(0);
  //console.log(genre)
  useEffect(() => {
    filterfn().then((response) => {
      const genredata = response.data;

      setgenre([{ key: "all", label: "All" }, ...genredata]);
    });

    songdata().then((Responsedata) => {
      const songData = Responsedata;
      setsong([...songData]);
      console.log(song);

    });
  }, []);
  //console.log(song);
  const handleChange = (e,newvalue) => {
    setvalue(newvalue);
    let clicktabs=e.target.id;
   
   // console.log(clicktabs);
    if (clicktabs === "all") {
      setfilters(song);
      return;
    }
    let fileteredSong = song.filter((ele) => ele.genre.key === clicktabs);
    setfilters(fileteredSong);
    return;
  };
 console.log(filters);
 
  return (
    <div>
      <div className={style.title}>
        <h3 className={style.title1}>{title}</h3>
      </div>
      <div className={style.tab}>
        {" "}
        {/* value 0 means default -1st thing is clicked  */}
        <Tabs value={value} onChange={handleChange}>
          {genre &&
            genre.map((ele, index) => (
              <Tab
                style={{
                  color: "#ffffff",
                  fontFamily: "Poppins",
                  fontWeight: "200",
                 

                }}
                label={ele.label}
                id={ele.key}
                key={ele.key}
                value={index}
              />
            ))}{" "}
        </Tabs>
      </div>
      <div>
        {filters.length!==0 ?(
          <Carousel
            data={filters}
            CardComponent={(data) => <Cards data={data} type={type} />}
          />
        ):<Carousel
        data={song}
        CardComponent={(data) => <Cards data={data} type={type} />}
      />}
      </div>
    </div>
  );
};
export default Songs;