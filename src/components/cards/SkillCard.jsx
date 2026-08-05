import { memo } from 'react'
import { motion } from 'framer-motion'
import { getIcon } from '../../utils/iconMap'
import useTiltEffect from '../../hooks/useTiltEffect'

function SkillCard({ name, icon, index = 0 }) {
  const Icon = getIcon(icon)
  const { ref, onMouseMove, onMouseLeave } = useTiltEffect(8)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transition: 'transform 0.2s ease-out' }}
      className="group relative glass gradient-border rounded-2xl p-6 flex flex-col items-center gap-3 hover:shadow-glow"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-primary/10 text-accent group-hover:text-accent-secondary group-hover:shadow-glow-purple transition-all">
        <Icon size={26} />
      </div>
      <span className="text-sm font-medium text-text-secondary group-hover:text-text transition-colors">
        {name}
      </span>
    </motion.div>
  )
}

export default memo(SkillCard)
