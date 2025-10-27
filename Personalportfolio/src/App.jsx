import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <header className="navbar">
        <div className="container nav-inner">
          <Navbar />
        </div>
      </header>
      <main>
        <section id="home">
          <div className="container">
            <Hero />
          </div>
        </section>
        <section id="about">
          <div className="container">
            <About />
          </div>
        </section>
        <section id="skills">
          <div className="container">
            <Skills />
          </div>
        </section>
        <section id="projects">
          <div className="container">
            <Projects />
          </div>
        </section>
        <section id="resume">
          <div className="container">
            <Resume />
          </div>
        </section>
        <section id="contact">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default App
