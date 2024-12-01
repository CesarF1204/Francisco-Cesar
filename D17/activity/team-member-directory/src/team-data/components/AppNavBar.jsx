import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

const AppNavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Team Member Directory</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/team">Team</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavBar
