import React, {useState} from 'react';
import '../assets/styles/App.scss'
import Header from '../components/Header';
import NuestraComunidad from '../components/NuestraComunidad'

const Home = () => {
    return (
        <div className="Home">
            <Header/>
            <NuestraComunidad></NuestraComunidad>
        </div>
    );
};

export default Home;
