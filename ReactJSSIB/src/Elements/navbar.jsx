import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, Link } from 'react-router-dom'
import './navbar.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className={`main-navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <span className="brand-mark">W</span> Worthbook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto gap-lg-2">
            {links.map((l) => (
              <Nav.Link key={l.to} as={NavLink} to={l.to} end={l.end} className="nav-item-link">
                {l.label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Link to="/contact" className="btn btn-primary px-4 rounded-pill">Hubungi Kami</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
