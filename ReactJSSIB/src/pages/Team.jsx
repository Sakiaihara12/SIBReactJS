import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

// Ganti nama, peran, dan deskripsi di bawah ini sesuai anggota tim kamu.
const members = [
  { name: 'Nama Anggota 1', role: 'Project Lead', bio: 'Mengatur alur kerja tim dan memastikan project selesai tepat waktu.', color: ['#4f46e5', '#7c3aed'] },
  { name: 'Nama Anggota 2', role: 'Frontend Developer', bio: 'Menyusun komponen React dan tampilan responsif dengan Bootstrap.', color: ['#0ea5e9', '#2563eb'] },
  { name: 'Nama Anggota 3', role: 'UI/UX Designer', bio: 'Merancang tampilan yang rapi, konsisten, dan nyaman dipakai.', color: ['#ec4899', '#f43f5e'] },
  { name: 'Nama Anggota 4', role: 'Content Writer', bio: 'Menulis materi dan konten agar mudah dipahami semua kalangan.', color: ['#10b981', '#059669'] },
]

const initials = (name) => name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()

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
          <Col key={m.name}>
            <Card className="h-100 text-center border-0 shadow-sm rounded-4 team-card">
              <Card.Body className="p-4">
                <div
                  className="team-avatar mx-auto mb-3"
                  style={{ background: `linear-gradient(135deg, ${m.color[0]}, ${m.color[1]})` }}
                >
                  {initials(m.name)}
                </div>
                <Card.Title className="fw-bold mb-1">{m.name}</Card.Title>
                <div className="text-primary small fw-semibold mb-3">{m.role}</div>
                <Card.Text className="text-secondary small">{m.bio}</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 pb-4 d-flex justify-content-center gap-2">
                <a href="#" className="btn btn-sm btn-outline-secondary rounded-pill px-3">GitHub</a>
                <a href="#" className="btn btn-sm btn-outline-secondary rounded-pill px-3">LinkedIn</a>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Team
