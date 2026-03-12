'use client'
import { useEffect, useState } from 'react'
import { getCafeStatus } from '@/lib/utils'

export default function StatusBadge({ className = '' }: { className?: string }) {
  const [s, setS] = useState<ReturnType<typeof getCafeStatus> | null>(null)

  useEffect(() => {
    setS(getCafeStatus())
    const t = setInterval(() => setS(getCafeStatus()), 60_000)
    return () => clearInterval(t)
  }, [])

  if (!s) return <div className={`h-7 w-28 rounded-full bg-bone animate-pulse ${className}`}/>

  return (
    <span className={`inline-flex items-center gap-2 text-xs font-medium px-3.5 py-1.5 rounded-full border ${
      s.isOpen
        ? 'bg-sage/10 border-sage/30 text-sage open-pulse'
        : 'bg-bone border-clay/30 text-mist'
    } ${className}`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
        s.isOpen ? 'bg-sage animate-pulse' : 'bg-clay'
      }`}/>
      {s.isOpen ? 'Open now' : s.closed ? 'Closed today' : 'Closed'}
      <span className="opacity-60">·</span>
      <span className="opacity-70">{s.next}</span>
    </span>
  )
}
