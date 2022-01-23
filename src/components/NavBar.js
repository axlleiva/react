import React from 'react'
import { Navbar , Nav , Container } from 'react-bootstrap';
import Cartwidget from './CartWidget.js'
import { Link } from 'react-router-dom';




const NavBar = () => {
    return (  
    <Navbar bg="light" variant="light">
        <Container>
            <img src='./logopokemon.jfif' alt="" style={{heith:'100px', width:'100px'}} />
            <Navbar.Brand href="#home">PokeShopping</Navbar.Brand>
            <Nav className="me-auto">
            <Link to='/'>Home</Link>
            
            <Link to='/precio/precio'>Precio</Link>
            </Nav>
        </Container>    
            <Nav.Link href="#carrito"><Cartwidget/></Nav.Link>
    </Navbar>
  )
}

export default NavBar
