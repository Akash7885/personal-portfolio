import { motion } from "framer-motion";
import { Sparkles, Heart, Languages } from "lucide-react";
import { about } from "../../data/portfolioData";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import SectionBackground from "../ui/SectionBackground";
import { fadeUp, staggerContainer } from "../../animations/variants";

export default function About() {
  return (
    <section id="about" className="relative pt-14 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      <SectionBackground glow="blue" position="left" />
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="About Me"
          title="The person behind the code"
          description="A quick look at my background, how I think, and what drives me."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Intro card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="lg:col-span-3"
          >
            <GlassCard className="p-8 h-full">
              <h3 className="font-display text-xl font-semibold mb-4 gradient-text">
                Career Objective
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                {about.intro}
              </p>

              <h4 className="text-sm font-semibold uppercase tracking-widest text-text-secondary mb-4">
                Journey So Far
              </h4>
              <ol className="space-y-4">
                {about.timeline.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-1 w-2 h-2 rounded-full bg-gradient-primary shrink-0 shadow-glow" />
                    <div>
                      <span className="text-xs font-semibold text-accent-secondary">
                        {item.year}
                      </span>
                      <p className="text-sm text-text">{item.label}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </GlassCard>
          </motion.div>

          {/* Side cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer(0.15)}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <GlassCard className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles size={18} className="text-accent" />
                  <h4 className="font-semibold text-text">Soft Skills</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {about.softSkills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-text-secondary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            <motion.div variants={fadeUp}>
              <GlassCard className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart size={18} className="text-accent-secondary" />
                  <h4 className="font-semibold text-text">Interests</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {about.interests.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-text-secondary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            <motion.div variants={fadeUp}>
              <GlassCard className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Languages size={18} className="text-accent" />
                  <h4 className="font-semibold text-text">Languages Known</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {about.languagesKnown.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-text-secondary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
