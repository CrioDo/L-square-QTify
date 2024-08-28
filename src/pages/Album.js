// import Navbar from '../components/Navbar/Navbar';
import AlbumDetail from "../components/AlbumDetails/AlbumDetail";
import SongsList from "../components/AlbumDetails/SongsDetail";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Album = () => {
    const { state } = useLocation();
    const { slug } = state;
    const [albumData, setAlbumData] = useState({});
    const { title, follows, image, songs=[] } = albumData;
    const [derivedAlbumData, setDerivedAlbumData] = useState({
        noOfSongs: 0,
        albumDuration: 0
    });

    function calculateDurationAndNoOfSongs(songsList) {
        let dur = 0;
        songsList.forEach(song => {
            dur += song.durationInMs;
        });
        return {albumDuration: dur, noOfSongs: songsList.length};
    }

    useEffect(() => {
        const url = 'https://qtify-backend-labs.crio.do/album/' + slug;
        async function fetchData() { 
            try{
                const response = await axios.get(url);
                const result = calculateDurationAndNoOfSongs(response.data.songs);
                setAlbumData(response.data);
                setDerivedAlbumData({...result});
            } catch(e) {

            }
        }

        fetchData();
    }, []);

    return (
        <>
            {/* <Navbar /> */}
            <AlbumDetail 
                title={title}
                follows={follows}
                image={image}
                noOfSongs={derivedAlbumData.noOfSongs}
                albumDuration={derivedAlbumData.albumDuration}
            />
            <SongsList list={songs} />
        </>
    );
};

export default Album;