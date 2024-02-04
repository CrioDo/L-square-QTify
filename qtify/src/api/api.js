import axios from "axios";

export const BACKEND_ENDPOINT = "";

export const fetchTopAlbums = async () => {
    try{
        const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        return response.data;
    }catch (e){
         console.error(e);
    }
}

export const fetchNewAlbums = async () => {
    try{
        const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
        return response.data;
    }catch (e) {
        console.error(e);
    }
}


export const fetchSongs = async () => {
    try{
      const response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
      return response.data;
    }catch (e) {
        console.error(e)
    }
}

export const fetchFilters = async () => {
    try{
       const response = await axios.get(`${BACKEND_ENDPOINT}/genres`)
       return response.data;
    }catch (e){
    console.log(e);
    }
}