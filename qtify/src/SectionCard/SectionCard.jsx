import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from "./SectionCard.module.css";

export default function SectionCard({ title, image, chipLabel }) {
    return (
        <>
            <Card>
                <CardMedia
                    component="img"
                    height="170"
                    image={image}
                />
                <CardContent sx={{
                    padding: "10px",
                    paddingBottom: "10px !important",
                }}>
                    <Stack direction="row" spacing={1}>
                        <Chip className={styles.follower_chip} sx={{
                            backgroundColor: "var(--color-black)",
                            color: "var(--color-white)",
                            fontWeight: "400",
                            fontSize: "10px",
                            padding: "4px 8px",
                        }} label={chipLabel} />
                    </Stack>
                </CardContent>
            </Card >
            <Typography gutterBottom variant="h5" component="div" sx={{
                color: "var(--color-white)",
                fontWeight: "400",
                fontSize: "14px",
                marginTop: "10px",
                textAlign: "left",
            }}>
                {title}
            </Typography>
        </>
    );
}