import { GraduationCap, Award } from 'lucide-react'
import { education, workshops } from '../../data/portfolioData'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import TimelineCard from '../cards/TimelineCard'
import SectionBackground from '../ui/SectionBackground'

export default function Education() {
  return (
    <section id="education" className="relative pt-14 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      <SectionBackground glow="blue" position="left" />
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
          description="Formal education and hands-on learning that shaped my technical foundation."
        />

        <div className="relative mb-16">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent-secondary/50 to-transparent" />

          <div className="space-y-12">
            {education.map((edu, i) => (
              <TimelineCard key={edu.degree} index={i} side={i % 2 === 0 ? 'left' : 'right'}>
                <GlassCard className="p-6 hover:shadow-glow transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-gradient-primary/15 flex items-center justify-center text-accent">
                      <GraduationCap size={16} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-text">{edu.degree}</h3>
                      <p className="text-xs text-text-secondary">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3 text-sm">
                    <span className="text-text-secondary">{edu.duration}</span>
                    <span className="font-semibold gradient-text">{edu.score}</span>
                  </div>
                </GlassCard>
              </TimelineCard>
            ))}
          </div>
        </div>

        {workshops.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-text-secondary mb-6 text-center">
              Workshops & Certifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {workshops.map((w) => (
                <GlassCard key={w.title} className="p-6 hover:shadow-glow transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-primary/15 flex items-center justify-center text-accent-secondary shrink-0">
                      <Award size={16} />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-text">{w.title}</h4>
                      <p className="text-xs text-text-secondary mt-1">{w.org}</p>
                      <p className="text-xs text-accent-secondary mt-1">{w.duration}</p>
                      <p className="text-sm text-text-secondary mt-2">{w.description}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
