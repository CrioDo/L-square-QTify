import axios from "axios";

export default async function getSongs(albumName) {
  try {
    let api_res = await axios.get(`https://qtify-backend-labs.crio.do/songs`);
    // console.log("api_res from getAlbums -> ", api_res);
    return api_res.data;
  } catch (error) {
    console.log("Error-> ", error);
  }
}