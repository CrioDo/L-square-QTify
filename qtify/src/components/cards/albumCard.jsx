import Chip from "@mui/material/Chip";
import styles from "./cards.module.css";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

export default function AlbumCard({
  image,
  title,
  follows,
  id,
  slug,
  type = "",
  likes = 0,
  songs = [],
}) {
  if (type === "songs") {
    return (
      <Link to={`/album/:${slug}`} className={styles.links}>
        <div className={styles.cardBox} itemID="id">
          <div className={styles.cardBody}>
            <div className={styles.cardImageContainer}>
              <img src={image} alt={title} className={styles.cardImage} />
            </div>
            <div className={styles.chipContainer}>
              <div className={styles.chip}>{`${likes} Likes`}</div>
              {/* <Chip label={`${follows} Follows`} className={styles.chip} /> */}
            </div>
          </div>
          <div className={styles.cardTitle}>{title}</div>
        </div>
      </Link>
    );
  } else {
    return (
      <Tooltip title={`${songs.length} songs`} placement="top" arrow>
        <Link to={`/album/:${slug}`} className={styles.links}>
          <div className={styles.cardBox} itemID="id">
            <div className={styles.cardBody}>
              <div className={styles.cardImageContainer}>
                <img src={image} alt={title} className={styles.cardImage} />
              </div>
              <div className={styles.chipContainer}>
                <div className={styles.chip}>{`${follows} Follows`}</div>
                {/* <Chip label={`${follows} Follows`} className={styles.chip} /> */}
              </div>
            </div>
            <div className={styles.cardTitle}>{title}</div>
          </div>
        </Link>
      </Tooltip>
    );
  }
}