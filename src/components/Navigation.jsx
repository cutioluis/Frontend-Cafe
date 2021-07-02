import React from 'react';
import '../assets/styles/Navigation.scss'
import logo from '../assets/static/logo-cafe.png'

const Navigation = () => {
    return (
        <div className="nav-elipse">
            <nav className="coffe-nav">
            <img className="coffe-logo" src={logo} alt="Frontend Cafe" />
            <button className="coffe-join">Join Now</button>
            </nav>
        </div>
    );
};

export default Navigation;