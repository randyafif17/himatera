import React from 'react';
import ReactPlayer from "react-player";
import './eventdata.css';

const EventData = (props) => {
    return (
    <div className={props.className}>
        <div className="event_text">
            <h2 className='gradient__text'>{props.heading}</h2>
            <p>{props.text}</p>
        </div>
        <div className="youtube-box">
            <ReactPlayer url={props.youtube} className='video' controls />
        </div>
    </div>
    )
}

export default EventData