import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <h2 className='text-white m-2'>Perfume</h2>
                <Container>
                    <Navbar.Brand href="#home">
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#Manage Items">Manage Items</Nav.Link>
                        <Nav.Link href="#Blogs">Blogs</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>


    );
};

export default Header;