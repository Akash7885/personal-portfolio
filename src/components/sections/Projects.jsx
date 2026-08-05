import { projects } from '../../data/portfolioData'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../cards/ProjectCard'
import SectionBackground from '../ui/SectionBackground'

export default function Projects() {
  return (
    <section id="projects" className="relative pt-14 pb-20 md:pt-24 md:pb-28 bg-bg-secondary/40 overflow-hidden">
      <SectionBackground glow="purple" position="right" />
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          description="Hands-on builds that reflect how I approach real problems."
        />

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
