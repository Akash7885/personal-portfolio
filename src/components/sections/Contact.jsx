import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Mail, Phone, Github, Linkedin, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react'
import { contactInfo, emailjsConfig } from '../../data/portfolioData'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'
import AnimatedButton from '../ui/AnimatedButton'

import SectionBackground from '../ui/SectionBackground'

const INFO_ITEMS = [
  { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Phone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/[^\d+]/g, '')}` },
  { icon: Github, label: 'GitHub', value: 'github.com/Akash7885', href: contactInfo.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/akash-dabhi-', href: contactInfo.linkedin },
  { icon: MapPin, label: 'Location', value: contactInfo.location, href: null },
]

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') 

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')
    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        emailjsConfig.publicKey
      )
      setStatus('success')
      setForm(initialForm)
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="relative pt-14 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      <SectionBackground glow="blue" position="left" />
      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something together"
          description="Have an opportunity or an idea? My inbox is open."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-4">
            {INFO_ITEMS.map(({ icon: Icon, label, value, href }, i) => {
              const content = (
                <GlassCard className="p-5 flex items-center gap-4 hover:shadow-glow transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-gradient-primary/15 flex items-center justify-center text-accent shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-text-secondary">{label}</p>
                    <p className="text-sm font-medium text-text truncate">{value}</p>
                  </div>
                </GlassCard>
              )
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="block magnetic">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-6 md:p-8">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Name"
                    value={form.name}
                    onChange={handleChange('name')}
                    error={errors.name}
                    autoComplete="name"
                  />
                  <Field
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    error={errors.email}
                    autoComplete="email"
                  />
                </div>
                <Field
                  label="Subject"
                  value={form.subject}
                  onChange={handleChange('subject')}
                  error={errors.subject}
                />
                <Field
                  label="Message"
                  as="textarea"
                  rows={5}
                  value={form.message}
                  onChange={handleChange('message')}
                  error={errors.message}
                />

                <AnimatedButton type="submit" disabled={status === 'sending'} className="w-full justify-center">
                  <AnimatePresence mode="wait" initial={false}>
                    {status === 'sending' ? (
                      <motion.span key="sending" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <Loader2 size={16} className="animate-spin" /> Sending...
                      </motion.span>
                    ) : status === 'success' ? (
                      <motion.span key="success" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <CheckCircle2 size={16} /> Message Sent
                      </motion.span>
                    ) : (
                      <motion.span key="idle" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <Send size={16} /> Send Message
                      </motion.span>
                    )}
                  </AnimatePresence>
                </AnimatedButton>

                {status === 'error' && (
                  <p className="text-sm text-red-400 text-center">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, error, as = 'input', ...props }) {
  const Component = as
  return (
    <label className="block">
      <span className="text-xs font-medium text-text-secondary mb-1.5 block">{label}</span>
      <Component
        {...props}
        className={`w-full rounded-xl bg-white/5 border px-4 py-3 text-sm text-text placeholder:text-text-secondary/50 focus-ring outline-none transition-colors ${
          error ? 'border-red-400/60' : 'border-white/10 focus:border-accent/60'
        }`}
      />
      {error && <span className="text-xs text-red-400 mt-1 block">{error}</span>}
    </label>
  )
}
