import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout, clearErrors}) => {

    // handleLogout() {
    //     logout();
    // };

    const handleErrors = (e) => {
        clearErrors();
    }

    const display = currentUser ? (
        <div className='nav-bar-container'>
            <div >
                <h2>TwixterTube</h2>
            </div>
            <div className='nav-bar-elements'>
                <p>Hello, {currentUser.username}</p>
                <button onClick={logout}>Sign Out</button>
            </div>
        </div>
    ) : (
        <div className='nav-bar-container'>
            <h2>TwixterTube</h2>
            <div className='nav-bar-elements'>
                <button onClick={handleErrors}><Link to={`/signup`}>Sign Up</Link></button>
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
