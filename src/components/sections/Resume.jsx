import { motion } from 'framer-motion'
import { FileText, Download } from 'lucide-react'
import { personalInfo } from '../../data/portfolioData'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import AnimatedButton from '../ui/AnimatedButton'
import SectionBackground from '../ui/SectionBackground'

export default function Resume() {
  return (
    <section id="resume" className="relative pt-14 pb-20 md:pt-24 md:pb-28 bg-bg-secondary/40 overflow-hidden">
      <SectionBackground glow="purple" position="right" />
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Full Details"
          title="My Resume"
          description="Get the complete picture — education, experience, and skills in one document."
        />

        <GlassCard className="max-w-xl mx-auto p-6 sm:p-10 flex flex-col items-center text-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-primary/15 flex items-center justify-center text-accent mb-6 shadow-glow"
          >
            <FileText size={30} className="sm:hidden" />
            <FileText size={36} className="hidden sm:block" />
          </motion.div>

          <h3 className="font-display text-xl font-semibold text-text mb-2">
            {personalInfo.name} — Resume
          </h3>
          <p className="text-text-secondary text-sm mb-8">
            PDF · Includes education, internship experience, projects & skills.
          </p>

          <AnimatedButton as="a" href={personalInfo.resumeFile} download>
            <Download size={16} /> Download Resume
          </AnimatedButton>
        </GlassCard>
      </div>
    </section>
  )
}
