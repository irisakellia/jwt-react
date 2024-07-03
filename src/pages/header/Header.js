import React from 'react'
import {Navbar, container , Nav, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {

  const token = localStorage.getItem("token");
  return (
   <>
   
  <Navbar bg={token ? "blue":"dark"} variant='dark'>
<Container>
  <Navbar.Brand as={Link} to="">
    {token ? "Logged-In":"Not-LoggedIn"}
  </Navbar.Brand>
  <Nav className='ml-auto'>
    {token ? (
      <>
      <Nav.Link as={Link} to='/dashboard' className='nav-link'>
      Dashboard

      </Nav.Link>
      <Nav.Link className='nav-link' onClick={handleLogout}>
        Logout
      </Nav.Link>
      </>
    ) :(
      <Nav.Link>
        
      </Nav.Link>
    )}
  </Nav>
</Container>

  </Navbar>
   </>
  )
}

export default Header
