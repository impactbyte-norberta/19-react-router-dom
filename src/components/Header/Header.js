import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <Link to='/'>Logo</Link>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/login'>Login</Link>
                <Link to='/articles'>Articles</Link>
            </nav>
        </div>
    );
}

export default Header;
