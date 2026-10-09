import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useBooks } from '../context/BooksContext'

const empty = { title: '', author: '', year: new Date().getFullYear(), price: '', description: '' }

function AddBookModal({ show, onHide }) {
  const { addBook } = useBooks()
  const [form, setForm] = useState(empty)
  const [validated, setValidated] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setValidated(true)
    if (!e.currentTarget.checkValidity()) return
    addBook(form)
    setForm(empty)
    setValidated(false)
    onHide()
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title className="h5 fw-bold">Tambah Buku Baru</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-grid gap-3">
          <Form.Group controlId="bk-title">
            <Form.Label>Judul</Form.Label>
            <Form.Control required name="title" value={form.title} onChange={handleChange} placeholder="Judul buku" />
            <Form.Control.Feedback type="invalid">Judul wajib diisi.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="bk-author">
            <Form.Label>Penulis</Form.Label>
            <Form.Control required name="author" value={form.author} onChange={handleChange} placeholder="Nama penulis" />
            <Form.Control.Feedback type="invalid">Penulis wajib diisi.</Form.Control.Feedback>
          </Form.Group>
          <div className="row g-3">
            <Form.Group className="col-6" controlId="bk-year">
              <Form.Label>Tahun</Form.Label>
              <Form.Control required type="number" min="1900" max="2100" name="year" value={form.year} onChange={handleChange} />
              <Form.Control.Feedback type="invalid">Tahun tidak valid.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-6" controlId="bk-price">
              <Form.Label>Harga (Rp)</Form.Label>
              <Form.Control required type="number" min="0" name="price" value={form.price} onChange={handleChange} placeholder="80000" />
              <Form.Control.Feedback type="invalid">Isi harga.</Form.Control.Feedback>
            </Form.Group>
          </div>
          <Form.Group controlId="bk-desc">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control required as="textarea" rows={3} name="description" value={form.description} onChange={handleChange} placeholder="Deskripsi singkat buku" />
            <Form.Control.Feedback type="invalid">Deskripsi wajib diisi.</Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={onHide}>Batal</Button>
          <Button type="submit">Simpan</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AddBookModal
