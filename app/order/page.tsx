'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Plus, Minus, Trash2, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { menuItems, milkChoices, sweetnessLevels, tempChoices, categoryLabels, type Category } from '@/lib/menu-data'
import { useCart } from '@/lib/cart'
import { fmt } from '@/lib/utils'
import StatusBadge from '@/components/StatusBadge'
import SnailLogo from '@/components/SnailLogo'

const cats: Category[] = ['matcha', 'coffee', 'tea', 'bites']

export default function OrderPage() {
  const [cat, setCat]         = useState<Category>('matcha')
  const [selected, setSelected] = useState<string | null>(null)
  const [milk, setMilk]       = useState('Oat')
  const [sweet, setSweet]     = useState('50%')
  const [temp, setTemp]       = useState('Iced')
  const [note, setNote]       = useState('')
  const [placed, setPlaced]   = useState(false)
  const [name, setName]       = useState('')
  const [phone, setPhone]     = useState('')

  const { items, add, remove, setQty, total, count, clear } = useCart()
  const filteredItems = menuItems.filter(i => i.category === cat)
  const selectedItem  = menuItems.find(i => i.id === selected)

  const handleAdd = () => {
    if (!selectedItem) return
    add(selectedItem, {
      milk: selectedItem.milkOptions ? milk : undefined,
      sweetness: selectedItem.sweetnessOptions ? sweet : undefined,
      temp: selectedItem.tempOptions ? temp : undefined,
      note: note || undefined,
    })
    setSelected(null)
    setNote('')
  }

  const handleOrder = () => {
    if (!name.trim()) return
    setPlaced(true)
    clear()
  }

  if (placed) {
    return (
      <div className="pt-14 min-h-screen bg-cream flex items-center justify-center px-5">
        <div className="text-center max-w-sm">
          <SnailLogo size={56} className="text-sage mx-auto mb-5 animate-float"/>
          <CheckCircle size={20} className="text-sage mx-auto mb-4"/>
          <h2 className="font-serif text-3xl text-ink mb-2">Order received!</h2>
          <p className="text-mist text-sm mb-1">Thanks, {name}. We're on it.</p>
          <p className="text-sm text-ink font-medium mb-6">Ready in about <span className="text-sage">10–15 minutes.</span></p>
          <div className="bg-sand border border-bone rounded-sm p-4 text-sm text-left mb-6">
            <p className="font-semibold text-ink mb-1">Pick up at:</p>
            <p className="text-mist">600 Broadway Ste A, Sacramento, CA 95818</p>
          </div>
          <button onClick={() => { setPlaced(false); setName(''); setPhone('') }}
            className="text-sm font-semibold text-sage underline underline-offset-2">
            Place another order
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-14 min-h-screen">
      {/* Header */}
      <div className="bg-sand border-b border-bone">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold tracking-widest3 uppercase text-sage mb-2">Pick up order</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-ink">Order Online</h1>
            <p className="text-sm text-mist mt-1.5">600 Broadway Ste A · Ready in 10–15 min</p>
          </div>
          <StatusBadge/>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── LEFT: Menu ── */}
          <div className="flex-1 min-w-0">
            {/* Category tabs */}
            <div className="flex gap-2 mb-5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none]">
              {cats.map(c => (
                <button key={c} onClick={() => { setCat(c); setSelected(null) }}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    cat === c ? 'bg-ink text-cream' : 'bg-bone text-mist hover:text-ink'
                  }`}>
                  {categoryLabels[c]}
                </button>
              ))}
            </div>

            {/* Items list */}
            <div className="space-y-2">
              {filteredItems.map(item => {
                const isSelected = selected === item.id
                return (
                  <div key={item.id}
                    className={`bg-cream rounded-sm border transition-all overflow-hidden ${
                      isSelected ? 'border-sage' : 'border-bone hover:border-clay'
                    }`}>
                    {/* Item row */}
                    <button
                      onClick={() => setSelected(isSelected ? null : item.id)}
                      className="w-full flex items-center gap-3.5 p-3.5 text-left">
                      <div className="relative w-16 h-16 rounded-sm overflow-hidden flex-shrink-0 bg-bone">
                        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="64px"/>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-ink text-sm">{item.name}</p>
                          {item.popular  && <span className="pill bg-bone text-bark">fav</span>}
                          {item.seasonal && <span className="pill bg-rust/10 text-rust">seasonal</span>}
                        </div>
                        <p className="text-xs text-mist mt-0.5 line-clamp-1">{item.description}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                        <span className="font-semibold text-sm text-ink">{fmt(item.price)}</span>
                        {isSelected ? <ChevronUp size={14} className="text-sage"/> : <ChevronDown size={14} className="text-clay"/>}
                      </div>
                    </button>

                    {/* Customization panel */}
                    {isSelected && (
                      <div className="border-t border-bone bg-sand px-4 pb-4 pt-3 space-y-3">
                        {item.tempOptions && (
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-clay mb-1.5">Temperature</p>
                            <div className="flex gap-2">
                              {tempChoices.map(t => (
                                <button key={t} onClick={() => setTemp(t)}
                                  className={`flex-1 py-2 text-xs font-medium rounded-sm border transition-colors ${
                                    temp === t ? 'bg-ink text-cream border-ink' : 'border-bone text-mist bg-cream hover:border-clay'
                                  }`}>{t}</button>
                              ))}
                            </div>
                          </div>
                        )}
                        {item.milkOptions && (
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-clay mb-1.5">Milk</p>
                            <div className="flex flex-wrap gap-2">
                              {milkChoices.map(m => (
                                <button key={m} onClick={() => setMilk(m)}
                                  className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                                    milk === m ? 'bg-sage text-cream border-sage' : 'border-bone text-mist bg-cream hover:border-clay'
                                  }`}>{m}</button>
                              ))}
                            </div>
                          </div>
                        )}
                        {item.sweetnessOptions && (
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-clay mb-1.5">Sweetness</p>
                            <div className="flex gap-1.5">
                              {sweetnessLevels.map(s => (
                                <button key={s} onClick={() => setSweet(s)}
                                  className={`flex-1 py-1.5 text-[10px] font-medium rounded-sm border transition-colors ${
                                    sweet === s ? 'bg-ink text-cream border-ink' : 'border-bone text-mist bg-cream hover:border-clay'
                                  }`}>{s}</button>
                              ))}
                            </div>
                          </div>
                        )}
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-widest text-clay mb-1.5">Special requests</p>
                          <textarea value={note} onChange={e => setNote(e.target.value)}
                            placeholder="Any modifications..."
                            className="w-full text-xs p-2.5 border border-bone rounded-sm bg-cream text-ink placeholder:text-clay/60 focus:outline-none focus:border-sage resize-none"
                            rows={2}/>
                        </div>
                        <button onClick={handleAdd}
                          className="w-full bg-sage hover:bg-sage-dark text-cream text-xs font-semibold py-3 rounded-sm transition-colors flex items-center justify-center gap-2">
                          <Plus size={13}/> Add to order — {fmt(item.price)}
                        </button>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── RIGHT: Cart ── */}
          <div className="lg:w-72 xl:w-80">
            <div className="sticky top-20">
              <div className="bg-cream border border-bone rounded-sm overflow-hidden">
                {/* Cart header */}
                <div className="bg-sand px-4 py-3 flex items-center justify-between border-b border-bone">
                  <p className="font-serif text-lg text-ink">Your order</p>
                  {count > 0 && <span className="text-xs bg-sage text-cream font-bold px-2 py-0.5 rounded-full">{count}</span>}
                </div>

                {items.length === 0 ? (
                  <div className="py-10 text-center px-6">
                    <SnailLogo size={32} className="text-clay mx-auto mb-3"/>
                    <p className="text-sm text-mist">Nothing yet.</p>
                    <p className="text-xs text-clay/70 mt-1">Select items to get started.</p>
                  </div>
                ) : (
                  <>
                    <div className="divide-y divide-bone max-h-64 overflow-y-auto">
                      {items.map(ci => (
                        <div key={ci.cartId} className="px-4 py-3">
                          <div className="flex justify-between gap-2">
                            <div className="flex-1">
                              <p className="text-xs font-medium text-ink">{ci.item.name}</p>
                              <div className="text-[10px] text-mist mt-0.5 flex flex-wrap gap-1">
                                {ci.milk && <span>{ci.milk}</span>}
                                {ci.sweetness && <span>· {ci.sweetness} sweet</span>}
                                {ci.temp && <span>· {ci.temp}</span>}
                              </div>
                            </div>
                            <span className="text-xs font-semibold text-ink whitespace-nowrap">
                              {fmt(ci.item.price * ci.qty)}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                              <button onClick={() => setQty(ci.cartId, ci.qty - 1)}
                                className="w-5 h-5 rounded-full border border-bone flex items-center justify-center hover:bg-bone transition-colors">
                                <Minus size={9}/>
                              </button>
                              <span className="text-xs font-semibold">{ci.qty}</span>
                              <button onClick={() => setQty(ci.cartId, ci.qty + 1)}
                                className="w-5 h-5 rounded-full border border-bone flex items-center justify-center hover:bg-bone transition-colors">
                                <Plus size={9}/>
                              </button>
                            </div>
                            <button onClick={() => remove(ci.cartId)} className="text-clay hover:text-rust transition-colors">
                              <Trash2 size={12}/>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Totals + checkout */}
                    <div className="border-t border-bone px-4 py-4 space-y-2.5">
                      <div className="flex justify-between text-xs text-mist">
                        <span>Subtotal</span><span>{fmt(total)}</span>
                      </div>
                      <div className="flex justify-between text-xs text-mist">
                        <span>Tax (8.75%)</span><span>{fmt(total * 0.0875)}</span>
                      </div>
                      <div className="flex justify-between font-semibold text-ink border-t border-bone pt-2.5">
                        <span>Total</span>
                        <span className="font-serif text-lg">{fmt(total * 1.0875)}</span>
                      </div>

                      {/* Name + phone */}
                      <div className="space-y-2 pt-1">
                        <input value={name} onChange={e => setName(e.target.value)}
                          placeholder="Your name *"
                          className="w-full text-xs border border-bone rounded-sm px-3 py-2 bg-sand text-ink placeholder:text-clay/60 focus:outline-none focus:border-sage"/>
                        <input value={phone} onChange={e => setPhone(e.target.value)}
                          placeholder="Phone (optional)"
                          className="w-full text-xs border border-bone rounded-sm px-3 py-2 bg-sand text-ink placeholder:text-clay/60 focus:outline-none focus:border-sage"/>
                      </div>

                      <button onClick={handleOrder} disabled={!name.trim()}
                        className="w-full bg-ink hover:bg-ink-soft disabled:opacity-40 disabled:cursor-not-allowed text-cream text-xs font-semibold py-3.5 rounded-sm transition-colors">
                        Place pickup order
                      </button>
                      <p className="text-[10px] text-center text-mist">600 Broadway Ste A · Sacramento</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
