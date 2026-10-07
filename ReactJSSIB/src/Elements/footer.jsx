import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="w-100 bg-dark text-light">
      <div className="container py-4">
        <nav aria-label="Footer navigation">
          <ul className="nav justify-content-center flex-wrap gap-2 border-bottom border-secondary pb-3">
            <li className="nav-item"><Link to="/" className="nav-link px-2 text-light">Home</Link></li>
            <li className="nav-item"><Link to="/team" className="nav-link px-2 text-light">Team</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-light">Contact</Link></li>
          </ul>
        </nav>
        <p className="mt-3 mb-0 text-center text-light text-opacity-75 small">
          © 2026 Worthbook. Dibuat dengan React JS & Bootstrap.
        </p>
      </div>
    </footer>
  )
}

export default Footer
