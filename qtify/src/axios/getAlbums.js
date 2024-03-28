import axios from "axios";

export default async function getAlbums(albumName) {
  try {
    let api_res = await axios.get(
      `https://qtify-backend-labs.crio.do/albums/${albumName}`
    );
    // console.log("api_res from getAlbums -> ", api_res.data);
    return api_res.data;
  } catch (error) {
    console.log("Error-> ", error);
  }
}