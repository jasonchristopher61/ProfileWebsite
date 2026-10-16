import { useState } from 'react'

const ICONS = {
  'Frontend Development': '🎨',
  'Backend & Microservices': '⚙️',
  'Cloud & DevOps': '☁️',
  'Data & Storage': '🗄️',
  'Testing & QA': '🧪',
  'Tools & Practices': '🛠️',
  'AI & Automation': '🤖',
}

const LEVELS = ['Expert', 'Advanced', 'Familiar']

export default function Skills({ groups }) {
  const [active, setActive] = useState(0)
  const activeGroup = groups[active]

  return (
    <div className="skills-tabs-wrap">
      <div className="skills-tabs" role="tablist">
        {groups.map((group, i) => (
          <button
            key={group.category}
            role="tab"
            aria-selected={active === i}
            className={`skill-tab ${active === i ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="skill-tab-icon">{ICONS[group.category] || '•'}</span>
            {group.category}
          </button>
        ))}
      </div>

      <div className="skill-legend">
        {LEVELS.map((level) => (
          <span className="skill-legend-item" key={level}>
            <span className={`skill-level-bar skill-level-${level.toLowerCase()}`} />
            {level}
          </span>
        ))}
      </div>

      <div className="skills-panel glass" key={activeGroup.category}>
        <div className="skill-cloud">
          {activeGroup.items.map((item, i) => (
            <span
              className="skill-chip"
              style={{ animationDelay: `${i * 35}ms` }}
              key={item.name}
              title={item.level}
            >
              <span className="skill-chip-name">{item.name}</span>
              <span className={`skill-level-bar skill-level-${item.level.toLowerCase()}`} />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
