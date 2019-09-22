import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import './Footer.css'

const footer = () => {
    return (
        <Navbar bg="dark" fixed="bottom" className="footer">
            <span>© Filep Nóra, 2019 &nbsp;&nbsp;&nbsp;&nbsp; </span>
        </Navbar>
    )
};

export default footer;