import React from 'react'
import { Navbar , Nav , Container } from 'react-bootstrap';

const NavBar = () => {
    return (  
    <Navbar bg="light" variant="light">
        <Container>
            <img src='./logopokemon.jfif' alt="" style={{heith:'100px', width:'100px'}} />
            <Navbar.Brand href="#home">PokeShopping</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Container>    
    </Navbar>
  )
}

export default NavBar
