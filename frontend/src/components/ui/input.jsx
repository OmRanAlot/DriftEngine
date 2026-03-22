import * as React from 'react'
import { cn } from '@/lib/utils'

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      className={cn(
        'flex w-full rounded-md border border-[var(--de-border-2)] bg-transparent px-3 py-2',
        'text-sm text-[var(--de-text)] placeholder:text-[var(--de-text-subtle)]',
        'transition-colors focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
}

export { Input }
