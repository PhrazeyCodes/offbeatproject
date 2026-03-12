import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function fmt(price: number) {
  return `$${price.toFixed(2)}`
}

/**
 * Real Offbeat hours from their Instagram:
 * Monday & Tuesday: CLOSED
 * Wednesday – Sunday: 7am – 4pm (Pacific Time)
 */
export function getCafeStatus() {
  const pt  = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }))
  const day = pt.getDay()   // 0=Sun 1=Mon 2=Tue 3=Wed 4=Thu 5=Fri 6=Sat
  const h   = pt.getHours() + pt.getMinutes() / 60

  const closed = day === 1 || day === 2           // Mon, Tue
  const isOpen = !closed && h >= 7 && h < 16     // 7am–4pm

  const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

  let next = ''
  if (isOpen) {
    next = 'Closes at 4:00 PM'
  } else if (closed) {
    // Find next open day (Wed = 3)
    const daysUntilWed = ((3 - day + 7) % 7) || 7
    next = daysUntilWed === 1 ? 'Opens tomorrow (Wed) at 7AM' : `Opens ${dayNames[(day + daysUntilWed) % 7]} at 7AM`
  } else if (h < 7) {
    next = 'Opens at 7:00 AM'
  } else {
    // After 4pm — find next open day
    const nextDay = (day + 1) % 7
    const nextClosed = nextDay === 1 || nextDay === 2
    next = nextClosed ? 'Opens Wednesday at 7AM' : `Opens tomorrow at 7AM`
  }

  return { isOpen, next, closed }
}
