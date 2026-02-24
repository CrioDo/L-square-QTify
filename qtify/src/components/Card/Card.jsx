import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

function Card({ data, type }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={data.image} alt={data.title} />

        <Chip
          label={
            type === "songs"
              ? `${data.likes} Likes`
              : `${data.follows} Follows`
          }
          className={styles.chip}
        />
      </div>

      <p className={styles.title}>{data.title}</p>
    </div>
  );
}

export default Card;