import getAlbums from "../../axios/getAlbums";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AlbumCard from "../cards/albumCard";
import capitalizeFirstLetter from "../../helper/capitalizeFirstLetter";
import styles from "./albums.module.css";
import generateGridItemsCardsList from "./genrateCardList";
import CardSwiper from "../cardSwipper/cardSwiper";
import CircularProgress from "@mui/material/CircularProgress";
import { getCardList } from "./genrateCardList";

export default function Albums({ name }) {
  let [list, setList] = useState([]);
  let [GridCardsList, setGridCardsList] = useState([]);
  let [cardList, setCardList] = useState([]);
  let [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let list;
    (async () => {
      list = await getAlbums(name);
      // console.log("List ->   ", list);
      setList(list);
    })();
    // console.log("name-> ", name);
  }, []);
  useEffect(() => {
    let listOfCard = generateGridItemsCardsList(list);
    // console.log(listOfCard);
    setGridCardsList(listOfCard);
    let listOfSwiperCards = getCardList([...list]);
    setCardList(listOfSwiperCards);
  }, [list]);

  let onClickHandler = (e) => {
    setShowAll(!showAll);
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.btnContainer}>
        <button className={styles.albumBtn}>{`${capitalizeFirstLetter(
          name
        )} Album`}</button>

        {showAll ? (
          <button className={styles.collapseBtn} onClick={onClickHandler}>
            Collapse
          </button>
        ) : (
          <button className={styles.collapseBtn} onClick={onClickHandler}>
            Show All
          </button>
        )}
      </Box>
      <Box>
        {showAll ? (
          <Grid
            container
            rowGap={1}
            columnGap={4}
            className={styles.containerGrid}
          >
            {GridCardsList.length ? (
              GridCardsList
            ) : (
              <Box display={"flex"} justifyContent={"center"} color={"#34c94b"}>
                <CircularProgress />
              </Box>
            )}
          </Grid>
        ) : list.length ? (
          <CardSwiper list={[...list]} listOfCards={[...cardList]} />
        ) : (
          <Box display={"flex"} justifyContent={"center"} color={"#34c94b"}>
            <CircularProgress />
          </Box>
        )}
        {/* {list.length ? <CardSwiper list={list} /> : "loading data"} */}
      </Box>
    </Box>
  );
}