import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import BookCard from './BookCard'
import './book.css'

// Menampilkan data buku dengan metode map
function BookList({ books }) {
  return (
    <Container className="book-list">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {books.map((book) => (
          <Col key={book.id}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default BookList
