import React, { } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
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

                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarMain
