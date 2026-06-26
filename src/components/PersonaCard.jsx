import './PersonaCard.css'

function BulletList({ items }) {
  return (
    <ul className="pc-bullet-list">
      {items.map((item, i) => (
        <li key={i} className="pc-bullet-item">
          <span className="pc-bullet-dot" aria-hidden="true" />
          <span className="pc-bullet-text">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Section({ title, children }) {
  return (
    <div className="pc-section">
      <h2 className="pc-section-title">{title}</h2>
      {children}
    </div>
  )
}

export default function PersonaCard({ persona }) {
  const { name, age, role, photoUrl, photoAlt, traits, about, goals, frustrations } = persona

  return (
    <div className="pc-card">
      {/* Top row: photo + name/traits */}
      <div className="pc-top">
        <div className="pc-photo-wrap">
          <img src={photoUrl} alt={photoAlt} className="pc-photo" />
        </div>
        <div className="pc-identity">
          <div className="pc-name-block">
            <h1 className="pc-name">{name}</h1>
            <p className="pc-role"><strong>{age},</strong> {role}</p>
          </div>
          <div className="pc-traits-block">
            <hr className="pc-divider" />
            <div className="pc-traits">
              {traits.map((trait) => (
                <span key={trait} className="pc-trait-chip">{trait}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="pc-divider" />

      {/* About */}
      <Section title="About">
        {about.map((para, i) => (
          <p key={i} className="pc-about-text">{para}</p>
        ))}
      </Section>

      {/* Goals + Frustrations */}
      <div className="pc-split">
        <div className="pc-split-col">
          <Section title="Goals">
            <BulletList items={goals} />
          </Section>
        </div>
        <div className="pc-split-divider" />
        <div className="pc-split-col">
          <Section title="Frustrations">
            <BulletList items={frustrations} />
          </Section>
        </div>
      </div>
    </div>
  )
}
