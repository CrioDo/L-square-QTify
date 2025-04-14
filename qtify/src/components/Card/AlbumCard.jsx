import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import styles from './AlbumCard.module.css';

export default function AlbumCard({ albumArt, countOfFollowers, albumName, isSong }) {
  return (
    <div className={styles.Card}>
      <Card sx={{ width: 159, height: 215, borderRadius: 2 }}>
        <CardMedia
          component="img"
          alt={albumName}
          height={170}
          width={159}
          image={albumArt}
        />
        <CardContent className={styles.cardContent}>
          <Chip 
            className={styles.chip} 
            label={`${countOfFollowers} ${isSong ? "Likes" : "Followers"}`} 
          />
        </CardContent>
      </Card>
      <div className={styles.albumName}>
        {albumName}
      </div>
    </div>
  );
}
