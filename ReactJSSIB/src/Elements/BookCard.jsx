import Card from 'react-bootstrap/Card'

const rupiah = (n) => 'Rp ' + Number(n).toLocaleString('id-ID')

function BookCard({ book }) {
  return (
    <Card className="book-card h-100">
      <Card.Img variant="top" src={book.image} alt={`Sampul ${book.title}`} />
      <Card.Body className="d-flex flex-column">
        <div className="text-secondary small mb-1">{book.author} · {book.year}</div>
        <Card.Title className="h6 fw-bold">{book.title}</Card.Title>
        <Card.Text className="small text-secondary flex-grow-1">{book.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <span className="fw-bold text-primary">{rupiah(book.price)}</span>
          <button type="button" className="btn btn-sm btn-outline-primary rounded-pill px-3">Beli</button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default BookCard
