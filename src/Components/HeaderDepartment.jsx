import React from "react";
import './headerdepartment.css';

const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
]
const HeaderDepartment = () => {
    return(
        <div className="himatera__header section__padding" id="home">
        <div className="himatera__header-content">
            <h1 className="gradient__text">Meet our team!</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Praesentium harum quaerat, doloribus tempora obcaecati debitis cupiditate, 
                itaque quibusdam facilis inventore nihil corrupti dignissimos
                ab a perspiciatis? Nesciunt maiores blanditiis temporibus.
            </p>
    
            <div className="himatera__header-content__people">
                {stats.map((stat) => (
                    <div key={stat.name} className="himatera__team-information">
                        <h1 className="gradient__text">{stat.value}</h1> 
                        <p>{stat.name}</p>
                    </div>
                ))}
            </div>
        </div>
        
        {/* <div className="himatera__header-image">
            <img src={abyakta} alt="kabinet-abyakta" />
        </div> */}
    </div>
    )
}

export default HeaderDepartment;