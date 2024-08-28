import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import styles from './SongsDetail.module.css';
// import songImg from '../../assets/song img.png';

const SongDetail = ({ title, image, artist, durationInMs }) => {
    
    return (
        <Box className={styles.song_detail_body}>
            <Box className={styles.image_song_name_box}>
                <img src={image} alt={'image of ' + title} />
                <h3>{title}</h3>
            </Box>
            <Box className={styles.artist_name}>
                <h3>{artist}</h3>
            </Box>
            <h3>{Math.floor(Math.ceil(durationInMs/1000)/60)}:{Math.floor(Math.ceil(durationInMs/1000)%60)}</h3>
        </Box>
    );
};

const PaginationComp = ({ list, setCurrentList }) => {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        let start = (value - 1) * 8;
        let end = value * 8;
        setCurrentList(list.slice(start, Math.min(end, list.length)));
    }
    
    return (
        <Box className={styles.pagination_outer}>
            <Pagination
                className={styles.pagination}
                count={Math.ceil(list.length/8)}
                page={page} 
                onChange={handleChange}
            />
        </Box>
      );
};

const SongsList = ({ list }) => {
    const [currentList, setCurrentList] = useState([]);

    useEffect(() => {
        setCurrentList(list.slice(0, 8));
    }, [list]);
    
    return (
        <>
            <PaginationComp list={list} setCurrentList={setCurrentList} />
            <Box className={styles.songs_list_body}>
                <Box className={styles.header}>
                    <Box className={styles.header_items}>
                        <h3>Title</h3>
                    </Box>
                    <Box className={styles.header_items}>
                        <h3 style={{paddingLeft: '16px'}}>Artist</h3>
                    </Box>
                    <h3>Duration</h3>
                </Box>
                {
                    currentList.map((song, index) => {
                        return (
                            <Box key={song.id}>
                                <SongDetail
                                    title={song.title}
                                    artist={song.artists}
                                    image={song.image}
                                    durationInMs={song.durationInMs}
                                />
                                { index !== 7 ? <hr /> : <hr style={{marginBottom: '0px'}} />}
                            </Box>
                        )
                    })
                }
            </Box>
        </>
    );
};

export default SongsList;