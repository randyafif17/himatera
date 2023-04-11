import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer/Footer";
import HeroEvent from "../Components/HeroEvent";
import AnotherData from "../Components/AnotherData";
import Avatar from "../assets/img_avatar.png";
// import ReactPlayer from "react-player";

import './event.css';
import './../Components/another.css';

const Event = () => {
    // // for onChange event
    // const [youtubeVideo, setYoutubeVideo] = useState('');
    // // for submit event
    // const [youtubeURL, setYoutubeURL] = useState('https://youtu.be/YtU5te6VQJc');

    return (
        <div>
            <Navbar />

            <section>
                <div className="himatera__event section__padding" id="home">
                    <div className="himatera__event-header">
                        <h1 className="gradient__text">Get The Opportunity to Learn, Share Ideas, and Build Relationships by Joining Our Events.</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Praesentium harum quaerat, doloribus tempora obcaecati debitis cupiditate, 
                            itaque quibusdam facilis inventore nihil corrupti dignissimos
                            ab a perspiciatis? Nesciunt maiores blanditiis temporibus.
                        </p>
                    </div>
                    {/* <div className="youtube-box">
                        <ReactPlayer url='https://www.youtube.com/watch?v=223-VtTg1Cc' className='video' controls />
                    </div> */}
                </div>
            </section>

            <section>
                <HeroEvent />
            </section>

            <section>
                <div className="another section__margin">
                    <h1 className="gradient__text">Another Events</h1>
                    <p>You can unique destinations using google maps</p>
                    <div className="anothercard">

                        <AnotherData
                        image={Avatar}
                        heading="Community Care"
                        text="lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet, consectetur
                        consectetur dolor sit amet, consectetur"
                        />

                        <AnotherData
                        image={Avatar}
                        heading="Community Care"
                        text="lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet, consectetur
                        consectetur dolor sit amet, consectetur"
                        />

                        <AnotherData
                        image={Avatar}
                        heading="Community Care"
                        text="lorem ipsum dolor sit amet, consectetur
                        lorem ipsum dolor sit amet, consectetur
                        consectetur dolor sit amet, consectetur"
                        />

                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    )
}

export default Event;