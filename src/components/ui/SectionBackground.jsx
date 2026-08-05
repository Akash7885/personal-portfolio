export default function SectionBackground({ glow = 'blue', position = 'left' }) {
  const glowColor = glow === 'purple' ? 'bg-accent-secondary' : 'bg-accent'
  const positionClass = position === 'right' ? '-right-24 sm:-right-32' : '-left-24 sm:-left-32'

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 grid-overlay opacity-[0.15] sm:opacity-[0.2]" />
      <div
        className={`absolute top-1/3 -translate-y-1/2 ${positionClass} w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 ${glowColor} opacity-[0.08] sm:opacity-[0.1] rounded-full blur-[100px]`}
      />
    </div>
  )
}
