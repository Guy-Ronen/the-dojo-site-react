import React from 'react'
import "./OnlineIcon.css";


export default function OnlineIcon({ isOnline }) {
    return (
        <div>
            {isOnline && <span className="online-user"></span>}
            {!isOnline && <span className="offline-user"></span>}
        </div>
    )
}
