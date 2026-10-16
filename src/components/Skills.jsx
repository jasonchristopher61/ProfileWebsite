import { useState } from 'react'

const ICONS = {
  'Frontend Development': '🎨',
  'Backend & Microservices': '⚙️',
  'Cloud & DevOps': '☁️',
  'Data & Storage': '🗄️',
  'Tools & Practices': '🛠️',
  'AI & Automation': '🤖',
}

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

      <div className="skills-panel glass" key={activeGroup.category}>
        <div className="skill-cloud">
          {activeGroup.items.map((item, i) => (
            <span className="skill-chip" style={{ animationDelay: `${i * 35}ms` }} key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
