import { Box } from '@mui/material';
import styles from './HeroText.module.css';

const HeroText = () => {
    return (
        <Box className={styles.text}>
            <Box>
                100 Thousand Songs, ad-free
            </Box>
            <Box>
                Over thousands podcast episodes
            </Box>
        </Box>
    );
};

export default HeroText;