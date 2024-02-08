import React from "react";
import HeroSection from "../../Component/HeroSection/HeroSection";
import CardSection from "../../Component/CardSection/CardSection";
import { fetchSongs } from "../../api/api";

function Home({ data }) {
  console.log("data from the home", data);
  return (
    <div>
      <HeroSection />
      {data && (
        <>
          <CardSection data={data.topAlbum} type="album" title="Top Album" />
          <CardSection data={data.newAlbum} type="album" title="New Album" />
          <CardSection
            data={data.songs}
            type="songs"
            title="Songs"
            filterSources={fetchSongs}
          />
        </>
      )}
    </div>
  );
}

export default Home;
