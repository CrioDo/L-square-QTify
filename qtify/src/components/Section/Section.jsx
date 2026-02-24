import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({ title, endpoint }) {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios.get(endpoint).then((res) => setData(res.data));
  }, [endpoint]);

  const renderCard = (item) => (
    <Card key={item.id} data={item} />
  );

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        <button
          className={styles.toggle}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      {showAll ? (
        <Carousel data={data} renderCard={renderCard} />
      ) : (
        <div className={styles.grid}>
          {data.map(renderCard)}
        </div>
      )}
    </div>
  );
}

export default Section;