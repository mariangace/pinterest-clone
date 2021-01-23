import React from 'react';
import Pin from '../Pin/Pin';
import './Mainboard.css';

function Mainboard({pinsData}) {
    
    return (
        <div className="grid-gallery ">
            {pinsData && pinsData.map((pin,index) => {
             return (
                <Pin key={index} alt={pin.alt} img={pin.urls && pin.urls.regular}/>
             )
            }
            )}
        </div>
    )
}

export default Mainboard
