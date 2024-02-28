import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './Filters.module.css';

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

function Filters({ filters, selectedFilterIndex, setSelectedFilterIndex }) {
    // const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedFilterIndex(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    return (
        <div>
            <Tabs 
                value={selectedFilterIndex} 
                onChange={handleChange} 
                aria-label="basic tabs example"
                TabIndicatorProps={{
                    style: {
                        backgroundColor: 'var(--color-primary)',
                    },
                }}>
                    {filters.map((ele, ind) => (
                        <Tab className={styles.tab} label={ele.label}{...a11yProps(ind)} />
                    ))}
            </Tabs>
            {filters.map((ele, ind) => (
                <TabPanel value={ele.label} index={ind} />
            ))}
        </div>
    );
}

export default Filters;