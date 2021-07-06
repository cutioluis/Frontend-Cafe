import React from 'react';
import cafe from '../assets/static/cafe-404.png'
import '../assets/styles/NotFound.scss';
import '../assets/static/cafe-404.png'


const NotFound = () => {
    return (
        <div className="coffe-notFound">
            <img src={cafe} alt="image by @ganangcakra editd by @cutioluis" />
            <h1>Hmmmmm!</h1>
            <p>No hemos encontrado lo que buscabas</p>
        </div>
    );
};

export default NotFound;