import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" className='mb-5'>
        <Container>
          <Navbar.Brand as={Link} to="/">Student System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/view-students">View All Students</Nav.Link>
            <Nav.Link as={Link} to="/add-students">Add New Student</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavbar