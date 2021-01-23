import React from 'react';
import './Pin.css';

function Pin({alt, img}) {
    let sizePin = "medium";

    return (
        <div className="grid-gallery__item">
            <img 
            className={`grid-gallery__image ${sizePin}`}
            alt={alt} 
            src={img}/>
        </div>
    )
}

export default Pin
