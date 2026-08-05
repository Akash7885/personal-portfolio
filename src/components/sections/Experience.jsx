import { Briefcase } from 'lucide-react'
import { experience } from '../../data/portfolioData'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import TimelineCard from '../cards/TimelineCard'
import SectionBackground from '../ui/SectionBackground'

export default function Experience() {
  return (
    <section id="experience" className="relative pt-14 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      <SectionBackground glow="blue" position="left" />
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Where I've Worked"
          title="Experience"
          description="Real-world work building interfaces and features that ship."
        />

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent-secondary/50 to-transparent" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <TimelineCard key={exp.company} index={i} side={i % 2 === 0 ? 'left' : 'right'}>
                <GlassCard className="p-6 hover:shadow-glow transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-primary/15 flex items-center justify-center text-accent">
                      <Briefcase size={16} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-text">{exp.role}</h3>
                      <p className="text-xs text-text-secondary">{exp.company} · {exp.duration}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((r) => (
                      <li key={r} className="text-sm text-text-secondary leading-relaxed flex gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-secondary shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-accent-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </TimelineCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
