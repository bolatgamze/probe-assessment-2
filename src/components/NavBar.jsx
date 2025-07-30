import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav style={{
            backgroundColor: '#637a43',
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-around',
            minWidth: '600px',
            color: 'white',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/wanderer" style={linkStyle}>Wanderer</Link>
            <Link to="/gruppen" style={linkStyle}>Gruppen</Link>
            <Link to="/touren" style={linkStyle}>Touren</Link>
            <Link to="/about" style={linkStyle}>About</Link>
        </nav>
    );
}

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '18px',
    padding: '5px 10px'
};

export default NavBar;
