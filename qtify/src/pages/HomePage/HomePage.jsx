import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { useOutletContext } from "react-router-dom";
import styles from "./HomePage.module.css"

const HomePage = () => {
  const { data } = useOutletContext();
  const { newAlbums, topAlbums } = data;
  return (
    <>
      <Hero />
      <Section title="Top Albums" data={topAlbums} type="album" />
      <Section title="New Albums" data={newAlbums} type="album" />
    </>
  );
};

export default HomePage;
