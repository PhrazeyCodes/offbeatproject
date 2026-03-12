import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin, Star } from 'lucide-react'
import StatusBadge from '@/components/StatusBadge'
import SnailLogo from '@/components/SnailLogo'
import { menuItems } from '@/lib/menu-data'
import { fmt } from '@/lib/utils'

const popular = menuItems.filter(i => i.popular).slice(0, 4)

// Real-feel review quotes based on actual Yelp/TikTok sentiment
const reviews = [
  { text: 'The Twice Matcha is the best matcha drink in Sacramento. Bar none.', author: 'Yelp reviewer' },
  { text: 'Light-filled, spacious, art gallery vibes. Felt so calm the moment I walked in.', author: 'Google review' },
  { text: 'BSL smelled like banana before I even took a sip. Absolutely addictive.', author: 'Yelp reviewer' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO — uses inline style bg to guarantee load ── */}
      <section
        className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to top, #1A1A18 0%, rgba(26,26,24,0.55) 45%, rgba(26,26,24,0.15) 100%), url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=90&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pb-16 pt-28 w-full">
          <StatusBadge className="mb-7 animate-fade-up opacity-0-init"/>

          <h1 className="font-serif text-[clamp(2.8rem,8vw,5.5rem)] text-cream leading-[1.02] mb-5 animate-fade-up opacity-0-init delay-100">
            slow down.<br/>
            <em className="text-sage not-italic">sip something.</em>
          </h1>

          <p className="text-cream/60 text-base sm:text-lg max-w-sm leading-relaxed mb-8 animate-fade-up opacity-0-init delay-200">
            Vietnamese-owned coffee + tea in Midtown Sacramento.
            Wed–Sun, 7AM–4PM.
          </p>

          <div className="flex flex-wrap gap-3 animate-fade-up opacity-0-init delay-300">
            <Link href="/order"
              className="inline-flex items-center gap-2 bg-cream text-ink text-sm font-semibold px-6 py-3 rounded-full hover:bg-sand transition-colors group">
              Order for pickup
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform"/>
            </Link>
            <Link href="/menu"
              className="inline-flex items-center gap-2 border border-cream/25 text-cream text-sm font-medium px-6 py-3 rounded-full hover:border-cream/50 transition-colors">
              See the menu
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-1.5 text-cream/35 text-xs animate-fade-up opacity-0-init delay-400">
            <MapPin size={11}/>
            <span>600 Broadway Ste A, Sacramento, CA 95818</span>
          </div>
        </div>

        {/* Snail watermark bottom right */}
        <div className="absolute bottom-8 right-8 text-cream/10 animate-float hidden sm:block">
          <SnailLogo size={72}/>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="bg-sage overflow-hidden py-2.5 select-none">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(8).fill(null).map((_, i) => (
            <span key={i} className="text-cream/90 text-[11px] font-semibold tracking-widest uppercase px-6">
              twice matcha ✦ saigon cinnamon ✦ vietnamese owned ✦ sacramento ✦ wed–sun 7–4 ✦
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="bg-sand">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
          {/* Interior image — their actual space is 3,000sqft, light-filled, loft-like */}
          <div className="relative">
            <div className="relative h-[420px] sm:h-[500px] rounded-sm overflow-hidden bg-bone">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&q=85&auto=format&fit=crop"
                alt="Offbeat Coffee interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating info card */}
            <div className="absolute -bottom-5 -right-2 sm:-right-6 bg-cream border border-bone rounded-sm p-4 shadow-lg max-w-[160px]">
              <SnailLogo size={32} className="text-ink mb-2"/>
              <p className="text-[10px] font-semibold text-ink leading-snug">Coffee + Tea<br/>Sacramento, CA</p>
              <div className="flex items-center gap-0.5 mt-1.5">
                {[1,2,3,4,5].map(s => <Star key={s} size={9} className="text-amber-400 fill-amber-400"/>)}
                <span className="text-[9px] text-mist ml-1">868 reviews</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[10px] font-semibold tracking-widest3 uppercase text-sage mb-3">Our story</p>
            <h2 className="font-serif text-[clamp(1.9rem,4vw,2.8rem)] text-ink leading-tight mb-5">
              Born from two<br/>cultures. Brewed<br/>with <em>one heart.</em>
            </h2>
            <div className="space-y-4 text-sm text-ink/60 leading-relaxed">
              <p>
                Founded by Vivian Tran and Thao Nguyen, Offbeat grew from years of pop-ups and a
                dream that started in 2015 — into Sacramento&apos;s most intentional café space.
              </p>
              <p>
                Our 3,000 sq ft home on Broadway feels more like an art gallery than a coffee shop.
                Light-filled, open, and quiet — a place to slow down. Every drink is made with
                care: espresso on a 2-group Modbar, drip on a Fellow Aiden Precision, and
                matcha that actually tastes like matcha.
              </p>
              <p>
                Vietnamese-inspired flavors — Saigon Cinnamon, BSL, and our famous Twice Matcha —
                sit alongside classic coffee done right. Come as you are.
              </p>
            </div>
            <Link href="/location"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-ink border-b border-ink/20 hover:border-ink pb-0.5 transition-colors group">
              Come visit us
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform"/>
            </Link>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-bone">
          {[
            { icon: '🍵', title: 'Ceremonial matcha', body: 'We use Rocky\'s Matcha — stone-ground, ceremonial grade. Earthy, grassy, and unmistakably real.' },
            { icon: '☕', title: 'Single-origin espresso', body: 'Modbar espresso system, single-origin beans. We let the coffee speak for itself.' },
            { icon: '🐌', title: 'Community first', body: 'Art shows, pop-ups, local collabs. Offbeat is a space for the Sacramento community first.' },
          ].map(v => (
            <div key={v.title} className="bg-cream p-8 flex flex-col gap-3">
              <span className="text-2xl">{v.icon}</span>
              <h3 className="font-serif text-lg text-ink">{v.title}</h3>
              <p className="text-sm text-ink/55 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── POPULAR ITEMS ── */}
      <section className="bg-sand py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[10px] font-semibold tracking-widest3 uppercase text-sage mb-2">From the menu</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink">What people love</h2>
            </div>
            <Link href="/menu" className="text-sm font-medium text-mist hover:text-ink transition-colors hidden sm:flex items-center gap-1 group">
              Full menu <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform"/>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {popular.map((item) => (
              <Link key={item.id} href="/order"
                className="group block bg-cream rounded-sm overflow-hidden border border-bone hover:border-clay transition-colors menu-card">
                <div className="relative aspect-square overflow-hidden bg-bone">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.tags?.includes('fan favorite') && (
                    <span className="absolute top-2 left-2 pill bg-sage text-cream">fan fav</span>
                  )}
                  {item.tags?.includes('house special') && (
                    <span className="absolute top-2 left-2 pill bg-rust text-cream">house special</span>
                  )}
                </div>
                <div className="p-3.5">
                  <p className="font-medium text-ink text-sm">{item.name}</p>
                  <p className="text-xs text-mist mt-1 line-clamp-2 leading-relaxed">{item.description}</p>
                  <p className="text-sm font-semibold text-ink mt-2">{fmt(item.price)}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link href="/menu" className="text-sm font-semibold text-ink underline underline-offset-2">See full menu →</Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="mb-8">
          <p className="text-[10px] font-semibold tracking-widest3 uppercase text-sage mb-2">What people say</p>
          <h2 className="font-serif text-3xl text-ink">The community loves it</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <div key={i} className="bg-sand border border-bone rounded-sm p-6">
              <div className="flex gap-0.5 mb-3">
                {[1,2,3,4,5].map(s => <Star key={s} size={12} className="text-amber-400 fill-amber-400"/>)}
              </div>
              <p className="text-sm text-ink/70 leading-relaxed italic mb-3">&ldquo;{r.text}&rdquo;</p>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-mist">{r.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PHOTO COLLAGE ── */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-16">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
          {[
            { src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80&auto=format&fit=crop', cls: 'col-span-2 row-span-2', h: 'h-64 sm:h-80' },
            { src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80&auto=format&fit=crop', cls: '', h: 'h-32 sm:h-40' },
            { src: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80&auto=format&fit=crop', cls: '', h: 'h-32 sm:h-40' },
            { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80&auto=format&fit=crop', cls: '', h: 'h-32 sm:h-40' },
            { src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80&auto=format&fit=crop', cls: '', h: 'h-32 sm:h-40' },
            { src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80&auto=format&fit=crop', cls: '', h: 'h-32 sm:h-40' },
          ].map((p, i) => (
            <div key={i} className={`${p.cls} relative overflow-hidden rounded-sm bg-bone group`}>
              <div className={p.h}>
                <img src={p.src} alt="Offbeat Coffee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs text-mist">Follow us <a href="https://instagram.com/offbeatcoffeee" target="_blank" rel="noopener noreferrer" className="text-ink font-medium hover:text-sage transition-colors">@offbeatcoffeee</a></p>
          <a href="https://instagram.com/offbeatcoffeee" target="_blank" rel="noopener noreferrer"
            className="text-xs font-medium text-mist hover:text-ink transition-colors">Instagram ↗</a>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-ink py-20 px-5">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-cream/15 mx-auto mb-6 animate-float inline-block">
            <SnailLogo size={52}/>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-cream mb-3 leading-snug">
            Come find us.<br/><em className="text-sage">We saved you a seat.</em>
          </h2>
          <p className="text-cream/50 text-sm mb-8">Wed–Sun · 7AM–4PM · 600 Broadway Ste A</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/order"
              className="inline-flex items-center gap-2 bg-sage hover:bg-sage-dark text-cream text-sm font-semibold px-6 py-3 rounded-full transition-colors">
              Order online
            </Link>
            <Link href="/location"
              className="inline-flex items-center gap-2 border border-cream/20 text-cream text-sm font-medium px-6 py-3 rounded-full hover:border-cream/40 transition-colors">
              Get directions
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
