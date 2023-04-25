import React, { useState } from "react";
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/image/himatera.png';
// BEM -> Block Element Modifier

// const Menu = () => (
//     <div>
//         <p><a href="/">Home</a></p>
//         <p><a href="/department">Department</a></p>
//         <p><a href="/event">Event</a></p>
//         <p><a href="/projects">Projects</a></p>
//         <p><a href="/contact">Contact</a></p>
//     </div>
    
// )


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="himatera__navbar">
            <div className="himatera__navbar-links">
                <div className="himatera__navbar-links_logo">
                    <img src={logo} alt='logo' />
                </div>
                <div className="himatera__navbar-links_container">
                    <div>
                        <p><a href="/">Home</a></p>
                        <p><a href="/article">Article</a></p>
                        <p><a href="/event">Event</a></p>
                        <p><a href="/projects">Projects</a></p>
                        <p><a href="/contact">Contact</a></p>
                    </div>
                </div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div className="dropdown">
                    <button className="dropbtn">
                        Department 
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="/department">BPI</a>
                        <a href="/department#pengmas">PENGMAS</a>
                        <a href="/department#psdm">PSDM</a>
                        <a href="/department#ekraf">EKRAF</a>
                        <a href="/department#medkre">MEDKRE</a>
                        <a href="/department#adkesma">ADKESMA</a>
                        <a href="/department#humas">HUMAS</a>
                        <a href="/department#keristek">KERISTEK</a>
                    </div>
                </div> 
            </div>
            <div className="himatera__navbar-menu">
                {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="himatera__navbar-menu_container scale-up-center">
                        <div className="himatera__navbar-menu_container-links">
                            <p><a href="/">Home</a></p>
                            <p><a href="/department">Department</a></p>
                            <p><a href="/event">Event</a></p>
                            <p><a href="/projects">Projects</a></p>
                            <p><a href="/article">Article</a></p>
                            <p><a href="/contact">Contact</a></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;