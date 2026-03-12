'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'
import { menuItems, milkChoices, syrupChoices, tempChoices, categoryLabels, type Category, type MenuItem } from '@/lib/menu-data'
import { useCart } from '@/lib/cart'
import { fmt } from '@/lib/utils'

const cats: Category[] = ['matcha', 'coffee', 'favorites', 'bites']

export default function MenuPage() {
  const [active, setActive]       = useState<'all' | Category>('all')
  const [expanding, setExpanding] = useState<string | null>(null)
  const [milk, setMilk]           = useState('Whole')
  const [syrup, setSyrup]         = useState('No syrup')
  const [temp, setTemp]           = useState('Iced')
  const { add }                   = useCart()

  const list = active === 'all' ? menuItems : menuItems.filter(i => i.category === active)

  const handleAdd = (id: string) => {
    const item = menuItems.find(i => i.id === id)!
    if ((item.milkOptions || item.syrupOptions) && expanding !== id) {
      setExpanding(id); return
    }
    add(item, {
      milk: item.milkOptions ? milk : undefined,
      note: item.syrupOptions && syrup !== 'No syrup' ? syrup : undefined,
      temp: item.tempOptions ? temp : undefined,
    })
    setExpanding(null)
  }

  return (
    <div className="pt-14">
      <div className="bg-sand border-b border-bone">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
          <p className="text-[10px] font-semibold tracking-widest3 uppercase text-sage mb-2">What we make</p>
          <h1 className="font-serif text-4xl sm:text-6xl text-ink">The Menu</h1>
          <p className="text-sm text-mist mt-3 max-w-sm leading-relaxed">
            Everything made to order. We don&apos;t rush quality.
          </p>
          <div className="mt-4 text-xs text-mist space-y-0.5">
            <p><span className="font-semibold text-ink">Milk options:</span> whole, oat</p>
            <p><span className="font-semibold text-ink">Syrups:</span> vanilla bean (+$1), agave (+$0.50)</p>
          </div>
        </div>
      </div>

      <div className="sticky top-14 z-30 bg-cream/95 backdrop-blur-md border-b border-bone">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex gap-0 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {(['all', ...cats] as const).map(c => (
              <button key={c} onClick={() => { setActive(c); setExpanding(null) }}
                className={`px-4 py-3.5 text-xs font-semibold tracking-wide uppercase whitespace-nowrap border-b-2 transition-all ${
                  active === c ? 'border-sage text-sage' : 'border-transparent text-mist hover:text-ink'
                }`}>
                {c === 'all' ? 'All' : categoryLabels[c]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        {active === 'all' ? (
          cats.map(cat => {
            const items = menuItems.filter(i => i.category === cat)
            return (
              <section key={cat} className="mb-14">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="font-serif text-2xl text-ink">{categoryLabels[cat]}</h2>
                  <div className="flex-1 h-px bg-bone"/>
                  <span className="text-xs text-clay">{items.length} items</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map(item => (
                    <MenuCard key={item.id} item={item}
                      expanding={expanding} setExpanding={setExpanding}
                      milk={milk} setMilk={setMilk}
                      syrup={syrup} setSyrup={setSyrup}
                      temp={temp} setTemp={setTemp}
                      onAdd={handleAdd}
                    />
                  ))}
                </div>
              </section>
            )
          })
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {list.map(item => (
              <MenuCard key={item.id} item={item}
                expanding={expanding} setExpanding={setExpanding}
                milk={milk} setMilk={setMilk}
                syrup={syrup} setSyrup={setSyrup}
                temp={temp} setTemp={setTemp}
                onAdd={handleAdd}
              />
            ))}
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-16">
        <div className="bg-sand rounded-sm border border-bone p-5 flex gap-3">
          <span className="text-xl flex-shrink-0">🌾</span>
          <div>
            <p className="text-xs font-semibold text-ink mb-1">Allergen info</p>
            <p className="text-xs text-mist leading-relaxed">
              Our kitchen handles dairy, nuts, and gluten. Please let us know about any allergies.
              Creamtops are made with dairy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function MenuCard({ item, expanding, setExpanding, milk, setMilk, syrup, setSyrup, temp, setTemp, onAdd }: {
  item: MenuItem
  expanding: string | null
  setExpanding: (id: string | null) => void
  milk: string;  setMilk:  (v: string) => void
  syrup: string; setSyrup: (v: string) => void
  temp: string;  setTemp:  (v: string) => void
  onAdd: (id: string) => void
}) {
  const isOpen = expanding === item.id
  return (
    <div className={`menu-card bg-cream rounded-sm border overflow-hidden flex flex-col transition-all ${isOpen ? 'border-sage' : 'border-bone'}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-bone">
        <Image src={item.image} alt={item.name} fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"/>
        <div className="absolute top-2.5 left-2.5 flex gap-1.5 flex-wrap">
          {item.popular && <span className="pill bg-ink text-cream">✦ fav</span>}
          {item.tags?.includes('fan favorite') && <span className="pill bg-sage text-cream">fan fav</span>}
          {item.tags?.includes('heritage') && <span className="pill bg-bark text-cream">heritage</span>}
          {item.tags?.includes('house special') && <span className="pill bg-rust text-cream">house special</span>}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-lg text-ink leading-tight">{item.name}</h3>
          <span className="text-sm font-semibold text-ink whitespace-nowrap">{fmt(item.price)}</span>
        </div>
        <p className="text-xs text-mist leading-relaxed flex-1">{item.description}</p>
        {item.note && <p className="text-[10px] text-clay italic">{item.note}</p>}

        {isOpen && (
          <div className="mt-1 space-y-3 p-3 bg-sand rounded-sm border border-bone">
            {item.tempOptions && (
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-clay mb-1.5">Temp</p>
                <div className="flex gap-2">
                  {tempChoices.map(t => (
                    <button key={t} onClick={() => setTemp(t)}
                      className={`flex-1 py-1.5 text-xs font-medium rounded-sm border transition-colors ${
                        temp === t ? 'bg-ink text-cream border-ink' : 'border-bone text-mist hover:border-clay'
                      }`}>{t}</button>
                  ))}
                </div>
              </div>
            )}
            {item.milkOptions && (
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-clay mb-1.5">Milk</p>
                <div className="flex gap-2">
                  {milkChoices.map(m => (
                    <button key={m} onClick={() => setMilk(m)}
                      className={`flex-1 py-1.5 text-xs font-medium rounded-sm border transition-colors ${
                        milk === m ? 'bg-sage text-cream border-sage' : 'border-bone text-mist hover:border-clay'
                      }`}>{m}</button>
                  ))}
                </div>
              </div>
            )}
            {item.syrupOptions && (
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-clay mb-1.5">Syrup</p>
                <div className="flex flex-col gap-1.5">
                  {syrupChoices.map(s => (
                    <button key={s} onClick={() => setSyrup(s)}
                      className={`py-1.5 px-2.5 text-xs font-medium rounded-sm border transition-colors text-left ${
                        syrup === s ? 'bg-ink text-cream border-ink' : 'border-bone text-mist hover:border-clay'
                      }`}>{s}</button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex gap-2 mt-auto pt-1">
          <button onClick={() => onAdd(item.id)}
            className="flex-1 flex items-center justify-center gap-1.5 bg-ink hover:bg-ink-soft text-cream text-xs font-semibold py-2.5 rounded-sm transition-colors">
            <Plus size={12}/>
            {isOpen ? 'Add to order' : 'Add'}
          </button>
          {isOpen && (
            <button onClick={() => setExpanding(null)}
              className="px-3 text-xs text-mist hover:text-ink border border-bone rounded-sm transition-colors">
              ✕
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
