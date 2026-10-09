import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookList from "../Elements/BookList";
import { useBooks } from "../context/BooksContext";
import heroImg from "../assets/hero-illustration.svg";

function Home() {
  const { books } = useBooks();

  return (
    <>
      <section className="hero py-5">
        <Container>
          <Row className="align-items-center g-5 py-lg-4">
            <Col lg={6}>
              <span className="badge-jp mb-3">書店 · Toko Buku Online</span>
              <h1 className="display-4 fw-bold lh-1 mb-3">
                Temukan Buku Favoritmu di <span className="accent">Yozora Shelf</span>
              </h1>
              <p className="lead text-secondary mb-4">Dari buku pemrograman sampai bisnis digital, semua ada di sini. Pilih bacaan yang pas, tambah koleksi, dan mulai belajar hal baru hari ini.</p>
              <div className="d-grid gap-2 d-sm-flex">
                <a href="#katalog" className="btn btn-primary btn-lg px-4 fw-bold">
                  Lihat Katalog
                </a>
                <Link to="/book" className="btn btn-outline-secondary btn-lg px-4">
                  Kelola Buku
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <img src={heroImg} alt="Ilustrasi buku" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="katalog" className="py-5">
        <Container className="text-center mb-4">
          <h2 className="section-title">Katalog Buku</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: 560 }}>
            {books.length} judul pilihan dengan harga terjangkau. (Under Rp.100.000,00)
          </p>
        </Container>
        <BookList books={books} />
      </section>

      <section className="pb-5">
        <Container>
          <div className="cta-box text-light rounded-4 p-5 text-center">
            <h2 className="fw-bold">Punya buku untuk dijual?</h2>
            <p className="text-light text-opacity-75">Tambahkan buku barumu ke katalog lewat halaman Book.</p>
            <Link to="/book" className="btn btn-primary btn-lg px-4 fw-bold">
              Tambah Buku
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;
