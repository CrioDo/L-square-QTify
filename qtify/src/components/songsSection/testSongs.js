import { useState, useEffect } from "react";
import axios from "axios";
import CardSwiper from "../cardSwipper/cardSwiper";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/material/Tab/Tab";
import TabList from "@mui/material/Tab";
import TabPanel from "@mui/material/Tab";

import getSongs from "../../axios/getSongs";
import getGenres from "../../axios/getGenurs";
export default function TestSong() {
  useEffect(() => {
    (() => {
      console.log(getSongs());
      console.log(getGenres());
    })();
  }, []);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    console.log(event);
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <div>
      <h1>tesing songs</h1>
      <h1>tesing songs</h1>
      <h1>tesing songs</h1>
      <h1>tesing songs</h1>
      <h1>tesing songs</h1>
      <h1>tesing songs</h1>

      <Box sx={{ width: "100%", typography: "body1" }} bgcolor={"#FFFFFF"}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}