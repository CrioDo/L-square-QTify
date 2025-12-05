import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

export default function Section({ title = "Top Albums", apiEndpoint = "https://qtify-backend.labs.crio.do/albums/top" }) {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiEndpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(`${title} Data:`, data);
        setAlbums(data);
        setError(null);
      } catch (err) {
        console.error(`Error fetching ${title}:`, err);
        setError(`Failed to load ${title}`);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, [apiEndpoint, title]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const renderCard = (album) => (
    <Card
      image={album.image}
      title={album.title}
      follows={album.follows}
    />
  );

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <button
          className={styles.collapseButton}
          onClick={toggleCollapse}
        >
          {isCollapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {loading && <p className={styles.loading}>Loading albums...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {!loading && albums.length > 0 && (
        <>
          {isCollapsed ? (
            <Carousel data={albums} renderItem={renderCard} />
          ) : (
            <div className={styles.grid}>
              {albums.map((album) => (
                <div key={album.id}>{renderCard(album)}</div>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
