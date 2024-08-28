import { Box, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import styles from './AlbumDetail.module.css';
// import imgAlbum from '../../assets/image 1.png';
import { ReactComponent as ShuffleIcon } from '../../assets/shuffle icon.svg';
import { ReactComponent as AddToLibraryIcon } from '../../assets/add to library icon.svg';

const AlbumDetail = ({ image, title, follows, noOfSongs, albumDuration }) => {
    const navigate = useNavigate();

    return (
        <Box className={styles.album_wrapper}>
            <Box>
                <button 
                    className={styles.arrow_button}
                    onClick={() => navigate(-1)}
                >
                    <ArrowBackIcon className={styles.arrow}/>
                </button>
            </Box>
            <Box className={styles.album_detail}>
                <Box className={styles.image}>
                    <img src={image} alt={'Image of ' + title} />
                </Box>
                <Box className={styles.details}>
                    <h1>Best of {title} in 2022</h1>
                    <h3>Catch the most {title} tracks of 2022 #SpotifyWrapped</h3>
                    <h3>2022</h3>
                    <Box className={styles.details_duration_follow}>
                        <h3>{noOfSongs} songs</h3>
                        <h3>• {Math.floor(albumDuration/3600000)} hr {Math.ceil(albumDuration/60000)} min</h3>
                        <h3>• {follows} Follows</h3>
                    </Box>
                    <Box className={styles.details_button}>
                        <Button 
                            variant="contained"
                            startIcon={<ShuffleIcon />}
                            className={styles.shuffle_button}
                        >
                            Shuffle
                        </Button>
                        <Button 
                            variant="outlined"
                            startIcon={<AddToLibraryIcon />}
                            className={styles.addToLibraray_button}
                        >
                            Add to library
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default AlbumDetail;