import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import getGenres from "../../axios/getGenurs";
import getSongs from "../../axios/getSongs";
import "./tabs.css";
import CardSwipers from "./swipers";
import CardSwiper from "../cardSwipper/cardSwiper.js";
import { getCardList } from "../albums/genrateCardList";

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
        className={"labelText"}
      />
    );
  });
  setTabList(list);
}
async function getAllSongsList(setAllSongsList) {
  let list = await getSongs();
  setAllSongsList(list);
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabTesting() {
  const [value, setValue] = React.useState(0);
  let [tabList, setTabList] = useState([]);
  let [filterList, setFilterlList] = useState([]);
  let [filterText, setFilterText] = useState("");
  let [allSongsList, setAllSongsList] = useState([]);

  let [genreList, setGenreList] = useState([]);
  let [cardList, setCardList] = useState([]);

  useEffect(() => {
    generateTabList(setGenreList, setTabList);
    getAllSongsList(setAllSongsList);
    // generateSwiperOfPanel(allSongsList, setCardSwiper);
  }, []);

  useEffect(() => {
    let listOfSwiperCards = getCardList(allSongsList, "songs");
    setCardList(listOfSwiperCards);
  }, [allSongsList]);

  useEffect(() => {
    if (value != 0) {
      let filterList = allSongsList.filter(
        (ele) => ele.genre.key === genreList[value - 1].key
      );
      console.log(filterList);
      setFilterlList(filterList);
    }
  }, [value]);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className={"TabsBox"}>
      <Box className={"songs"}>Songs</Box>
      <Box>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="All" {...a11yProps(0)} className="labelText" />
              {tabList}
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            {allSongsList.length > 0 ? (
              <Box>
                <CardSwiper
                  list={[...allSongsList]}
                  listOfCards={[...cardList]}
                />
              </Box>
            ) : (
              // <CardSwiper list={allSongsList} type={"songs"} />
              <Box display={"flex"} justifyContent={"center"}>
                <CircularProgress />
              </Box>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {filterList.length > 0 ? (
              <CardSwipers list={filterList} type={"songs"} />
            ) : (
              // <CardSwiper list={allSongsList} type={"songs"} />
              <Box display={"flex"} justifyContent={"center"}>
                <CircularProgress />
              </Box>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            {filterList.length > 0 ? (
              <CardSwipers list={filterList} type={"songs"} />
            ) : (
              // <CardSwiper list={allSongsList} type={"songs"} />
              <Box display={"flex"} justifyContent={"center"}>
                <CircularProgress />
              </Box>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            {filterList.length > 0 ? (
              <CardSwipers list={filterList} type={"songs"} />
            ) : (
              // <CardSwiper list={allSongsList} type={"songs"} />
              <Box display={"flex"} justifyContent={"center"}>
                <CircularProgress />
              </Box>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            {filterList.length > 0 ? (
              <CardSwipers list={filterList} type={"songs"} />
            ) : (
              // <CardSwiper list={allSongsList} type={"songs"} />
              <Box display={"flex"} justifyContent={"center"}>
                <CircularProgress />
              </Box>
            )}
          </CustomTabPanel>
        </Box>
      </Box>
    </div>
  );
}