import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function validate(values) {
    const next = {}
    if (!values.name.trim()) next.name = 'Name is required'
    if (!values.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) next.email = 'Valid email is required'
    if (values.message.trim().length < 10) next.message = 'Please enter at least 10 characters'
    return next
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const v = validate(form)
    setErrors(v)
    if (Object.keys(v).length) return
    try {
      setStatus('sending')
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      await emailjs.send(serviceId, templateId, form, { publicKey })
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  function set(key, value) {
    setForm({ ...form, [key]: value })
  }

  return (
    <div>
      <h2 className="section-title">Contact</h2>
      <p className="muted">Have a question or want to work together? Send a message.</p>
      <form className="contact" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="Your name" />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="you@example.com" />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" value={form.message} onChange={(e) => set('message', e.target.value)} placeholder="Write your message..." />
          {errors.message && <div className="error">{errors.message}</div>}
        </div>
        <div style={{display:'flex', gap:12}}>
          <button className="btn primary" disabled={status==='sending'}>
            {status==='sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status==='sent' && <span className="muted">Thanks! Your message was sent.</span>}
          {status==='error' && <span className="error">Something went wrong. Try again.</span>}
        </div>
      </form>
      <div style={{marginTop:16, display:'flex', gap:12}}>
        <a className="btn ghost" href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="btn ghost" href="https://github.com/yourname" target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn ghost" href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer">Twitter</a>
        <a className='bgn primary' href="https://youtu.be" target="_blank" rel="noreferrer" > Youtube</a>
      </div>
    </div>
  )
}


