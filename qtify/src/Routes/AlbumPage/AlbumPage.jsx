import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAlbumDataBySlug } from "../../api/api";
import { Button } from "../../components/Button/Button";
import styles from "./AlbumPage.module.css";

export const AlbumPage = () => {
  const { albumId } = useParams();
  const [albumData, setAlbumData] = useState({});
  const getAlbumData = async (albumId) => {
    const response = await fetchAlbumDataBySlug(albumId);
    console.log("in Album page - ", response);

    return response;
  };

  useEffect(() => {
    const result = getAlbumData(albumId).then((data) => setAlbumData(data));
  }, []);

  // console.log("in Album Page -", albumData);

  return (
    <div className={styles.container}>
      {Object.keys(albumData).length > 0 && (
        <div className={styles.album_detail}>
          {/* <div className={styles.album_image}> */}
          <img
            src={`${albumData.image}`}
            alt={albumData.title}
            className={styles.image}
          />
          {/* </div> */}
          <div className={styles.detail}>
            <span className={styles.title}>{albumData.title}</span>
            <span>{albumData.description}</span>
            <div className={styles.song_details}>
              <span>{albumData.songs.length} Songs</span>
              <span className={styles.dot}> </span>
              <span> 3 hr 45 Min</span>
              <span className={styles.dot}> </span>
              <span> {albumData.follows} Follows</span>
            </div>
            <div className={styles.button_container}>
              <Button type="btn-primary">
                <img
                  src={require("../../assets/Shuffle.png")}
                  alt={albumData.title}
                  className={styles.icon}
                />
                Shuffle
              </Button>
              <Button type="btn-secondry">
                {" "}
                <img
                  src={require("../../assets/Library.png")}
                  alt={albumData.title}
                  className={styles.icon}
                />{" "}
                Add to library
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
