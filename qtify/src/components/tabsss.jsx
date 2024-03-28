import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import getGenres from "../axios/getGenurs";
import getSongs from "../axios/getSongs";
import styles from "./songsSection/tabs.module.css";
import CardSwipers from "./songsSection/swipers";
import CardSwiper from "./cardSwipper/cardSwiper";
import { getCardList } from "./genrateCardList";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

async function generateTabList(setGenreList, setTabList) {
  let arr = await getGenres();
  setGenreList(arr);
  let list = arr.map((ele, index) => {
    return (
      <Tab
        label={ele.label}
        {...a11yProps({ index } + 1)}
        key={ele.key}
        className={styles.labelText}
      />
    );
  });
  setTabList(list);
}
async function getAllSongsList(setAllSongsList) {
  let list = await getSongs();
  setAllSongsList(list);
}

// async function generateSwiperOfPanel(list) {
//   console.log("list-> ", list);
//   // let swiperList = await CardSwiper(list);
//   // setCardSwiper(swiperList);
//   // return swiperList;
// }

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function TabTesting() {
  const [value, setValue] = React.useState(0);
  let [tabList, setTabList] = useState([]);
  let [panalList, setPanalList] = useState([]);
  let [cardList, setCardList] = useState([]);
  let [allSongsList, setAllSongsList] = useState([]);
  let [CardSwiper, setCardSwiper] = useState([]);
  let [genreList, setGenreList] = useState([]);

  useEffect(() => {
    generateTabList(setGenreList, setTabList);
    getAllSongsList(setAllSongsList);
    // generateSwiperOfPanel(allSongsList, setCardSwiper);
  }, []);

  useEffect(() => {
    let listOfSwiperCards = getCardList(allSongsList);
    setCardList(listOfSwiperCards, "songs");
  }, [allSongsList]);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="All" {...a11yProps(0)} className={styles.labelText} />
          {tabList}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {allSongsList.length > 0 ? (
          //   <CardSwipers list={allSongsList} type={"songs"} />
          <CardSwiper list={allSongsList} type={"songs"} />
        ) : (
          <h1>yet to print</h1>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}