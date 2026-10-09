import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import BookList from '../Elements/BookList'
import AddBookModal from '../Elements/AddBookModal'
import { useBooks } from '../context/BooksContext'

function Book() {
  const { books } = useBooks()
  const [show, setShow] = useState(false)

  return (
    <div className="py-5">
      <Container className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4" style={{ maxWidth: 1160 }}>
        <div>
          <h1 className="section-title display-6 mb-1">Daftar Buku</h1>
          <p className="text-secondary mb-0">{books.length} buku tersedia di Yozora Shelf.</p>
        </div>
        <button type="button" className="btn btn-primary px-4 rounded-pill" onClick={() => setShow(true)}>
          + Tambah Buku
        </button>
      </Container>
      <BookList books={books} />
      <AddBookModal show={show} onHide={() => setShow(false)} />
    </div>
  )
}

export default Book
