const skills = [
  { name: 'C', level: 85 },
  { name: 'Java', level: 85 },
  { name: 'React', level: 85 },
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 70 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Node.js', level: 60 },
  { name: 'Python', level: 65 },
  { name: 'MongoDB', level: 85 },
  { name: 'SQL', level: 75 },
  { name: 'Git', level: 80 },
  { name: 'Docker', level: 50 },
]

export default function Skills() {
  return (
    <div>
      <h2 className="section-title">Skills</h2>
      <div className="grid skills">
        {skills.map((s) => (
          <div key={s.name} className="card skill">
            <div style={{fontWeight:600}}>{s.name}</div>
            <div className="progress" style={{marginTop:10}}>
              <span style={{width: `${s.level}%`}} />
            </div>
            <div className="muted" style={{marginTop:8}}>{s.level}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}


