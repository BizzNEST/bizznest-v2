import './Team.css'

const teamMembers = [
  { name: 'Alex Rodriguez', role: 'SOFTWARE / LEAD', image: '/alex-rodriguez.png', objectPosition: 'top center', objectFit: 'cover' },
  { name: 'Roberto Pérez', role: 'DESIGN / LEAD', image: '/robertoperez.jpeg', objectPosition: 'bottom center', objectFit: 'cover', imageWidth: '100%', imageHeight: '85%' },
  { name: 'Vanessa Parra', role: 'MARKETING / LEAD', image: '/vanessapara.jpeg', objectPosition: 'top center', objectFit: 'cover' },
  { name: 'Julia Ruiz', role: 'FILM / LEAD', image: '/juliaruiz.jpg', objectPosition: 'top center', objectFit: 'cover' },
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
              <div className="team-card-grid" />
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="team-card-img"
                style={{ objectPosition: member.objectPosition, objectFit: member.objectFit, width: member.imageWidth || member.imageSize || '88%', height: member.imageHeight || member.imageSize || '88%' }}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.classList.add('team-card-fallback')
                  e.target.parentElement.dataset.initials = member.name.split(' ').map(n => n[0]).join('')
                }}
              />
              <div className="team-card-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
