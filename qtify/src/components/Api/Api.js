import axios from "axios";
export const backendEndpoint="https://qtify-backend-labs.crio.do"

export const fetchTopAlbums=async()=>{
    try{
        const response=await axios.get(`${backendEndpoint}/albums/top`)
        return response.data;
    }
    catch(error){
        console.log("error",error);
    }
}

export const fetchNewAlbums=async()=>{
    try{
        const response=await axios.get(`${backendEndpoint}/albums/new`)
        return response.data;
    }
    catch(error){
        console.log('error',error);
    }


}

export const fetchSongs=async()=>{
    try{
        const response=await axios.get(`${backendEndpoint}/songs`)
        return response.data;
    }
    catch(error){
        console.log('error',error);
    }
}
export const fetchFilters=async()=>{
    try{
        const response=await axios.get(`${backendEndpoint}/genres`)
        return response.data;
    }
    catch(error){
        console.log('error',error);
    }
}