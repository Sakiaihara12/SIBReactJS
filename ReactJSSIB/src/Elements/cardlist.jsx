import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './cardlist.css'

const topics = [
  { icon: '🧩', title: 'Component', text: 'Pecah tampilan menjadi potongan kecil yang bisa dipakai ulang di banyak halaman.' },
  { icon: '🎛️', title: 'Props & State', text: 'Kirim data antar komponen dan buat UI yang bereaksi terhadap interaksi pengguna.' },
  { icon: '🪝', title: 'Hooks', text: 'Kelola state dan efek samping dengan useState, useEffect, dan teman-temannya.' },
  { icon: '🧭', title: 'Routing', text: 'Bangun aplikasi multi-halaman yang mulus dengan React Router.' },
  { icon: '🎨', title: 'Bootstrap UI', text: 'Susun layout responsif dan rapi dengan komponen siap pakai React-Bootstrap.' },
  { icon: '🚀', title: 'Deploy', text: 'Bawa project ke GitHub dan publikasikan supaya bisa dilihat siapa saja.' },
]

function Cardgrid() {
  return (
    <Container className="card-list py-3">
      <Row xs={1} sm={2} lg={3} className="g-4">
        {topics.map((t) => (
          <Col key={t.title}>
            <Card className="card-list__card h-100">
              <Card.Body>
                <div className="topic-icon" aria-hidden="true">{t.icon}</div>
                <Card.Title>{t.title}</Card.Title>
                <Card.Text>{t.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Cardgrid
