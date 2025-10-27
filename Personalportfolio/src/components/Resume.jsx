export default function Resume() {
  const resumePath = '/Harini-Resume.pdf'
  return (
    <div>
      <h2 className="section-title">Resume</h2>
      <p className="muted">Download my resume or view it inline below.</p>
      <div style={{display:'flex', gap:12, margin:'12px 0'}}>
        <a className="btn primary" href={resumePath} download>Download PDF</a>
        <a className="btn ghost" href={resumePath} target="_blank" rel="noreferrer">Open in New Tab</a>
      </div>
      <div className="card" style={{padding:8}}>
        <iframe title="Resume" src={resumePath} style={{width:'100%', height: '600px', border:'none', borderRadius: 8}} />
      </div>
    </div>
  )
}


