import './Team.css'

const teamMembers = [
  { name: 'Alex Rodriguez', role: 'SOFTWARE / LEAD', image: '/alex-rodriguez.png' },
  { name: 'Roberto Pérez', role: 'DESIGN / LEAD', image: '/robertoperez.jpeg' },
  { name: 'Vanessa Parra', role: 'MARKETING / LEAD', image: '/vanessapara.jpeg' },
  { name: 'Julia Ruiz', role: 'FILM / LEAD', image: '/juliaruiz.jpg' },
]

export default function Team() {
  return (
    <section className="team" id="join">
      <div className="container">
        <div className="team-header">
          <h2 className="team-title">
            The <span>team</span>.
          </h2>
          <p className="team-desc">
            Four leads, one studio. Software, design, marketing, and film — a small group of practitioners working under one roof and one set of standards.
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-card">
              <div className="team-avatar">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('team-avatar-fallback')
                    e.target.parentElement.dataset.initials = member.name.split(' ').map(n => n[0]).join('')
                  }}
                />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
