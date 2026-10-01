import { profile, skills, experience, projects, certifications, education, languages } from './data/resume'
import './App.css'

function App() {
  return (
    <div className="page">
      <header className="hero">
        <h1>{profile.name}</h1>
        <p className="title">{profile.title}</p>
        <div className="contact">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span className="divider">·</span>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
        </div>
      </header>

      <main>
        <section className="section">
          <h2>Summary</h2>
          <p className="summary">{profile.summary}</p>
        </section>

        <section className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skill-group" key={group.category}>
                <h3>{group.category}</h3>
                <ul className="pill-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Experience</h2>
          {experience.map((job) => (
            <div className="card" key={job.company}>
              <div className="card-header">
                <div>
                  <h3>{job.role}</h3>
                  <p className="company">{job.company} · {job.client}</p>
                </div>
                <span className="period">{job.period}</span>
              </div>
              <ul className="bullets">
                {job.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="section">
          <h2>Key Projects</h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <div className="card" key={p.name}>
                <h3>{p.name}</h3>
                <p className="project-desc">{p.description}</p>
                <ul className="bullets">
                  {p.achievements.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section two-col">
          <div>
            <h2>Certifications</h2>
            <ul className="bullets plain">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Education</h2>
            <p className="edu-degree">{education.degree}</p>
            <p className="edu-school">{education.school} · {education.year}</p>

            <h2 className="languages-heading">Languages</h2>
            <p>{languages.join(', ')}</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </div>
  )
}

export default App
