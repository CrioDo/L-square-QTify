import React from "react";
import { useOutletContext } from "react-router-dom";
import { fetchFilters } from "../../api/api";
import { FAQSection } from "../../components/AccordianFAQ/FAQSection";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { Section } from "../../components/Section/Section";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  const { outletContextData } = useOutletContext();
  // console.log("HomePage - ", outletContextData.data);
  const { topAlbum = [], newAlbum = [], songs = [] } = outletContextData.data;
  return (
    <>
      <HeroSection />
      <div>
        <div className={styles.album_container}>
          <Section
            title="Top Album"
            dataSourse={topAlbum}
            sectionType="album"
          />
          <Section
            title="New Album"
            dataSourse={newAlbum}
            sectionType="album"
          />
        </div>
        <div className={styles.songs_container}>
          <Section
            title="Songs"
            dataSourse={songs}
            sectionType="song"
            filterSource={fetchFilters}
          />
        </div>
        <FAQSection />
      </div>
    </>
  );
};
