import React from "react";
import './card.css';

const Card = ({foto, title, Jabatan, text}) => {
    return (
        <div style={{ 
            width: '100vw',
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div className="himatera__card">
                {/* <img src={Avatar} alt="" />
                <div>Randy A. Herlambang</div>
                <div>Ketua Himatera</div>
                <div>soon you can</div> */}
                <img src={foto} alt="people behind himatera" />
                <div>
                    <h2 className="gradient__text">{title}</h2>
                    <h3>{Jabatan}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
        
    )
}

export default Card;