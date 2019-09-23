import React from 'react';
import './Header.css'
import {Navbar, Nav, Button} from "react-bootstrap";


const header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">reMIND</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/books">Books</Nav.Link>
                <Nav.Link href="/movies">Movies</Nav.Link>
                <Nav.Link href="/series">Series</Nav.Link>
                <Nav.Link href="/notes">Notes</Nav.Link>
            </Nav>
            <Button variant="outline-info" href="/login">Login</Button>
        </Navbar>
    )
};

export default header;