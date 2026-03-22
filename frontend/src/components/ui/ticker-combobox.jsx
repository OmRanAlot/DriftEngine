import React, { useMemo, useState, useEffect, useCallback } from 'react'
import tickerData from '@/data/tickers.json'
import { useDebounce } from '@/hooks/useDebounce'

// ─── Filtering ────────────────────────────────────────────────────────────────

function filterTickers(query) {
  if (!query || query.trim().length === 0) return []

  const q = query.trim().toLowerCase()

  const symbolPrefix = []
  const nameMatch = []

  for (const item of tickerData) {
    const sym = item.symbol.toLowerCase()
    const name = item.name.toLowerCase()

    if (sym.startsWith(q)) {
      symbolPrefix.push(item)
    } else if (name.includes(q)) {
      nameMatch.push(item)
    }

    if (symbolPrefix.length + nameMatch.length >= 20) break
  }

  // Symbol prefix matches first, then name matches — cap at 8 total
  return [...symbolPrefix, ...nameMatch].slice(0, 8)
}

// ─── Component ────────────────────────────────────────────────────────────────

export function TickerCombobox({ value, onSelect, inputRef }) {
  const debouncedValue = useDebounce(value, 150)
  const [activeIndex, setActiveIndex] = useState(0)
  const [visible, setVisible] = useState(false)

  const results = useMemo(() => filterTickers(debouncedValue), [debouncedValue])

  // Show dropdown when there are results
  useEffect(() => {
    setVisible(results.length > 0)
    setActiveIndex(0)
  }, [results])

  // Keyboard navigation on the input element
  const handleKeyDown = useCallback(
    (e) => {
      if (!visible) return

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex((i) => Math.min(i + 1, results.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex((i) => Math.max(i - 1, 0))
      } else if (e.key === 'Enter') {
        if (results[activeIndex]) {
          e.preventDefault()
          onSelect(results[activeIndex])
          setVisible(false)
        }
      } else if (e.key === 'Escape') {
        setVisible(false)
      }
    },
    [visible, results, activeIndex, onSelect]
  )

  useEffect(() => {
    const el = inputRef?.current
    if (!el) return
    el.addEventListener('keydown', handleKeyDown)
    return () => el.removeEventListener('keydown', handleKeyDown)
  }, [inputRef, handleKeyDown])

  // Close on outside click
  useEffect(() => {
    const handleBlur = () => setVisible(false)
    const el = inputRef?.current
    if (!el) return
    el.addEventListener('blur', handleBlur)
    return () => el.removeEventListener('blur', handleBlur)
  }, [inputRef])

  if (!visible) return null

  return (
    <div
      className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 overflow-hidden rounded-xl border border-white/10 bg-[var(--de-surface,#0d0d0d)] shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
      style={{ backdropFilter: 'blur(20px)' }}
    >
      <ul role="listbox" className="py-1">
        {results.map((item, idx) => (
          <li
            key={item.symbol}
            role="option"
            aria-selected={idx === activeIndex}
            onMouseDown={(e) => {
              // onMouseDown fires before blur, so the dropdown won't disappear first
              e.preventDefault()
              onSelect(item)
              setVisible(false)
            }}
            onMouseEnter={() => setActiveIndex(idx)}
            className={`flex cursor-pointer items-center gap-3 px-4 py-2.5 transition-colors ${
              idx === activeIndex
                ? 'bg-white/8 text-white'
                : 'text-white/70 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span className="w-14 shrink-0 font-mono text-sm font-semibold tracking-wide text-white">
              {item.symbol}
            </span>
            <span className="truncate text-sm">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
