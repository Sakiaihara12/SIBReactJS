import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cardgrid from '../Elements/cardlist'
import heroImg from '../assets/hero-illustration.svg'

const stats = [
  { value: '6', label: 'Materi Inti' },
  { value: '100%', label: 'Praktik Langsung' },
  { value: '24/7', label: 'Akses Belajar' },
]

function Home() {
  return (
    <>
      <section className="hero py-5">
        <Container>
          <Row className="align-items-center g-5 py-lg-4">
            <Col lg={6}>
              <span className="badge text-bg-primary mb-3 px-3 py-2">Belajar React JS</span>
              <h1 className="display-4 fw-bold lh-1 mb-3">
                Bangun Website Modern dengan <span className="text-primary">React JS</span>
              </h1>
              <p className="lead text-secondary mb-4">
                React JS adalah library JavaScript untuk membangun antarmuka pengguna yang interaktif dan
                responsif. Dikembangkan oleh Meta (Facebook) dan dirilis open-source pada 2013, kini React
                menjadi salah satu pilihan utama developer di seluruh dunia.
              </p>
              <div className="d-grid gap-2 d-sm-flex">
                <a href="#materi" className="btn btn-primary btn-lg px-4 fw-bold">Mulai Belajar</a>
                <Link to="/team" className="btn btn-outline-secondary btn-lg px-4">Kenali Tim Kami</Link>
              </div>
            </Col>
            <Col lg={6}>
              <img src={heroImg} alt="Ilustrasi coding React" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="py-4">
        <Row className="g-3 text-center">
          {stats.map((s) => (
            <Col xs={12} md={4} key={s.label}>
              <div className="bg-white border rounded-3 py-4 shadow-sm">
                <div className="display-6 fw-bold text-primary">{s.value}</div>
                <div className="text-secondary">{s.label}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <section id="materi" className="py-5">
        <Container className="text-center mb-4">
          <h2 className="section-title">Apa yang Akan Kamu Pelajari?</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: 560 }}>
            Dari dasar komponen sampai deploy, semua materi disusun bertahap agar mudah diikuti pemula.
          </p>
        </Container>
        <Cardgrid />
      </section>

      <section className="py-5">
        <Container>
          <div className="bg-dark text-light rounded-4 p-5 text-center">
            <h2 className="fw-bold">Punya pertanyaan atau ingin berkolaborasi?</h2>
            <p className="text-light text-opacity-75">Tim kami siap membantu kamu memulai perjalanan belajar React.</p>
            <Link to="/contact" className="btn btn-light btn-lg px-4 fw-bold">Hubungi Kami</Link>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Home
