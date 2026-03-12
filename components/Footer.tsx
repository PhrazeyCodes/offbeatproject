import Link from 'next/link'
import { Instagram, MapPin, Clock } from 'lucide-react'
import SnailLogo from './SnailLogo'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3 text-cream">
              <SnailLogo size={28}/>
              <span className="font-serif text-lg">offbeat</span>
            </div>
            <p className="text-sm leading-relaxed text-cream/50 mb-5 max-w-xs">
              Coffee + tea, made slowly and with care. 
              Vietnamese-owned, Sacramento-grown.
            </p>
            <div className="inline-flex items-center gap-1.5 border border-cream/15 rounded-full px-3 py-1.5">
              <span className="text-sm">🇻🇳</span>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-sage">Vietnamese Owned</span>
            </div>
          </div>

          {/* Hours */}
          <div>
            <p className="text-[10px] font-semibold tracking-widest3 uppercase text-cream/30 mb-4">Hours</p>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-cream/50">Mon – Tue</span>
                <span className="text-rust font-medium">Closed</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cream/50">Wed – Sun</span>
                <span className="text-cream/80">7AM – 4PM</span>
              </div>
            </div>
            <div className="mt-5 flex items-start gap-2 text-sm">
              <MapPin size={13} className="text-sage mt-0.5 flex-shrink-0"/>
              <address className="not-italic text-cream/50 leading-relaxed">
                600 Broadway Ste A<br/>
                Sacramento, CA 95818
              </address>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-[10px] font-semibold tracking-widest3 uppercase text-cream/30 mb-4">Find Us</p>
            <div className="space-y-3">
              <a href="https://instagram.com/offbeatcoffeee" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-cream/50 hover:text-cream transition-colors">
                <Instagram size={14}/> @offbeatcoffeee
              </a>
              <a href="https://www.yelp.com/biz/offbeat-coffee-sacramento-2" target="_blank" rel="noopener noreferrer"
                className="text-sm text-cream/50 hover:text-cream transition-colors block">
                Yelp Reviews ↗
              </a>
            </div>
            <div className="mt-6 space-y-1.5">
              {[
                { href: '/menu',     label: 'Menu' },
                { href: '/order',    label: 'Order Online' },
                { href: '/location', label: 'Visit Us' },
              ].map(l => (
                <Link key={l.href} href={l.href} className="block text-sm text-cream/50 hover:text-cream transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/25">© {new Date().getFullYear()} Offbeat Coffee + Tea</p>
          <p className="text-xs text-cream/25">Made with 🍵 in Sacramento</p>
        </div>
      </div>
    </footer>
  )
}
