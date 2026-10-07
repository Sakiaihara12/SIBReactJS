import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, Link } from 'react-router-dom'

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white border-bottom sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold brand">
          <span className="brand-mark">W</span> Worthbook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/team">Team</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Link to="/contact" className="btn btn-primary px-4">Hubungi Kami</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
