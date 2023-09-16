import React from "react";
import { Chip, Tooltip } from "@mui/material";
import styles from "./Cards.module.css";

const Cards = ({ data, type }) => {
   //console.log(data,"check")
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;
        //console.log(image ,follows ,title ,songs,"datacheck")
        return (
          <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
            <div className={styles.wrapper}>
              <div className={styles.cards}>
                <img src={image} alt="album" />
                <div className={styles.banner}>
                  <Chip
                    label={`${follows} Follows`}
                    className={styles.chip}
                    size="small"
                  />
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      case "song": {
        const { image, likes, title} = data;
        return (
            <div className={styles.wrapper}>
              <div className={styles.cards}>
                <img src={image} alt="song" loading="lazy"/>
                <div className={styles.banner}>
                   <div className={styles.pill}>
                    <p>{likes} Likes</p>
                   </div> 
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);

  //create for static cards for session 4 assinment
  //   import styles from "../Cards/Cards.module.css"
  // import CardImg from "../../assets/cardsImg.png";
  // import FollowerLogo from "../../assets/Followers.png";
  // return (
  //   <div className={styles.cards}>
  //       <h2>Top Albums</h2>
  //       <div className={styles.cardimg}>
  //           <img src={CardImg} alt="Cards"/>
  //       </div>
  //       <div className={styles.follower}>
  //           <img src={FollowerLogo} alt='Followers' />
  //       </div>
  //       <p>New Bollywood</p>
  //   </div>
  // );
};
export default Cards;
