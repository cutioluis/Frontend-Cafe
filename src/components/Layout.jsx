import React from 'react';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Navigation/>
                {children}
            <Footer/>
        </div>
    );
};

export default Layout;