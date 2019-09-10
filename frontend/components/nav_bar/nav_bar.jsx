import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout}) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.username}</p>
        </div>
    ) : (
        <div>
            <Link to={`/signup`}>Sign Up</Link>
            <Link to={'/login'}>Log In</Link>
        </div>
    )

    return (
        <header>
            <h1>TwixterTube</h1>
            <div>
                {display}
            </div>
        </header>
    )
};

export default