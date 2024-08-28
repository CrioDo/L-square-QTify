import { Box } from "@mui/material";
import heroImage from '../../assets/hero-image.png';

const HeroImage = () => {
    return (
        <Box>
            <img src={heroImage} alt="head phone"></img>
        </Box>
    );
};

export default HeroImage;