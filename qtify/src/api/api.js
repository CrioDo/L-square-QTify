import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchAlbumSongs = async (slug) => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/album/${slug}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchFilters = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/genres`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
