const timeline = [
  { title: 'B.Tech in Computer Science', org: 'Aditya University', period: '2023 - 2025', details: 'Focused on web development and HCI.' },
  { title: 'Frontend Intern', org: 'Aditya engineering and technology  Tech', period: 'Summer 2025', details: 'Built React components and improved performance.' },
]

export default function About() {
  return (
    <div>
      <h2 className="section-title">About Me</h2>
      <p className="muted">I love crafting delightful, accessible web experiences with React, JavaScript, and modern CSS.</p>
      <div className="grid" style={{gridTemplateColumns:'1fr'}}>
        {timeline.map((t, i) => (
          <div className="card" key={i} style={{padding:16}}>
            <strong>{t.title}</strong>
            <div className="muted">{t.org} • {t.period}</div>
            <div style={{marginTop:8}}>{t.details}</div>
          </div>
        ))}
      </div>
    </div>
  )
}


