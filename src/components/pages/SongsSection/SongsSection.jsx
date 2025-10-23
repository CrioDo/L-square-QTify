
import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../Qtify-carousel/Carousel";
import Card from "../Card/Card";



const SongsSection = ({ GENRES_API, SONGS_API }) => {
    const [genres, setGenres] = useState([]);
    const [songs, setSongs] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("all");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const gRes = await axios.get(GENRES_API);
                setGenres(gRes.data.data || []);
                const sRes = await axios.get(SONGS_API);
                setSongs(sRes.data || []);
            } catch (err) {
                console.error("API fetch error:", err);
            }
        };
        fetchData();
    }, []);

    const filteredSongs = songs.filter((song) => {
        if (selectedGenre === "all") return true;
        return song.genre?.key === selectedGenre;
    });

    return (
        <div style={{ marginBottom: "40px" }}>
            <h2 style={{ color: "#fff", fontSize: "1.5rem", marginBottom: "16px", textAlign: "left" }}>Songs</h2>

            <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
                <button
                    style={{ color: selectedGenre === "all" ? "#34c94b" : "#fff", background: "transparent", border: "none", cursor: "pointer" }}
                    onClick={() => setSelectedGenre("all")}
                >
                    All
                </button>
                {genres.map((g) => (
                    <button
                        key={g.key}
                        style={{ color: selectedGenre === g.key ? "#34c94b" : "#fff", background: "transparent", border: "none", cursor: "pointer" }}
                        onClick={() => setSelectedGenre(g.key)}
                    >
                        {g.label}
                    </button>
                ))}
            </div>

            <Carousel
                data={filteredSongs}
                renderItem={(song) => <Card key={song.id} album={song} />}
            />
        </div>
    );
};

export default SongsSection;
