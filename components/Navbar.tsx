'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { cn } from '@/lib/utils'
import SnailLogo from './SnailLogo'

const links = [
  { href: '/',         label: 'Home' },
  { href: '/menu',     label: 'Menu' },
  { href: '/order',    label: 'Order' },
  { href: '/location', label: 'Visit' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const pathname                  = usePathname()
  const { count, openCart }       = useCart()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <header className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled ? 'bg-cream/95 backdrop-blur-md border-b border-bone' : 'bg-transparent'
      )}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="snail-logo text-ink">
              <SnailLogo size={32} />
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-lg text-ink tracking-tight">offbeat</span>
              <span className="text-[9px] font-sans font-medium tracking-widest2 text-mist uppercase">coffee + tea</span>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                className={cn(
                  'text-sm font-medium link-underline transition-colors',
                  pathname === l.href ? 'text-ink' : 'text-mist hover:text-ink'
                )}
              >{l.label}</Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button onClick={openCart} className="relative p-2 text-ink hover:text-sage transition-colors" aria-label="Cart">
              <ShoppingBag size={19} strokeWidth={1.8}/>
              {count > 0 && (
                <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-sage text-cream text-[9px] font-bold rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-ink" aria-label="Menu">
              {menuOpen ? <X size={19}/> : <Menu size={19}/>}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-cream/98 backdrop-blur-md border-t border-bone">
            <nav className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
              {links.map(l => (
                <Link key={l.href} href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'py-2.5 text-sm font-medium border-b border-bone/50 last:border-0',
                    pathname === l.href ? 'text-sage' : 'text-ink/70'
                  )}
                >{l.label}</Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
