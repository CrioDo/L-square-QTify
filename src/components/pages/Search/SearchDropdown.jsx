// src/components/Search/SearchDropdown.jsx
import React, { useState, useEffect } from "react";
import { TextField, List, ListItemButton, ListItemText, Paper, Popper, ClickAwayListener } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SearchDropdown({ placeholder = "Search albums..." }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }
        const cancelToken = axios.CancelToken.source();
        // Example endpoint - replace with your real search endpoint or local filtering
        axios.get(`https://qtify-backend.labs.crio.do/albums?q=${encodeURIComponent(query)}`, { cancelToken: cancelToken.token })
            .then(res => setResults(res.data))
            .catch(() => setResults([]));
        return () => cancelToken.cancel();
    }, [query]);

    const handleSelect = (album) => {
        console.log("album", album)
        setQuery("");
        setResults([]);
        setOpen(false);
        navigate(`/albums/${album.id}`);
    };

    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <div style={{ position: "relative", width: 360 }}>
                <TextField
                    fullWidth
                    placeholder={placeholder}
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
                    onFocus={() => query && setOpen(true)}
                    size="small"
                />
                <Popper open={open && results.length > 0} anchorEl={document.activeElement} style={{ zIndex: 1300, width: "402px!important", backgroundColor: "#000" }}>
                    <Paper style={{ width: 360, maxHeight: 300, overflow: 'auto' }}>
                        <List dense>
                            {results.map(album => (
                                <ListItemButton key={album.id} onClick={() => handleSelect(album)}>
                                    <ListItemText primary={album.name} secondary={album.artist} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Paper>
                </Popper>
            </div>
        </ClickAwayListener>
    );
}
