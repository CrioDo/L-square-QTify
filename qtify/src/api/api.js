import axios from "axios";


export const BACKEND_ENDPIONT="https://qtify-backend-labs.crio.do/";

export const fetchTopAlbum = async () =>{
    try{
        const res= await axios.get(`${BACKEND_ENDPIONT}/albums/top`)
        // console.log(res,"")
        return res.data;
        
    }catch(err){
        console.error(err);
    }
}
export const fetchNewAlbum = async () =>{
    try{
        const res= await axios.get(`${BACKEND_ENDPIONT}/albums/new`)
        // console.log(res,"")
        return res.data;
        
    }catch(err){
        console.error(err);
    }
}