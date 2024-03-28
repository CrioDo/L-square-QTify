import { Chip, Tooltip } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import style from "./Card.module.css"
const Cards = ({ data, type }) => {
  switch (type) {
    case "album": {
      const { image, follows, title, songs } = data;
      return (
        <div className={style.card} > 
        <Tooltip title={`${songs.length}songs`} placement="top" arrow>
        <Card sx={{maxwidth:500}}>
          <CardMedia
          className={style.cardimg}
            component="img"
            
            height="200"
            image={image}
            alt="albumn"
          />
          <CardContent>
            <Chip className={style.chip} label={`${follows}Follows`} size="small" />
          </CardContent>
        </Card>
        <div className={style.colortitle}>{title}</div>
      </Tooltip></div>
       
      );
    }
    case "songs": {
      const { image, likes, title} = data;
      return (
        <div className={style.card} > 
        
        <Card sx={{maxwidth:500}}>
          <CardMedia
          className={style.cardimg}
            component="img"
            
            height="200"
            image={image}
            alt="albumn"
          />
          <CardContent>
            <Chip className={style.chip} label={`${likes}Likes`} size="small" />
          </CardContent>
        </Card>
        <div className={style.colortitle}>{title}</div>
      </div>
       
      );
    }
    default:
      return;
  }
};

export default Cards;