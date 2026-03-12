import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  // Base: tiny pill with monospace label
  'inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] transition-colors',
  {
    variants: {
      variant: {
        // Orange — engine / feature labels
        default:
          'bg-[var(--de-orange-dim)] text-[var(--de-orange)] border border-[var(--de-orange)]/20',
        // Muted outline — metadata
        outline:
          'border border-[var(--de-border-2)] text-[var(--de-text-muted)]',
        // Flat dark — secondary info
        secondary:
          'bg-[var(--de-surface-2)] text-[var(--de-text-muted)]',
        // Regime badges
        bullish:
          'bg-[var(--de-green-dim)] text-[var(--de-green)] border border-[var(--de-green)]/20',
        bearish:
          'bg-[var(--de-red-dim)] text-[var(--de-red)] border border-[var(--de-red)]/20',
        neutral:
          'bg-white/[0.04] text-[var(--de-text-muted)] border border-[var(--de-border-2)]',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
