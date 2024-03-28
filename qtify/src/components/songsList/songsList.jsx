import { useParams } from "react-router-dom";
import styles from "./songList.module.css";
import { useOutletContext, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import addToLib from "../../assets/addToLib.png";
import suffale from "../../assets/suffale.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./lists.css";

// import cardSwiper from "../cardSwiper/cardSwiper";
export default function SongsList() {
  let { slug } = useParams();
  let [songList, setSongList] = useState("");
  let [albumData, setAlbumData] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    (async () => {
      if (slug) {
        // console.log(slug);
        slug = slug.slice(1);
        console.log(slug);
        try {
          let apiRes = await axios.get(
            `https://qtify-backend-labs.crio.do/album/${slug}`
          );
          console.log("Api respo-> ", apiRes.data.songs.length);
          setAlbumData(apiRes.data);
          setSongList(apiRes.data.songs);
        } catch (error) {}
      }
    })();
  }, [slug]);
  useEffect(() => {
    // setSongList(albumData.songs);
  }, [albumData]);
  console.log("Slug ", slug);
  let [songData, setSongData] = useOutletContext();
  let giveTimeString = (duration) => {
    let ms = duration;
    let min = Math.floor(ms / 60000);
    // console.log(min);
    let sec = Math.floor((ms / 1000) % 60);
    return `${min} : ${sec}`;
  };
  return (
    <div className={styles.cardBoxContainer}>
      <div className={styles.cardBoxContainer}>
        <button
          className={styles.ArrowBtn}
          onClick={() => {
            navigate("/");
          }}
        >
          <ArrowBackIcon />
        </button>
        {albumData ? (
          <div className={styles.cardBox}>
            <div className={styles.cardImg}>
              <img src={albumData.image} alt="" className={styles.Img} />
            </div>
            <div className={styles.cardTextContent}>
              <h1 className={styles.cardTitle}>{albumData.title}</h1>
              <p className={styles.cardDiscrip}>{albumData.description}</p>
              <p className={styles.cardDiscrip}>
                {songList.length} songs <span>&#8226;</span> 3 hr 45 min{" "}
                <span>&#8226;</span> {albumData.follows} follows
              </p>
              <div className={styles.btnDiv}>
                <button className={styles.shuffleBtn}>
                  <img src={suffale} alt="" />
                  Shuffle
                </button>
                <button className={styles.addToLibBtn}>
                  <img src={addToLib} alt="" />
                  Add to library
                </button>
              </div>
            </div>
          </div>
        ) : (
          <h1>loading data</h1>
        )}
      </div>
      <div className={styles.tableBox}>
        {songList ? (
          <TableContainer component={Paper} className={styles.TableBody}>
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              stickyHeader
            >
              <TableHead className={styles.TableHead}>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="center">Artist</TableCell>
                  <TableCell align="right">Duration</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className={styles.TableBody}>
                {songList.map((songs) => (
                  <TableRow
                    key={songs.id}
                    onClick={() => {
                      let newObj = {
                        ...songData,
                        id: songs.id,
                        img: songs.image,
                        duration: songs.duration,
                        songName: songs.title,
                        albumName: albumData.title,
                      };
                      setSongData(newObj);
                    }}
                  >
                    <TableCell className={styles.titleCell} align="center">
                      <div className={styles.TableImgDiv}>
                        <img
                          src={songs.image}
                          alt=""
                          className={styles.TableImg}
                        />
                        <span className={styles.title}> {songs.title}</span>
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      {songs.artists.map((name, idx) => (
                        <span className={styles.names}>
                          {idx != 0 ? ", " : ""}
                          {name}
                        </span>
                      ))}
                    </TableCell>
                    <TableCell align="right">
                      <span className={styles.time}>
                        {" "}
                        {giveTimeString(songs.durationInMs)}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <h1>Loading data</h1>
        )}
      </div>
    </div>
  );
}

/*
   return (
    <div className={styles.text}>
      <h1>Slug-{slug}</h1>
      <h1>Yet to generate the songs list </h1>
      <div>
        <ol>
          <li
            onClick={() => {
              let newObj = {
                //   ...songData,
                id: 1,
                img: "https://images.pexels.com/photos/1525612/pexels-photo-1525612.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                duration: 322442,
                songName: "om namo",
                albumName: "shiv ji",
              };
              setSongData(newObj);
            }}
          >
            Item-1
          </li>
          <li
            onClick={() => {
              let newObj = {
                //   ...songData,
                id: 2,
                img: "https://images.pexels.com/photos/2838562/pexels-photo-2838562.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
                duration: 5000,
                songName: "RAM ji",
                albumName: "shiv ji",
              };
              setSongData(newObj);
            }}
          >
            Item-2
          </li>
          <li>Item-3</li>
          <li>Item-4</li>
        </ol>
      </div>
    </div>
  );

  //https://qtify-backend-labs.crio.do/album/limping-duty
*/