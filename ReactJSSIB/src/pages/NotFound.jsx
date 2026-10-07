import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

function NotFound() {
  return (
    <Container className="py-5 text-center">
      <div className="display-1 fw-bold text-primary">404</div>
      <h1 className="h3 fw-bold">Halaman tidak ditemukan</h1>
      <p className="text-secondary">Alamat yang kamu buka tidak ada atau sudah dipindahkan.</p>
      <Link to="/" className="btn btn-primary px-4">Kembali ke Home</Link>
    </Container>
  )
}

export default NotFound
