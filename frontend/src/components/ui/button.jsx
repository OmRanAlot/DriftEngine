import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // Base styles shared by all variants
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'rounded text-sm font-medium transition-all',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
    'disabled:pointer-events-none disabled:opacity-40',
  ].join(' '),
  {
    variants: {
      variant: {
        default:
          'bg-[var(--de-orange)] text-black hover:opacity-90 shadow-[0_0_20px_var(--de-orange-glow)]',
        outline:
          'border border-[var(--de-border-2)] bg-transparent text-[var(--de-text)] hover:bg-[var(--de-surface-2)] hover:border-[var(--de-orange)]/40',
        ghost:
          'text-[var(--de-text-muted)] hover:bg-[var(--de-surface-2)] hover:text-[var(--de-text)]',
        secondary:
          'bg-[var(--de-surface-2)] text-[var(--de-text)] hover:bg-white/10',
        destructive:
          'bg-[var(--de-red)]/80 text-white hover:bg-[var(--de-red)]',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm:      'h-7 px-3 text-xs',
        lg:      'h-11 px-8 text-base',
        icon:    'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size:    'default',
    },
  }
)

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
