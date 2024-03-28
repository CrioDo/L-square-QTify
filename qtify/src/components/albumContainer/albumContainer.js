import Albums from "../albums/albums";
import styles from "./container.module.css";
import TestSong from "../songsSection/testSongs";

export default function AlbumContainer() {
  return (
    <div className={styles.container}>
      <Albums name={"new"} />
      <Albums name={"top"} />
    </div>
  );
}