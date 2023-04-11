import './another.css';

import React from 'react'

const AnotherData = (props) => {
    return (
        <div className='card'>
            <div className="image">
                <img src={props.image} alt="another" />
            </div>
            <h4>{props.heading}</h4>
            <div className="horizontal-line"></div>
            <p>{props.text}</p>
        </div>
    )
}

export default AnotherData