import React from "react";
import styles from "./Filter.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Filter = ({
  filters,
  selectedFilterIndex,
  setSelectedFilterIndex,
}) => {
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
    // console.log(newValue);
  };

  console.log("in filter com - ", filters);
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedFilterIndex}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: { backgroundColor: "var(--color-primary)" },
          }}
        >
          {filters.map((filterObj) => (
            <Tab
              label={filterObj.label}
              {...a11yProps(0)}
              className={styles.tabStyle}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};
