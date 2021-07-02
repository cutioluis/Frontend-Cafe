import React from 'react';
import '../assets/styles/App.scss'
import Navigation from '../components/Navigation';
import Header from '../components/Header';

const App = () => {
    return (
        <div className="hi">
            <Navigation></Navigation>
            <Header></Header>
        </div>
    );
};

export default App;