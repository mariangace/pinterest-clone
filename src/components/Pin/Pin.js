import React from 'react';
import './Pin.css';

function Pin({alt, img}) {
    let sizePin = "medium";

    return (
        <div className="pin">
            <div className="pin__container">
                <div className={`pin__container ${sizePin}`}>
                    <img 
                    alt={alt} 
                    src={img}/>
                </div>
            </div>
        </div>
    )
}

export default Pin
