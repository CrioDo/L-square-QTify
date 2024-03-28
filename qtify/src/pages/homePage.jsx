import HeroSection from "../components/hero/HeroSection";
import AlbumContainer from "../components/albumContainer/albumContainer";
import heroImg from "../assets/hero_headphones.svg";

import TestSong from "../components/songsSection/testSongs";
import TabTesting from "../components/songsSection/tabs";
// import { TabTesting } from "../components/tabsss";
import styles from "./homePage.module.css";
import Faq from "../components/faq/FaqAcco";
export default function HomePage() {
  return (
    <div className={styles.container}>
      <HeroSection
        textLine1={"100 Thousand Songs, ad-free"}
        textLine2={"Over thousands podcast episodes"}
        image={heroImg}
      />
      <AlbumContainer />
      <TabTesting />
      <Faq />
    </div>
  );
}