import { motion } from 'framer-motion'
import { fadeUp } from '../../animations/variants'

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp}
      className={`mb-14 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'text-left'}`}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-accent-secondary mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
