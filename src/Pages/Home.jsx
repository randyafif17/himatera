import React from "react";
import LandingPages from "../Components/LandingPages";
import Navbar from "../Components/Navbar";
import WhatHimatera from "../Components/WhatHimatera";
import Footer from "../Components/footer/Footer";
// import Culture from "./culture/Culture";
import Feature from "../Components/feature/Feature";
import abyakta from '../assets/kabinet-abyakta-tulisan.png';
import './home.css';

const featuresData = [
    {
        title: 'Kinship',
        text: 'lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, velit?'
    },
    {
        title: 'Interest and Talent',
        text: 'lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, velit?'
    },
    {
        title: 'Tri Dharma Perguruan Tinggi',
        text: 'lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, velit?'
    },
]

const Home = () => {
    return (
    <div>
        <Navbar />

        <section>
            <LandingPages 
            title="Welcome to Student Association of Robotics Engineering and Artificial Intelligence"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Praesentium harum quaerat, doloribus tempora obcaecati debitis cupiditate,
                itaque quibusdam facilis inventore nihil corrupti dignissimos ab a perspiciatis? 
                Nesciunt maiores blanditiis temporibus."
            link="Visit Us"
            button="About Us"
            sidepict={abyakta}
            />
        </section>

        <section>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#040C18" fill-opacity="1" d="M0,224L40,213.3C80,203,160,181,240,192C320,203,400,245,480,229.3C560,213,640,139,720,112C800,85,880,107,960,128C1040,149,1120,171,1200,186.7C1280,203,1360,213,1400,218.7L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2a9e92" fill-opacity="1" d="M0,256L40,234.7C80,213,160,171,240,165.3C320,160,400,192,480,186.7C560,181,640,139,720,112C800,85,880,75,960,90.7C1040,107,1120,149,1200,149.3C1280,149,1360,107,1400,85.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> */}
            <WhatHimatera />
        </section>

        <section>
            <div className="himatera__features section__padding" id="features">
            <div className="himatera__features-heading">
                <h1 className="gradient__text">Culture​ in Student Association of Robotics Engineering and Artificial Intelligence</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, velit?</p>
            </div>
            <div className="himatera__features-container">
                {featuresData.map((item, index) => (
                    <Feature title = {item.title} text = {item.text} key = {item.title + index} />
                ))}
            </div>
            </div>
        </section>

        <Footer />
    </div>
    )
}
export default Home;