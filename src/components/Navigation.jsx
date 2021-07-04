import React from 'react';
import '../assets/styles/Navigation.scss'
import logo from '../assets/static/logo-cafe.png'

const Navigation = () => {
    return (
        <div className="nav-elipse">
            <nav className="coffe-nav">
            <img className="coffe-logo" src={logo} alt="Frontend Cafe" />
            <div className="coffe-left">
                <ul className="left-coffe">
                    <li>Comunidad</li>
                    <li>Online</li>
                    <li>Blogs</li>
                </ul>
               <button className="coffe-join">Join Now</button>
            </div>
            </nav>
        </div>
    );
};

export default Navigation;