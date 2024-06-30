import React from 'react'
import {Navbar, container , Nav, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <>
   
   <Navbar bg='dark' data-bs-theme="dark">
    <Container>
        <Navbar.Brand href='#none'><strong>Not-loggedIn</strong></Navbar.Brand>
        <Nav className='m-auto'>
            <Nav.Link as={Link} className='nav-link' to="/login">Login</Nav.Link>
            <Nav.Link as={Link} className='nav-link' to="/register">Signup</Nav.Link>
             </Nav>
    </Container>

   </Navbar>
   </>
  )
}

export default Header
