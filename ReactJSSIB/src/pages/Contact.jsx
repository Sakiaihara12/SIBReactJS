import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const info = [
  { icon: '📍', title: 'Alamat', text: 'Jl. Contoh No. 123, Jakarta, Indonesia' },
  { icon: '✉️', title: 'Email', text: 'halo@yozorashelf.id' },
  { icon: '📞', title: 'Telepon', text: '+62 812-3456-7890' },
  { icon: '🕘', title: 'Jam Layanan', text: 'Senin – Jumat, 09.00 – 17.00 WIB' },
]

function Contact() {
  const [validated, setValidated] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setValidated(true)
    if (form.checkValidity()) {
      setSent(true)
      form.reset()
      setValidated(false)
    }
  }

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="section-title display-5">Hubungi Kami</h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: 600 }}>
          Ada pertanyaan, saran, atau ingin berkolaborasi? Kirim pesan dan kami akan membalas secepatnya.
        </p>
      </div>
      <Row className="g-4">
        <Col lg={5}>
          <div className="d-grid gap-3">
            {info.map((i) => (
              <div key={i.title} className="surface-card rounded-4 p-3 d-flex gap-3 align-items-center">
                <div className="topic-icon mb-0" aria-hidden="true">{i.icon}</div>
                <div>
                  <div className="fw-semibold">{i.title}</div>
                  <div className="text-secondary small">{i.text}</div>
                </div>
              </div>
            ))}
          </div>
        </Col>
        <Col lg={7}>
          <div className="surface-card rounded-4 p-4 p-md-5">
            {sent && (
              <Alert variant="success" dismissible onClose={() => setSent(false)}>
                Terima kasih! Pesanmu sudah terkirim.
              </Alert>
            )}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group controlId="name">
                    <Form.Label>Nama</Form.Label>
                    <Form.Control required type="text" placeholder="Nama lengkap" />
                    <Form.Control.Feedback type="invalid">Nama wajib diisi.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required type="email" placeholder="nama@email.com" />
                    <Form.Control.Feedback type="invalid">Masukkan email yang valid.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="subject">
                    <Form.Label>Subjek</Form.Label>
                    <Form.Select required defaultValue="">
                      <option value="" disabled>Pilih topik…</option>
                      <option>Pertanyaan pesanan</option>
                      <option>Kolaborasi</option>
                      <option>Saran & masukan</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">Pilih salah satu topik.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="message">
                    <Form.Label>Pesan</Form.Label>
                    <Form.Control required as="textarea" rows={5} placeholder="Tulis pesanmu di sini…" />
                    <Form.Control.Feedback type="invalid">Pesan tidak boleh kosong.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Button type="submit" size="lg" className="px-5">Kirim Pesan</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
