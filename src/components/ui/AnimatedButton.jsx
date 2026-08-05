import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function AnimatedButton({
  children,
  variant = 'primary',
  as = 'button',
  className,
  ...props
}) {
  const Component = motion[as] || motion.button

  return (
    <Component
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={clsx(
        'magnetic inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold focus-ring transition-shadow',
        variant === 'primary' && 'bg-gradient-primary text-white shadow-glow hover:shadow-glow-purple',
        variant === 'outline' && 'glass text-text hover:shadow-glow',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
