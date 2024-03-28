import { useOutletContext } from "react-router-dom";
import "./styles.css";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import qala from "../../assets/song1.mp3";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function Player({ data }) {
  // console.log("Songs data-> ", data);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: "",
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

  const [seconds, setSeconds] = useState();

  const [play, { pause, duration, sound }] = useSound(qala);

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain,
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    // let interval;
    if (isPlaying) {
      const interval = setInterval(() => {
        if (sound) {
          setSeconds(sound.seek([]));
          const min = Math.floor(sound.seek([]) / 60);
          const sec = Math.floor(sound.seek([]) % 60);
          setCurrTime({
            min,
            sec,
          });
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [sound, isPlaying]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="container">
      <div className="component">
        <div className="imgDiv">
          <img className="musicCover" src={data.img} />
          <div>
            <h3 className="title">
              {data.songName ? data.songName : "Song Name"}
            </h3>
            <p className="subTitle">
              {data.albumName ? data.albumName : "Album Name"}
            </p>
          </div>
        </div>
        <div className="btnContainer">
          <div>
            <button className="playButton">
              <IconContext.Provider
                value={{ size: "3em", color: "black" }}
                className="Btns"
              >
                <BiSkipPrevious />
              </IconContext.Provider>
            </button>
            {!isPlaying ? (
              <button className="playButton" onClick={playingButton}>
                <IconContext.Provider value={{ size: "3em", color: "black" }}>
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </button>
            ) : (
              <button className="playButton" onClick={playingButton}>
                <IconContext.Provider value={{ size: "3em", color: "black" }}>
                  <AiFillPauseCircle />
                </IconContext.Provider>
              </button>
            )}
            <button className="playButton">
              <IconContext.Provider value={{ size: "3em", color: "black" }}>
                <BiSkipNext />
              </IconContext.Provider>
            </button>
          </div>
          <div className="time">
            <p className="paraLeft">
              {currTime.min}:{currTime.sec}
            </p>
            <input
              type="range"
              min="0"
              max={duration / 1000}
              default="0"
              value={seconds}
              className="timeline"
              onChange={(e) => {
                sound.seek([e.target.value]);
              }}
            />
            <p className="paraRight">
              {time.min}:{time.sec}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}