const projects = [
  {
    title: 'Portfolio Website',
    description: 'Modern personal portfolio with React and EmailJS.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&q=80&auto=format&fit=crop',
    tech: ['React', 'Vite', 'CSS'],
    repo: 'https://github.com/yourname/portfolio',
    demo: '#',
  },
  {
    title: 'Task Manager',
    description: 'CRUD app with drag-and-drop and offline storage.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80&auto=format&fit=crop',
    tech: ['React', 'TypeScript', 'IndexedDB'],
    repo: 'https://github.com/yourname/task-manager',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <div>
      <h2 className="section-title">Projects</h2>
      <div className="grid projects">
        {projects.map((p) => (
          <article key={p.title} className="card project-card">
            <img className="project-thumb" src={p.image} alt={p.title} />
            <h3 style={{margin:'6px 0'}}>{p.title}</h3>
            <p className="muted" style={{margin:0}}>{p.description}</p>
            <div className="tech">
              {p.tech.map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>
            <div style={{display:'flex', gap:12}}>
              <a className="btn ghost" href={p.repo} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn primary" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}


