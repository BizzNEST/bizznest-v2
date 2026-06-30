import './Team.css'

const teamMembers = [
  { name: 'Alex Rodriguez', role: 'SOFTWARE / LEAD', image: '/alex-rodriguez.webp', objectPosition: 'top center', objectFit: 'cover', mobileHeight: '95%', bio: '5+ years in software engineering with a specialization in web development and DevOps engineering.' },
  { name: 'Roberto Pérez', role: 'DESIGN / LEAD', image: '/robertoperez.webp', objectPosition: 'bottom center', objectFit: 'cover', imageWidth: '100%', imageHeight: '85%', mobileHeight: '95%', bio: '10+ years in multidisciplinary design with a specialization in creating scalable design systems, AI-enabled workflows, and UI/UX.' },
  { name: 'Vanessa Parra', role: 'MARKETING / LEAD', image: '/vanessapara.webp', objectPosition: 'top center', objectFit: 'cover', mobileHeight: '95%', bio: '10+ years in marketing with a specialization in building online communities and engaging experiences.' },
]

export default function Team() {
  return (
    <section className="team" id="join">
      <div className="container">
        <div className="team-inner">
          <div className="team-left">
            <h2 className="team-title">
              The <span>team</span>.
            </h2>
            <p className="team-desc">
              Three areas of expertise. One collaborative studio. Our software, design, and marketing teams work together to create integrated solutions built on shared values, expertise, and a commitment to excellence.
            </p>
          </div>
          <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-card">
              <div className="team-card-photo">
                <div className="team-card-grid" />
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="team-card-img"
                  style={{ objectPosition: member.objectPosition, objectFit: member.objectFit, width: member.imageWidth || member.imageSize || '88%', height: member.imageHeight || member.imageSize || '88%', '--team-img-mobile-h': member.mobileHeight || '85%' }}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('team-card-fallback')
                    e.target.parentElement.dataset.initials = member.name.split(' ').map(n => n[0]).join('')
                  }}
                />
                {/* Name/role overlaid on the photo — shown on mobile only */}
                <div className="team-card-photo-meta">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </div>
              </div>
              <div className="team-card-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
