import { skills } from '../../data/portfolioData'
import SectionHeading from '../ui/SectionHeading'
import SkillCard from '../cards/SkillCard'
import SectionBackground from '../ui/SectionBackground'

const CATEGORY_LABELS = {
  languages: 'Languages',
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
}

export default function Skills() {
  const categories = Object.keys(skills).filter((k) => skills[k]?.length)

  return (
    <section id="skills" className="relative pt-14 pb-20 md:pt-24 md:pb-28 bg-bg-secondary/40 overflow-hidden">
      <SectionBackground glow="purple" position="right" />
      
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="What I Work With"
          title="Skills & Technologies"
          description="Tools and languages I use to build responsive, user-friendly web applications."
        />

        <div className="space-y-14">
          {categories.map((cat) => (
            <div key={cat}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-text-secondary mb-6">
                {CATEGORY_LABELS[cat] || cat}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {skills[cat].map((skill, i) => (
                  <SkillCard key={skill.name} {...skill} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
