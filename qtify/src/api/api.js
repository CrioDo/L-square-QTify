import Axios from 'axios';

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
    try{
        const res = await Axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        return res.data;
    } catch(e){
        console.error(e);
    }
}

