import React from "react";
import styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

function Card({ data, type }) {
  switch (type) {
    case "album": {
      const { image, follows, title, songs } = data;
      return (
        // "?." operator will give null if the value before ?. is undefined
        <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
          <div className={styles.wrapper}>
            <div className={styles.card}>
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
      const { image, likes, title, songs } = data;
      return (
        // no tooltip required here according to figma provided
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <img src={image} alt="album" loading="lazy" />
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
}

export default Card;

/*
sample data recieved: a data is representing one album ->

{
id: "111a44fc-db51-4c0e-9dc8-486ae6fab50b",
title: "Reasonable Stretch",
description: "Tenetur maiores quibusdam amet quae minus nihil enim minima.",
follows: 9687,
image: "https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
slug: "reasonable-stretch",
songs: [
  {      
      id: "cfad0b8e-6d16-4349-8b39-3f075bedd4a6",
      title: "Nothing Compares 2 U",
      artists: [
      "Morris Blick",
      "Fred Upton"
      ],
      genre: {
      key: "pop",
      label: "Pop"
      },
      likes: 98731,
      image: "https://images.pexels.com/photos/8155/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      durationInMs: 58097
  },
  {},
  {},
  {}, etc,
 ]
}

*/
