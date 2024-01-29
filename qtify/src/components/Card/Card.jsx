import React from 'react'
import styles from './Card.module.css';
import {Tooltip , Chip} from '@mui/material'
const Card = ({item,type}) => {
    // console.log(item);
    return(
        <Tooltip title={`${item.songs.length} songs`} placement='top' arrow >
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img src={item.image} alt='album'/>
                <div className={styles.banner}>
                    <Chip label={`${item.follows} Follows`} size='small' className={styles.chip} />
                </div>
            </div>
            <div className={styles.titleWrapper}>
                <p>{item.title}</p>
            </div>
        </div>
    </Tooltip>
    )

//     console.log(item);
// //   const getCard = (type) =>{
//     return(
//     switch(type){
//         case "album":{
//             const {image,follows,title,songs} = item;
//             return (
//                 // <Tooltip title={`${songs.length} songs`} placement='top' arrow >
//                 //     <div className={styles.wrapper}>
//                 //         <div className={styles.card}>
//                 //             <img src={image} alt='album'/>
//                 //             <div className={styles.banner}>
//                 //                 <Chip label={`${follows} Follows`} size='small' className={styles.chip} />
//                 //             </div>
//                 //         </div>
//                 //         <div className={styles.titleWrapper}>
//                 //             <p>{title}</p>
//                 //         </div>
//                 //     </div>
//                 // </Tooltip>
//             )
//         }
//         default:
//             return <></>;
//     }
// //   }
// //   return getCard(type);
}

export default Card