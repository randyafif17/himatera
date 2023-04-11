import './another.css';
import AnotherData from './AnotherData';
import React from 'react'
import Avatar from "../assets/img_avatar.png";

const Another = () => {
    return (
        <div className="another section__margin">
            <h1 className='gradient__text'>Another Projects</h1>
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
    )
}

export default Another