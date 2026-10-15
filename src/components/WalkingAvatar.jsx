import { useState } from 'react'

/**
 * A tiny pure-CSS/SVG character that patrols back and forth across its
 * track. Click it and it stops to wave. No external image/animation
 * assets — everything is drawn + animated with CSS, so it can't break.
 */
export default function WalkingAvatar() {
  const [waving, setWaving] = useState(false)

  const handleClick = () => {
    if (waving) return
    setWaving(true)
    window.setTimeout(() => setWaving(false), 1400)
  }

  return (
    <div className="avatar-track" aria-hidden="true">
      <div className={`avatar-walker ${waving ? 'is-waving' : ''}`} onClick={handleClick}>
        {waving && <div className="avatar-bubble">Hi! 👋</div>}
        <svg
          className="avatar-svg"
          width="56"
          height="80"
          viewBox="0 0 56 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* head */}
          <circle cx="28" cy="14" r="10" fill="#f3d9b1" />
          {/* body */}
          <rect x="18" y="24" width="20" height="26" rx="8" fill="#c084fc" />
          {/* back arm (non-waving) */}
          <g className="avatar-arm avatar-arm-back">
            <rect x="19" y="27" width="6" height="20" rx="3" fill="#a855f7" />
          </g>
          {/* legs */}
          <g className="avatar-leg avatar-leg-left">
            <rect x="20" y="48" width="7" height="24" rx="3" fill="#312e81" />
          </g>
          <g className="avatar-leg avatar-leg-right">
            <rect x="29" y="48" width="7" height="24" rx="3" fill="#312e81" />
          </g>
          {/* front/wave arm */}
          <g className="avatar-arm avatar-arm-front">
            <rect x="31" y="27" width="6" height="20" rx="3" fill="#a855f7" />
          </g>
        </svg>
      </div>
    </div>
  )
}
