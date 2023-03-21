// https://qtify-backend-labs.crio.do/albums/top
// https://qtify-backend-labs.crio.do/albums/new

import axios from "axios";
const BACKEND_URL = "https://qtify-backend-labs.crio.do";

// method to fetch
export const fetchTopSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/albums/top`);
    //   console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchAlbumData = async (albumName) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/albums/${albumName}`);
    //   console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
