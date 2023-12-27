import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import styles from './HomePage.module.css';
import { fetchFilters } from '../../components/Api/ApiData';

function HomePage() {
    const {data} = useOutletContext();
    const {topAlbums, newAlbums, songs} = data;

  return (
    <div>
        <Hero />
        <div className={styles.wrapper}>
            <Section title="Top Albums" data={topAlbums} type='album' />
            <Section title="New Albums" data={newAlbums} type='album' />
            <Section 
              title="Songs" 
              data={songs} 
              filterSource={fetchFilters}
              type='song' 
            />
        </div>
    </div>
  )
}

export default HomePage