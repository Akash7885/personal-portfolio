import { motion } from 'framer-motion'
import { slideInLeft, slideInRight } from '../../animations/variants'

export default function TimelineCard({ index = 0, side = 'left', children }) {
  const variant = side === 'left' ? slideInLeft : slideInRight

  return (
    <div className="relative flex md:justify-between items-center md:odd:flex-row-reverse w-full">
      {/* Node */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-gradient-primary shadow-glow z-10" />

      <div className="hidden md:block w-[calc(50%-2.5rem)]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={variant}
        custom={index * 0.1}
        className="w-full pl-12 md:pl-0 md:w-[calc(50%-2.5rem)]"
      >
        {children}
      </motion.div>
    </div>
  )
}
