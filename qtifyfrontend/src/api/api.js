import axios from "axios";

// https://qtify-backend-labs.crio.do/album/:slug

const BASE_URL = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    let response = await axios.get(`${BASE_URL}/albums/top`);
    // console.log(response.data);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchNewAlbums = async () => {
  try {
    let response = await axios.get(`${BASE_URL}/albums/new`);
    // console.log(response.data);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchSongs = async () => {
  try {
    let response = await axios.get(`${BASE_URL}/songs`);
    // console.log(response.data);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchGenres = async () => {
  try {
    let response = await axios.get(`${BASE_URL}/genres`);
    // console.log(response.data);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
