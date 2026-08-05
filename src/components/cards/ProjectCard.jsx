import { memo } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Folder } from 'lucide-react'
import useTiltEffect from '../../hooks/useTiltEffect'

function ProjectCard({ project, index = 0 }) {
  const { ref, onMouseMove, onMouseLeave } = useTiltEffect(6)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transition: 'transform 0.2s ease-out' }}
      className="glass gradient-border rounded-2xl overflow-hidden flex flex-col hover:shadow-glow"
    >
      {/* Image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent-secondary/20 flex items-center justify-center border-b border-white/5">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <Folder size={44} className="text-text-secondary/50" />
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl font-semibold text-text mb-1">{project.title}</h3>
        <p className="text-xs text-text-secondary mb-3">{project.org}</p>
        <p className="text-sm text-text-secondary leading-relaxed mb-4">{project.description}</p>

        <ul className="text-sm text-text-secondary space-y-1.5 mb-4">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-accent-secondary border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic flex-1 inline-flex items-center justify-center gap-2 rounded-full glass px-4 py-2.5 text-sm font-medium hover:shadow-glow transition-shadow focus-ring"
          >
            <Github size={16} /> Code
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-4 py-2.5 text-sm font-semibold shadow-glow hover:shadow-glow-purple transition-shadow focus-ring"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          ) : (
            <span className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white/5 px-4 py-2.5 text-sm font-medium text-text-secondary/60 cursor-not-allowed">
              Demo TODO
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default memo(ProjectCard)
