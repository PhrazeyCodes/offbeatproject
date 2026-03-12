// Offbeat's snail mascot — hand-drawn style SVG
export default function SnailLogo({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shell spiral */}
      <circle cx="58" cy="48" r="28" stroke="currentColor" strokeWidth="3.5" fill="none"/>
      <circle cx="58" cy="48" r="19" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <circle cx="58" cy="48" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      {/* Body */}
      <path
        d="M30 58 Q20 62 18 70 Q16 78 26 80 Q40 83 55 78 Q62 75 64 68"
        stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round"
      />
      {/* Head */}
      <path
        d="M18 70 Q14 65 16 60 Q18 55 24 55"
        stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"
      />
      {/* Antennae */}
      <line x1="16" y1="60" x2="10" y2="50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="22" y1="56" x2="18" y2="46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Antenna tips */}
      <circle cx="10" cy="49" r="2.5" fill="currentColor"/>
      <circle cx="18" cy="45" r="2.5" fill="currentColor"/>
      {/* Eye */}
      <circle cx="15" cy="62" r="2" fill="currentColor"/>
    </svg>
  )
}
