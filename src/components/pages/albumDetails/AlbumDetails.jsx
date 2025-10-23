// src/pages/AlbumDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, List, ListItem, ListItemText, Pagination } from "@mui/material";
import axios from "axios";

const SONGS_PER_PAGE = 13;

export default function AlbumDetails() {
    const { id } = useParams();
    console.log("id", id)
    const [album, setAlbum] = useState(null);
    const [songs, setSongs] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (!id) return;
        // Replace with the correct API paths for album and songs
        axios.get(`https://qtify-backend.labs.crio.do/albums/${id}`)
            .then(res => {
                console.log("res", res.data)
                setAlbum(res.data.album || res.data);
                setSongs(res.data.songs || res.data.tracks || res.data.songsList || res.data.tracksList || res.data.songs || []);
            })
            .catch(() => {
                // fallback: maybe album endpoint returns album with tracks
            });
    }, [id]);

    const totalPages = Math.max(1, Math.ceil((songs.length || 0) / SONGS_PER_PAGE));
    const pageSongs = songs.slice((page - 1) * SONGS_PER_PAGE, page * SONGS_PER_PAGE);

    return (
        <Box p={3}>
            {!album ? <Typography>Loading album…</Typography> : (
                <>
                    <Typography variant="h4">{album.name}</Typography>
                    <Typography variant="subtitle2" color="text.secondary">{album.artist}</Typography>

                    <Box mt={3}>
                        <List>
                            {pageSongs?.map((s, i) => (
                                <ListItem key={s.id ?? i}>
                                    <ListItemText primary={s.title ?? s.name} secondary={s.duration ? `${Math.floor(s.duration / 60)}:${(s.duration % 60).toString().padStart(2, '0')}` : s.artist || ''} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    <Box mt={2} display="flex" justifyContent="center">
                        <Pagination count={totalPages} page={page} onChange={(_, val) => setPage(val)} />
                    </Box>
                </>
            )}
        </Box>
    );
}
