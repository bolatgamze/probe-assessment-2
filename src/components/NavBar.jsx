import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav style={{ marginBottom: '20px' }}>
            <Link to="/" style={{ marginRight: 10 }}>Home</Link>
            <Link to="/about" style={{ marginRight: 10 }}>About</Link>
            <Link to="/touren" style={{ marginRight: 10 }}>Wandertouren</Link>
            <Link to="/wanderer" style={{ marginRight: 10 }}>Wanderer</Link>
            <Link to="/gruppen" style={{ marginRight: 10 }}>Gruppen</Link>
        </nav>
    );
}

export default NavBar;
