import React from "react";
import Hero from "../..components/Hero/Hero";
import { useOutletContext } from "react-router-dom";
import Section from "../../components/Section/Section";
import styles from './HomoPage.module.css';
import  { fetchFilters } from '../../api/api';

function HomePage() {
    const { data } = useOutletContext();
    const {topAlbums,  newAlbums, songs} = data;
    return (
        <>
           <Hero/>
           <div className = {styles.wrapper}>
           <Section title="Top Albums" data={topAlbums} type="album" />
           <Section title="New Albums" data={newAlbums} type="album" />
           <Section title="Songs" data={song} type="song" filterSource={fetchFilters} />
           </div>
        </>
    )
}

export default HomePage;
