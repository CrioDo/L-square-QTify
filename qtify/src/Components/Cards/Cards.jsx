import React from 'react';
import styles from "../Cards/Cards.module.css"
import CardImg from "../../assets/cardsImg.png";
import FollowerLogo from "../../assets/Followers.png";

const Cards = () => {
  return (
    <div className={styles.cards}>
        <h2>Top Albums</h2>
        <div className={styles.cardimg}>
            <img src={CardImg} alt="Cards"/>
        </div>
        <div className={styles.follower}>
            <img src={FollowerLogo} alt='Followers' />
        </div>
        <p>New Bollywood</p>
    </div>
  );
}

export default Cards;
