import { Box } from "@mui/material";
import styles from './HeroSection.module.css';
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const HeroSection = () => {
    return (
        <Box className={styles.hero_section}>
            <HeroText />
            <HeroImage />
        </Box>
    );
};

export default HeroSection;