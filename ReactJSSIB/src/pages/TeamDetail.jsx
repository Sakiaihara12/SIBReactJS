import { Link, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'
import { members, initials } from '../data/members'
import NotFound from './NotFound'

function TeamDetail() {
  const { memberId } = useParams()
  const member = members.find((m) => m.id === memberId)

  if (!member) return <NotFound />

  return (
    <Container className="py-5" style={{ maxWidth: 720 }}>
      <Link to="/team" className="text-decoration-none">← Kembali ke Team</Link>
      <div className="bg-white border rounded-4 shadow-sm p-4 p-md-5 mt-3 text-center">
        <div className="team-avatar mx-auto mb-3" style={{ background: `linear-gradient(135deg, ${member.color[0]}, ${member.color[1]})` }}>
          {initials(member.name)}
        </div>
        <h1 className="h2 fw-bold mb-1">{member.name}</h1>
        <div className="text-primary fw-semibold mb-3">{member.role}</div>
        <p className="text-secondary">{member.bio}</p>
        <div className="d-flex justify-content-center gap-2 flex-wrap">
          {member.skills.map((s) => (
            <Badge key={s} bg="primary" className="rounded-pill px-3 py-2 fw-normal">{s}</Badge>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default TeamDetail
