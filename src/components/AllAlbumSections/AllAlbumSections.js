import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Section from "../Section/Section";
import axios from "axios";
import styles from './AllAlbumSection.module.css';

const AllAlbumSection = () => {
    const [topAlbumsList, setTopAlbumsList] = useState([]);
    const [newAlbumsList, setNewAlbumsList] = useState([]);
    const [allSongsList, setAllSongsList] = useState([]);
    const [currGenresSongsList, setCurrGenresSongsList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const responseTop = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
                setTopAlbumsList(responseTop.data);

                const responseNew = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
                setNewAlbumsList(responseNew.data);

                const responseAllSongs = await axios.get('https://qtify-backend-labs.crio.do/songs');
                setAllSongsList(responseAllSongs.data);
                setCurrGenresSongsList(responseAllSongs.data);
            } catch(e) {

            }
        }

        fetchData();
    }, []);


    return (
        <Box className={styles.box}>
            <Section 
                sectionTitle='Top Albums'
                list={topAlbumsList}
            />
            <Section 
                sectionTitle='New Albums'
                list={newAlbumsList}
            />
            <Box className={styles.songs_section}>
                <Section 
                    sectionTitle='Songs'
                    list={allSongsList}
                    currGenresSongsList={currGenresSongsList}
                    setCurrGenresSongsList={setCurrGenresSongsList}
                />
            </Box>
        </Box>
    );
};

export default AllAlbumSection;