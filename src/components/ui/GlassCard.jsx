import clsx from 'clsx'

export default function GlassCard({ children, className, strong = false, ...props }) {
  return (
    <div
      className={clsx(
        strong ? 'glass-strong' : 'glass',
        'rounded-2xl gradient-border',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
