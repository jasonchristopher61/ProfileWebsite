import { profile, skills, experience, projects, certifications, education, languages } from './data/resume'
import Nav from './components/Nav'
import Reveal from './components/Reveal'
import Skills from './components/Skills'
import WalkingAvatar from './components/WalkingAvatar'
import BackToTop from './components/BackToTop'
import './App.css'

const stats = [
  { value: '7+', label: 'Years of Experience' },
  { value: certifications.length, label: 'Certifications' },
  { value: '60%', label: 'Faster Response Times' },
  { value: '2022', label: 'Onsite in the U.S. Since' },
]

function App() {
  return (
    <div className="page">
      <Nav />

      <header className="hero" id="home">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-content">
          <p className="eyebrow">Hello, I'm</p>
          <h1 className="gradient-text">{profile.name}</h1>
          <p className="title">{profile.title}</p>
          <div className="contact">
            <a className="contact-pill" href={`mailto:${profile.email}`}>
              ✉ {profile.email}
            </a>
            <a className="contact-pill" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
              ☎ {profile.phone}
            </a>
          </div>
        </div>
        <WalkingAvatar />
      </header>

      <main>
        <section className="section" id="about">
          <Reveal>
            <h2 className="section-label">Summary</h2>
          </Reveal>
          <div className="about-grid">
            <Reveal className="about-bio">
              <p className="summary">
                <strong className="summary-lead">{profile.summaryLead}</strong> {profile.summaryRest}
              </p>
            </Reveal>
            <Reveal delay={120} className="about-stats">
              {stats.map((s) => (
                <div className="stat-card glass" key={s.label}>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section" id="skills">
          <Reveal>
            <h2 className="section-label">Skills</h2>
          </Reveal>
          <Reveal>
            <Skills groups={skills} />
          </Reveal>
        </section>

        <section className="section" id="experience">
          <Reveal>
            <h2 className="section-label">Experience</h2>
          </Reveal>
          <div className="timeline">
            {experience.map((job) => (
              <Reveal key={job.company} className="timeline-item">
                <div className="timeline-dot" />
                <div className="card glass">
                  <div className="card-header">
                    <div>
                      <h3>{job.role}</h3>
                      <p className="company">
                        {job.company} · {job.client}
                      </p>
                      {job.location && <p className="location">{job.location}</p>}
                    </div>
                    <span className="period">{job.period}</span>
                  </div>
                  <ul className="bullets">
                    {job.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <Reveal>
            <h2 className="section-label">Key Projects</h2>
          </Reveal>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <Reveal delay={i * 80} key={p.name}>
                <div className="card glass project-card">
                  <h3>{p.name}</h3>
                  <p className="project-desc">{p.description}</p>
                  <ul className="bullets">
                    {p.achievements.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section two-col" id="certifications">
          <Reveal>
            <h2 className="section-label">Certifications</h2>
            <ul className="bullets plain">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100} className="education-block" id="education">
            <h2 className="section-label">Education</h2>
            <p className="edu-degree">{education.degree}</p>
            <p className="edu-school">
              {education.school} · {education.year}
            </p>

            <h2 className="section-label languages-heading">Languages</h2>
            <p>{languages.join(', ')}</p>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
      </footer>

      <BackToTop />
    </div>
  )
}

export default App
