
import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

  function Tabsfilter(props) {
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
  
  Tabsfilter.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function Allprops(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function BasicTabs ({value ,handleChange}) {
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="">
            <Tab label="All" {...Allprops(0)} />
            <Tab label="Rock" {...Allprops(1)} />
            <Tab label="Pop" {...Allprops(2)} />
            <Tab label="Jazz" {...Allprops(3)} />
            <Tab label="Blues" {...Allprops(4)} />
          </Tabs>
        </Box>
        <Tabsfilter value={value} index={0}>
        </Tabsfilter>
        <Tabsfilter value={value} index={1}>
        </Tabsfilter>
        <Tabsfilter value={value} index={2}>
        </Tabsfilter>
        <Tabsfilter value={value} index={3}>
        </Tabsfilter>
        <Tabsfilter value={value} index={4}>
        </Tabsfilter>
      </Box>
    );
  }
  

