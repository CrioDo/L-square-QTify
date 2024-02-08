import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./TabComponent.module.css";

function TabPanel(props) {
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

export default function TabComponent({
  filter,
  selectedFilterIndex,
  setSelectedFilterIndex,
}) {
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <Box sx={{ width: "100%", color: "var(--color-white)" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedFilterIndex}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "var(--color-primary)",
            },
          }}
        >
          {filter.map((ele, index) => {
            <Tab
              key={index}
              className={styles.tab}
              label={ele.label}
              {...a11yProps(index)}
            />;
          })}
        </Tabs>
      </Box>

      {filter.map((ele, index) => {
        <TabPanel key={index} value={ele.label} index={index} />;
      })}
    </Box>
  );
}
