import Grid from "@mui/material/Grid";
import AlbumCard from "../cards/albumCard";

export default function generateGridItemsCardsList(list) {
  let listOfCards = list.map((ele) => {
    return (
      <Grid item lg={12 / 7} md={3} sm={4} key={ele.id}>
        <AlbumCard
          image={ele.image}
          title={ele.title}
          follows={ele.follows}
          id={ele.id}
          slug={ele.slug}
          key={ele.id}
        />
      </Grid>
    );
  });

  return listOfCards;
}
export function getCardList(list, type = "") {
  console.log(type);
  if (type === "songs") {
    let arr = list.map((ele) => {
      return (
        <AlbumCard
          image={ele.image}
          title={ele.title}
          likes={ele.likes}
          id={ele.id}
          slug={ele.slug}
          type={"songs"}
          key={ele.id}
        />
      );
    });
    return arr;
  } else {
    let arr = list.map((ele) => {
      return (
        <AlbumCard
          image={ele.image}
          title={ele.title}
          follows={ele.follows}
          id={ele.id}
          slug={ele.slug}
          key={ele.id}
          songs={ele.songs}
        />
      );
    });
    return arr;
  }
}