import React from "react";
import Section from "../Section/Section";
import SongsSection from "../SongsSection/SongsSection";
import HeroSection from '../Hero/HeroSection'
import API_URL from '../../../config/config'
import { ENDPOINT } from "../../routes/routes";
import QTifyExtras from "../FAQ/FAQSection";
import FAQSection from "../FAQ/FAQSection";

const Home = () => {
    const APIS = {
        TOP_ALBUMS: `${API_URL}${ENDPOINT.TOP_ALBUMS}`,
        NEW_ALBUMS: `${API_URL}${ENDPOINT.NEW_ALBUMS}`,
        GENRES: `${API_URL}${ENDPOINT.GENRES}`,
        SONGS: `${API_URL}${ENDPOINT.SONGS}`,
    };

    return (
        <div>
            <HeroSection />
            <main className="content-section">
                <Section title="Top Albums" apiEndpoint={APIS.TOP_ALBUMS} />
                <Section title="New Albums" apiEndpoint={APIS.NEW_ALBUMS} />
                <SongsSection
                    GENRES_API={APIS.GENRES}
                    SONGS_API={APIS.SONGS}
                />
            </main>
            <FAQSection />
        </div>
    )
}

export default Home;