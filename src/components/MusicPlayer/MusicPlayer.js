import { Box } from '@mui/material';
import styles from './MusicPlayer.module.css';
import songImg from '../../assets/song img.png';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useCountUp } from 'use-count-up';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 6,
    borderRadius: 3,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: 'var(--color-white)',
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 3,
      backgroundColor: 'var(--color-primary)',
    },
}));

const ProgressBar = () => {
    const { value } = useCountUp({
        isCounting: true,
        duration: 58,
        easing: 'linear',
        start: 0,
        end: 100,
        onComplete: () => ({
          shouldRepeat: false,
          delay: 1,
        }),
      });
    
      return (
        <BorderLinearProgress variant="determinate" value={value} />
      );
};

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const handleClick = () => {
        setIsPlaying(prev => !prev);
    }

    return (
        <Box className={styles.music_player_wrapper}>
            <Box className={styles.image_name_box}>
                <img src={songImg} alt={'song img'} />
                <Box className={styles.song_album_name_box}>
                    <h3>Song name</h3>
                    <h4>Album name</h4>
                </Box>
            </Box>
            <Box className={styles.multimedia_wrapper}>
                <button 
                    className={styles.button}
                    onClick={handleClick}
                >
                    {
                        isPlaying ? <PauseCircleIcon /> : <PlayCircleIcon />
                    }
                </button>
                <Box className={styles.progress_bar_box}>
                    <h4>0:38</h4>
                    <Box className={styles.progress_bar}>
                        <ProgressBar />
                    </Box>
                    <h4>0:58</h4>
                </Box>
            </Box>
        </Box>
    );
};

export default MusicPlayer;

// {
//     "id": "b5dc968a-7334-4aea-9300-91755a9da011",
//     "title": "Pistol Packin' Mama",
//     "artists": [
//         "Miss Daniel Schaden"
//     ],
//     "genre": {
//         "key": "rock",
//         "label": "Rock"
//     },
//     "likes": 76406,
//     "image": "https://images.pexels.com/photos/1995730/pexels-photo-1995730.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
//     "durationInMs": 53499
// }