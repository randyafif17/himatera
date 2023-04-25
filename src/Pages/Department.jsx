import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer/Footer";
import HeaderDepartment from "../Components/HeaderDepartment";
import Card from "../Components/Card";
import Avatar from "../assets/image/img_avatar.png";
import './department.css';
import Feature from "../Components/feature/Feature";

const dataMedkre = [
    {
        title: 'Head of Creative Media',
        text: 'Randy A. Herlambang'
    },
    {
        title: 'Head of Digital Creative Division',
        text: 'Randy A. Herlambang'
    },
    {
        title: 'Head of Social Media and Publication Division',
        text: 'Randy A. Herlambang'
    },
]

const dataPsdm = [
    {
        title: 'Head of Human Resource Development',
        text: 'Randy A'
    },
    {
        title: 'Head of Digital Creative Division',
        text: 'Rizky Akbar S'
    },
    {
        title: 'Head of Social Media and Publication Division',
        text: 'Vanesia Tasib'
    },
    {
        title: 'Head of Social Media and Publication Division',
        text: 'Dhipa'
    },
]

const Department = () => {
    return(
    <div>
    <Navbar />
        <div className="himatera__department-content">
            <HeaderDepartment />
        </div>
        <div className="himatera__title-card">
            <h1 className="gradient__text">Leadership Team</h1>
            <div className="himatera__department-card">
                <Card title="Randy A. Herlambang" foto={Avatar} Jabatan="Ketua Himatera" text="soon you can be the manager" />
                <Card title="Randy A. Herlambang" foto={Avatar} Jabatan="Wakil Ketua Himatera" text="soon you can be the manager" />
            </div>
        </div>

        <section id="pengmas">
            <div className="himatera__features section__padding">
                <div className="himatera__features-heading">
                    <h1 className="gradient__text">Department of Community Development</h1>
                    <p>
                        Staff:
                        <li>Randy A. Herlambang</li>
                        <li>Randy A. Herlambang</li>
                        <li>Randy A. Herlambang</li>
                    </p>
                </div>
                <div className="himatera__features-container">
                    {dataPsdm.map((item, index) => (
                        <Feature title = {item.title} text = {item.text} key = {item.title + index} />
                    ))}
                </div>
            </div>
        </section>

        <section id="psdm">
            <div className="himatera__features section__padding">
                <div className="himatera__features-heading">
                    <h1 className="gradient__text">Department of Human Resource Development</h1>
                    <p>
                        Staff:
                        <li>Randy A. Herlambang</li>
                        <li>Randy A. Herlambang</li>
                        <li>Randy A. Herlambang</li>
                    </p>
                </div>
                <div className="himatera__features-container">
                    {dataPsdm.map((item, index) => (
                        <Feature title = {item.title} text = {item.text} key = {item.title + index} />
                    ))}
                </div>
            </div>
        </section>

        <section id="ekraf">
            <div className="himatera__features section__padding">
                <div className="himatera__features-heading">
                    <h1 className="gradient__text">Department of Entrepreneurship and Creative Economy</h1>
                    <p>
                        Staff:
                        <li>Randy A. Herlambang</li>
                        <li>Randy A. Herlambang</li>
                        <li>Randy A. Herlambang</li>
                    </p>
                </div>
                <div className="himatera__features-container">
                    {dataPsdm.map((item, index) => (
                        <Feature title = {item.title} text = {item.text} key = {item.title + index} />
                    ))}
                </div>
            </div>
        </section>

        <section id="medkre">
            <div className="himatera__features section__padding">
                <div className="himatera__features-heading">
                    <h1 className="gradient__text">Department of Media Creative</h1>
                    <p>
                        Staff:
                        <li>Randy A. Herlambang</li>
                        <li>Randy A. Herlambang</li>
                        <li>Randy A. Herlambang</li>
                    </p>
                </div>
                <div className="himatera__features-container">
                    {dataMedkre.map((item, index) => (
                        <Feature title = {item.title} text = {item.text} key = {item.title + index} />
                    ))}
                </div>
            </div>
        </section>

        <section id="adkesma">
            <div className="himatera__features section__padding">
                <div className="himatera__features-heading">
                    <h1 className="gradient__text">Department of Student Welfare Advocacy</h1>
                    <p>
                        Staff:
                        <li>Randy A. Herlambang</li>
                        <li>Randy A. Herlambang</li>
                        <li>Randy A. Herlambang</li>
                    </p>
                </div>
                <div className="himatera__features-container">
                    {dataPsdm.map((item, index) => (
                        <Feature title = {item.title} text = {item.text} key = {item.title + index} />
                    ))}
                </div>
            </div>
        </section>

        <section id="humas">
            <div className="himatera__features section__padding">
                <div className="himatera__features-heading">
                    <h1 className="gradient__text">Department of Public Relations</h1>
                    <p>
                        Staff:
                        <li>Randy A. Herlambang</li>
                        <li>Randy A. Herlambang</li>
                        <li>Randy A. Herlambang</li>
                    </p>
                </div>
                <div className="himatera__features-container">
                    {dataPsdm.map((item, index) => (
                        <Feature title = {item.title} text = {item.text} key = {item.title + index} />
                    ))}
                </div>
            </div>
        </section>

        <section id="keristek">
            <div className="himatera__features section__padding">
                <div className="himatera__features-heading">
                    <h1 className="gradient__text">Department of Research and Technology</h1>
                    <p>
                        Staff:
                        <li>Randy A. Herlambang</li>
                        <li>Randy A. Herlambang</li>
                        <li>Randy A. Herlambang</li>
                    </p>
                </div>
                <div className="himatera__features-container">
                    {dataPsdm.map((item, index) => (
                        <Feature title = {item.title} text = {item.text} key = {item.title + index} />
                    ))}
                </div>
            </div>
        </section>
    <Footer />
    </div>
    )
}

export default Department;