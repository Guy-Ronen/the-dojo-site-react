import React from 'react'
import "./OnlineIcon.css";


export default function OnlineIcon({ isOnline }) {
    return (
        <div>
            {isOnline && <span style={{background: "#0ebb50"}} title={`icon-${isOnline}`} className="online-user"></span>}
            {!isOnline && <span style={{background: "lightgrey"}} title={`icon-${isOnline}`} className="offline-user"></span>}
        </div>
    )
}
