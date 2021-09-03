import React, { } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
// import '../index.css'

function NavbarMain() {
    return (
        <div>
            <Navbar className='navBackround' bg="" variant="dark">
                <Container>
                    <LinkContainer exact to='/'>
                        <Navbar.Brand>Medical Center</Navbar.Brand>
                    </LinkContainer>
                    
                    <Nav className="me-auto">
                        <LinkContainer exact to='/'>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>
                        {/* <LinkContainer to='/services'>
                            <Nav.Link>Services</Nav.Link>
                        </LinkContainer> */}
                        <LinkContainer to='/gallery'>
                            <Nav.Link>Gallery</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/scheldule'>
                            <Nav.Link>Scheldule</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarMain
