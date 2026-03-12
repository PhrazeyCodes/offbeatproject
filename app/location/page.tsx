import { MapPin, Clock, Instagram, Navigation, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import StatusBadge from '@/components/StatusBadge'

const hoursData = [
  { day: 'Monday',    hours: null },
  { day: 'Tuesday',   hours: null },
  { day: 'Wednesday', hours: '7:00 AM – 4:00 PM' },
  { day: 'Thursday',  hours: '7:00 AM – 4:00 PM' },
  { day: 'Friday',    hours: '7:00 AM – 4:00 PM' },
  { day: 'Saturday',  hours: '7:00 AM – 4:00 PM' },
  { day: 'Sunday',    hours: '7:00 AM – 4:00 PM' },
]

const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' })

const igPhotos = [
  'https://images.unsplash.com/photo-1442975631134-7b6fb5626274?w=400&q=80',
  'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
  'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=400&q=80',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
  'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80',
  'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80',
  'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80',
  'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80',
  'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&q=80',
]

export default function LocationPage() {
  return (
    <div className="pt-14">
      {/* Header */}
      <div className="bg-sand border-b border-bone">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
          <p className="text-[10px] font-semibold tracking-widest3 uppercase text-sage mb-2">Find us</p>
          <h1 className="font-serif text-4xl sm:text-6xl text-ink">Visit Offbeat</h1>
          <StatusBadge className="mt-4"/>
        </div>
      </div>

      {/* Map + Info */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Embedded map */}
          <div className="rounded-sm overflow-hidden border border-bone aspect-[4/3] sm:aspect-[3/2] bg-bone">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.5!2d-121.5025!3d38.5514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad0a5f42e1db7%3A0x1234!2s600+Broadway+Ste+A%2C+Sacramento%2C+CA+95818!5e0!3m2!1sen!2sus!4v1"
              width="100%" height="100%"
              style={{ border: 0, filter: 'sepia(0.15) contrast(1.05)' }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Offbeat Coffee location"
            />
          </div>

          {/* Info column */}
          <div className="space-y-8">
            {/* Address */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={14} className="text-sage flex-shrink-0"/>
                <h3 className="font-serif text-xl text-ink">Location</h3>
              </div>
              <p className="text-sm text-ink/70 leading-relaxed pl-5">
                600 Broadway Ste A<br/>
                Sacramento, CA 95818<br/>
                <span className="text-mist text-xs">Midtown · Street parking on Broadway</span>
              </p>
              <a href="https://maps.google.com/?q=600+Broadway+Ste+A+Sacramento+CA+95818"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 pl-5 text-xs font-semibold text-sage hover:text-sage-dark transition-colors">
                <Navigation size={11}/> Get directions
              </a>
            </div>

            {/* Hours */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock size={14} className="text-sage flex-shrink-0"/>
                <h3 className="font-serif text-xl text-ink">Hours</h3>
              </div>
              <div className="pl-5 space-y-1.5">
                {hoursData.map(h => (
                  <div key={h.day}
                    className={`flex justify-between items-center text-sm py-1.5 border-b border-bone/50 last:border-0 ${
                      h.day === todayName ? 'font-semibold text-ink' : 'text-ink/50'
                    }`}>
                    <span className="flex items-center gap-2">
                      {h.day === todayName && (
                        <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0"/>
                      )}
                      {h.day}
                    </span>
                    {h.hours
                      ? <span>{h.hours}</span>
                      : <span className="text-rust font-medium text-xs uppercase tracking-wide">Closed</span>
                    }
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="pl-5 flex flex-col gap-2.5">
              <a href="https://instagram.com/offbeatcoffeee" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-ink/60 hover:text-ink transition-colors">
                <Instagram size={14} className="text-sage"/> @offbeatcoffeee
              </a>
              <a href="https://www.yelp.com/biz/offbeat-coffee-sacramento-2" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-ink/60 hover:text-ink transition-colors">
                <span className="text-rust font-bold text-xs">★</span> View on Yelp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interior photos */}
      <section className="bg-sand py-14 border-y border-bone">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-[10px] font-semibold tracking-widest3 uppercase text-sage mb-2">Inside offbeat</p>
          <h2 className="font-serif text-3xl text-ink mb-8">The space</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80', h: 'aspect-square', label: 'The floor' },
              { src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&q=80', h: 'aspect-[4/5] md:aspect-square', label: 'Open seating' },
              { src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80', h: 'aspect-square', label: 'Quiet corners' },
            ].map(p => (
              <div key={p.src} className={`relative ${p.h} rounded-sm overflow-hidden bg-bone group`}>
                <Image src={p.src} alt={p.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="400px"/>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram grid — community section */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-[10px] font-semibold tracking-widest3 uppercase text-sage mb-2">Community</p>
            <h2 className="font-serif text-3xl text-ink">@offbeatcoffeee</h2>
          </div>
          <a href="https://instagram.com/offbeatcoffeee" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-ink border border-bone rounded-full px-4 py-2 hover:bg-bone transition-colors">
            <Instagram size={13}/> Follow
          </a>
        </div>
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
          {igPhotos.map((src, i) => (
            <a key={i} href="https://instagram.com/offbeatcoffeee" target="_blank" rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-sm bg-bone block">
              <Image src={src} alt="Offbeat Instagram" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="200px"/>
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300 flex items-center justify-center">
                <Instagram size={20} className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-200"/>
              </div>
            </a>
          ))}
        </div>
        <p className="text-xs text-mist mt-4 text-center">
          Tag us in your photos — we might just repost you 🐌
        </p>
      </section>

      {/* Bottom CTA */}
      <div className="bg-sage py-14 px-5 text-center">
        <h3 className="font-serif text-3xl text-cream mb-2">Skip the wait.</h3>
        <p className="text-cream/70 text-sm mb-6">Order ahead, pick up when you're ready.</p>
        <Link href="/order"
          className="inline-flex items-center gap-2 bg-cream text-sage-dark text-sm font-semibold px-7 py-3 rounded-full hover:bg-sand transition-colors">
          Order for pickup
        </Link>
      </div>
    </div>
  )
}
