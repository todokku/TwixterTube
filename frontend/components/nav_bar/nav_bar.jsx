import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout, clearErrors}) => {

    const handleLogout = (e) => {
        logout();
    };

    const handleErrors = (e) => {
        clearErrors();
    }

    const display = currentUser ? (
        <div className='nav-bar-container'>

            <div className="nav-bar-left">
                <h2>TwixterTube</h2>
            </div>

            <div className="nav-bar-search">
                <input type="text" placeholder="Search"/>
            </div>

            <div className='nav-bar-right'>
                <p>Hello, {currentUser.username}</p>
                <button onClick={logout}>Sign Out</button>
            </div>

        </div>
    ) : (
        <div className='nav-bar-container'>

            <div className="nav-bar-left">
                <h2>TwixterTube</h2>
            </div>

            <div className="nav-bar-search">
                <input type="text" placeholder="Search"/>
            </div>

            <div className='nav-bar-right'>
                <button onClick={handleErrors}><Link to={'/login'}>Sign In</Link></button>
            </div>

        </div>
    )

    return (
        <header>
            <div>
                {display}
            </div>
        </header>
    )
};
