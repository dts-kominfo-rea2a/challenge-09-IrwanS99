// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>Call A Friend</h1>
            <h3>Your Friendly Contact App</h3>
            <div className='dot'>
                <span>.......................................................................</span>
            </div>
        </div>
    )
}

export default Header;