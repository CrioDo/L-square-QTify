
import React, { useEffect, useState } from "react";
import Carousel from "../Qtify-carousel/Carousel";
import Card from "../Card/Card";

const Section = ({ title, apiEndpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    fetch(apiEndpoint)
      .then((res) => res.json())
      .then((data) => setAlbums(data || []));
  }, [apiEndpoint]);

  const toggleView = () => setCollapsed((prev) => !prev);

  return (
    <div style={{ marginBottom: "40px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <h2 style={{ color: "#fff", fontSize: "1.5rem" }}>{title}</h2>
        <button
          onClick={toggleView}
          style={{
            background: "transparent",
            color: "#34c94b",
            border: "none",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          {collapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {collapsed ? (
        <Carousel
          data={albums}
          renderItem={(album) => <Card album={album} />}
        />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "8px",
          }}
        >
          {albums.map((album) => (
            <Card key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Section;
