import { useState } from 'react';
import styles from "./Section.module.css";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Carousel from '../Carousel/Carousel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SectionCard from "../SectionCard/SectionCard";
export default function Section({ label, albums, isSongs, genres, genrevalue, handleGenreChange }) {
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }
    return (
        <div className={styles.section}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container direction="row"
                    sx={{
                        justifyContent: "space-between"
                    }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{
                        color: "var(--color-white)",
                        fontWeight: "600",
                        fontSize: "20px",
                        marginTop: "10px",
                        textAlign: "left",
                    }}>
                        {label}
                    </Typography>
                    {
                        !isSongs && <Button onClick={handleExpandClick} variant="text" sx={{ color: "var(--color-primary)", textTransform: "none", fontWeight: "600", fontSize: "20px" }}>
                            {expanded ? 'Collapse' : 'Show all'}
                        </Button>
                    }
                </Grid>
            </Box>
            {
                isSongs &&
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={genrevalue}
                        onChange={handleGenreChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                        sx={{
                            '& .MuiTabs-indicator': {
                                backgroundColor: "var(--color-primary) !important",
                            },
                            '& .Mui-selected': {
                                color: "var(--color-primary) !important",
                            },
                        }}
                    >
                        <Tab value="all" label="All" sx={{ color: "var(--color-white)" }} />
                        {genres.map((genre) => (
                            <Tab value={genre.key} label={genre.label} sx={{ color: "var(--color-white)" }} />
                        ))}
                    </Tabs>
                </Box>
            }
            <Box sx={{
                flexGrow: 1
            }}>
                {
                    isSongs ? <Grid container spacing={3}>
                        <Carousel albums={albums} isSongs={isSongs} />
                    </Grid> : (expanded ? <Grid container spacing={3}>
                        {albums.map((album) => (
                            <Grid key={album.id} size={2}>
                                <SectionCard title={album.title} image={album.image} chipLabel={`${album.follows} Follows`} />
                            </Grid>
                        ))}
                    </Grid> :
                        <Grid container spacing={3}>
                            <Carousel albums={albums} isSongs={isSongs} />
                        </Grid>)
                }


            </Box>
        </div>
    );
}