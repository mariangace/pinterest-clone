import React from 'react';
import './Pin.css';

function Pin() {
    let sizePin = "medium";

    return (
        <div className="pin">
            <div className="pin__container">
                <div className={`pin__container ${sizePin}`}>
                    <img alt="pin" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"/>
                    
                </div>
            </div>
        </div>
    )
}

export default Pin
