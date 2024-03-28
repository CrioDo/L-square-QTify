import Hero from "../Hero/Hero"
import React from "react"
import {fetchFilters,fetchSongs} from "../../components/Api/Api"
//import {useOutletContext} from "react-router-dom"
import Section from "../../components/Section/Section"
import Songs from "../Songs/Songs"
const HomePage=({data})=>{
    // const data=useOutletContext();
    const {topAlbums,newAlbums,songs}=data
   // console.log(topAlbums);//array of objects
    // console.log(newAlbums);
    // console.log(songs);

    return (
        
     
      
        <div>
         
             <Hero/>
        {/* type is used for conditional rendering */}
             <Section title="Top Albums" data={topAlbums} type="album"/>
            <Section title="New Albums" data={newAlbums} type="album"/>
            <Songs title="Songs" data={songs} type="songs" filterfn={fetchFilters} songdata={fetchSongs} />
            

        </div>
        
    )
 
}
export default HomePage;