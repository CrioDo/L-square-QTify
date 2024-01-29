import React from 'react'
import Card from '../Card/Card';
const AlbumGrid = ({data,title}) => {
    // console.log(data);
  return (
    <div>
        {title}
        {
            data.map((items) =>
                <Card item={items} type="album" key={items.id}/>
            )
       
}
    </div>
  )
}

export default AlbumGrid