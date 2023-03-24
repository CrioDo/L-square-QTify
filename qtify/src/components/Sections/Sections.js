import React from "react";

import styles from "./Sections.module.css";
import { fetchAlbumData, fetchFilters, fetchSongsData } from "../../api/api";
import { Section } from "../Section/Section";

export const Sections = () => {
  return (
    <div>
      <div className={styles.album_container}>
        <Section
          title="Top Album"
          dataSourse={fetchAlbumData}
          dataType="top"
          sectionType="album"
        />
        <Section
          title="New Album"
          dataSourse={fetchAlbumData}
          dataType="new"
          sectionType="album"
        />
      </div>
      <div className={styles.songs_container}>
        <Section
          title="Songs"
          dataSourse={fetchSongsData}
          sectionType="song"
          filterSource={fetchFilters}
        />
      </div>
    </div>
  );
};
