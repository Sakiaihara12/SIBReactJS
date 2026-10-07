import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { members, initials } from '../data/members'

function Team() {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="section-title display-5">Tim Kami</h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: 600 }}>
          Orang-orang di balik Worthbook: berbeda peran, satu tujuan, yaitu membuat belajar React jadi menyenangkan.
        </p>
      </div>
      <Row xs={1} sm={2} lg={4} className="g-4">
        {members.map((m) => (
          <Col key={m.id}>
            <Card className="h-100 text-center border-0 shadow-sm rounded-4 team-card">
              <Card.Body className="p-4">
                <div className="team-avatar mx-auto mb-3" style={{ background: `linear-gradient(135deg, ${m.color[0]}, ${m.color[1]})` }}>
                  {initials(m.name)}
                </div>
                <Card.Title className="fw-bold mb-1">{m.name}</Card.Title>
                <div className="text-primary small fw-semibold mb-3">{m.role}</div>
                <Card.Text className="text-secondary small">{m.bio}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 pb-4 d-flex justify-content-center">
                <Link to={`/team/${m.id}`} className="btn btn-sm btn-outline-primary rounded-pill px-4">Lihat Profil</Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Team
