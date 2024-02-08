import React from "react";
import HeroSection from "../../Component/HeroSection/HeroSection";
import CardSection from "../../Component/CardSection/CardSection";

function Home({ data }) {
  console.log("data from the home", data);
  return (
    <div>
      <HeroSection />
      {data && (
        <>
          <CardSection data={data.topAlbum} type="album" title="Top Album" />
          <CardSection data={data.newAlbum} type="album" title="New Album" />
        </>
      )}
    </div>
  );
}

export default Home;
