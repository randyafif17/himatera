import React from "react";
import './landingpages.css';

const LandingPages = (props) => {
    return(
        <div className="himatera__header section__padding" id="home">
        <div className="himatera__header-content">
            <h1 className="gradient__text">{props.title}</h1>
            <p>{props.text}</p>                
                    
            <div className="himatera__header-content__input">
                <p><a href="https://ftmm.unair.ac.id/teknik-robotika-dan-kecerdasan-buatan-program-studi/">{props.link}</a></p>
                <button type="button">{props.button}</button>
            </div>
    
                    {/* <div className="himatera__header-content__people">
                        <img src={himatera} />
                        <p>1,600 people requested access a visit in last 24 hours</p>
                    </div> */}
        </div>
    
        <div className="himatera__header-image">
            <img src={props.sidepict} alt="kabinet-abyakta" />
        </div>
    </div>
    )
}

export default LandingPages;