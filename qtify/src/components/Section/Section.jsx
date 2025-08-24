import React, { useEffect, useState } from 'react'
import styles from './Section.module.css'
import Card from '../../components/Card/Card'
import useFetch from '../../hooks/useFetch'
import CircularProgress from '@mui/material/CircularProgress';
import Carousel from '../Carousel/Carousel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Section({ title, collapse, path, type, genres }) {

    const [collapsed, setCollapsed] = useState(true)
    const { response : data } = useFetch(path)
    const [response, setResponse] = useState(data)

    useEffect(() => {
        setResponse(data)
    }, [data.loading])

    //TAB INDEX
    const [tabValue, setTabValue] = useState('all');

    //HANDLE TAB CHANGE
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
        filterSongs(newValue)
    };

    const filterSongs = (filter) => {
        if(filter == "all"){
            setResponse(data)
        }
        else{
            setResponse((prevState) => (
                {...prevState, data : data.data.filter(item => item.genre.key == filter)}
            ))
        }
    }

    const handleCollapse = () => {
        setCollapsed(!collapsed)
    }

    return (
        <section className={styles.section}>
            <div className={styles.title_container}>
                <h3 className={styles.title}>{title}</h3>
                {collapse && <button className={styles.button} onClick={handleCollapse}>{collapsed ? 'Show All' : 'Collapse'}</button>}
            </div>

            {genres && genres.data.data && (
                <Tabs onChange={handleTabChange} value={tabValue} className={styles.filters}>
                    <Tab label="All" value="all" />
                    {genres.data.data.map((item, index) => (
                        <Tab key={item.key} label={item.label} value={item.key} />
                    ))}
                </Tabs>
            )}

            {!response.loading && !response.err && (
                !collapsed ? (
                    //GRID
                    <div className={styles.cards}>
                        {response.data.map(item => (
                            <Card key={item.id} data={item} type={type} />
                        ))}
                    </div>
                ) :
                    //CAROUSEL
                    (<Carousel>
                        {response.data.map(item => (
                            <Card key={item.id} data={item} type={type} />
                        ))}
                    </Carousel>)

            )}

            {/* LOADING */}
            {response.loading && <div className={styles.loading}>
                <span>Loading</span>
                <CircularProgress />
            </div>}

            {/* ERROR */}
            {response.err && <div className={styles.loading}>Failed to load - {response.err}</div>}

        </section>
    )
}

export default Section