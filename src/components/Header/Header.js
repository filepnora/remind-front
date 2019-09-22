import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
import {Navbar, Nav, Button} from "react-bootstrap";


const header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">reMIND</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="">Home</Nav.Link>
                <Nav.Link href="">Books</Nav.Link>
                <Nav.Link href="">Movies</Nav.Link>
                <Nav.Link href="">Series</Nav.Link>
                <Nav.Link href="">Notes</Nav.Link>
            </Nav>
            <Button variant="outline-info">Login</Button>
        </Navbar>
    )
};

export default header;