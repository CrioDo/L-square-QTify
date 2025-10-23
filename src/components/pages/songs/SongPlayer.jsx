// src/components/Player/SongPlayer.jsx
import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton, Slider, Typography, Stack } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

export default function SongPlayer({ playlist = [], initialIndex = 0 }) {
    const audioRef = useRef(new Audio());
    const [index, setIndex] = useState(initialIndex);
    const [playing, setPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(0.8);

    useEffect(() => {
        const audio = audioRef.current;
        audio.volume = volume;
    }, [volume]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!playlist || playlist.length === 0) {
            audio.pause();
            setPlaying(false);
            return;
        }
        audio.src = playlist[index].src;
        audio.load();

        const onLoaded = () => setDuration(audio.duration || 0);
        const onTime = () => setCurrentTime(audio.currentTime || 0);
        const onEnded = () => handleNext();

        audio.addEventListener("loadedmetadata", onLoaded);
        audio.addEventListener("timeupdate", onTime);
        audio.addEventListener("ended", onEnded);

        if (playing) audio.play().catch(() => setPlaying(false));

        return () => {
            audio.removeEventListener("loadedmetadata", onLoaded);
            audio.removeEventListener("timeupdate", onTime);
            audio.removeEventListener("ended", onEnded);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index, playlist]);

    useEffect(() => {
        const audio = audioRef.current;
        if (playing) audio.play().catch(() => setPlaying(false));
        else audio.pause();
    }, [playing]);

    const togglePlay = () => setPlaying(p => !p);

    const handlePrev = () => {
        setIndex(i => (i - 1 + playlist.length) % playlist.length);
        setPlaying(true);
    };

    const handleNext = () => {
        setIndex(i => (i + 1) % playlist.length);
        setPlaying(true);
    };

    const handleSeek = (_, val) => {
        audioRef.current.currentTime = val;
        setCurrentTime(val);
    };

    const formatTime = (t) => {
        const sec = Math.floor(t || 0);
        const m = Math.floor(sec / 60).toString().padStart(2, "0");
        const s = (sec % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    };

    if (!playlist || playlist.length === 0) {
        return <Typography variant="body2">No songs to play.</Typography>;
    }

    const current = playlist[index];

    return (
        <Box sx={{ width: "100%", p: 2, borderRadius: 2, boxShadow: 1 }}>
            <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton onClick={handlePrev}><SkipPreviousIcon /></IconButton>
                <IconButton onClick={togglePlay} sx={{ width: 56, height: 56 }}>
                    {playing ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
                </IconButton>
                <IconButton onClick={handleNext}><SkipNextIcon /></IconButton>

                <Box sx={{ flex: 1, minWidth: 200 }}>
                    <Typography variant="subtitle1">{current.title}</Typography>
                    <Typography variant="caption" color="text.secondary">{current.artist}</Typography>

                    <Slider
                        value={Math.min(currentTime, duration)}
                        max={duration || 0}
                        onChange={handleSeek}
                        size="small"
                        aria-label="progress"
                    />
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="caption">{formatTime(currentTime)}</Typography>
                        <Typography variant="caption">{formatTime(duration)}</Typography>
                    </Stack>
                </Box>

                <Stack direction="row" alignItems="center" spacing={1} sx={{ width: 200 }}>
                    <VolumeUpIcon />
                    <Slider
                        value={volume}
                        min={0}
                        max={1}
                        step={0.01}
                        onChange={(_, v) => setVolume(typeof v === "number" ? v : volume)}
                        aria-label="volume"
                    />
                </Stack>
            </Stack>
        </Box>
    );
}
