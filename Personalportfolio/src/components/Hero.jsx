export default function Hero() {
  const resumeUrl = '/pawan-Resume.pdf';
  // const profile='../assets/pawan.jpg';
  const imk='./public/pawan.jpg';

  return (
    <div className="hero">
      <div>
        <h1>Hi, I'm pawan kumar</h1>
        <p className="muted">Frontend Developer + React + UI/UX Enthusiast</p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">View Projects</a>
          <a className="btn ghost" href={resumeUrl} download>Download Resume</a>
        </div>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
        <img className="avatar" src={imk} alt="Pawan profile photo" />
      </div>
    </div>
  )
}


