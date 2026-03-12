'use client'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { fmt } from '@/lib/utils'
import Link from 'next/link'

export default function CartSidebar() {
  const { items, open, closeCart, remove, setQty, total, count } = useCart()
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="cart-backdrop absolute inset-0 bg-ink/30 backdrop-blur-sm" onClick={closeCart}/>
      <div className="cart-panel absolute right-0 top-0 bottom-0 w-full max-w-sm bg-cream flex flex-col shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-bone">
          <div className="flex items-center gap-2.5">
            <ShoppingBag size={17} strokeWidth={1.8} className="text-sage"/>
            <span className="font-serif text-lg text-ink">Your order</span>
            {count > 0 && <span className="text-xs bg-sage text-cream font-bold px-2 py-0.5 rounded-full">{count}</span>}
          </div>
          <button onClick={closeCart} className="p-1.5 text-mist hover:text-ink transition-colors rounded-full hover:bg-bone">
            <X size={17}/>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 px-8 text-center">
              <ShoppingBag size={36} strokeWidth={1.2} className="text-clay"/>
              <p className="font-serif text-lg text-ink">Nothing yet</p>
              <p className="text-sm text-mist">Add something from the menu.</p>
              <Link href="/menu" onClick={closeCart} className="mt-1 text-sm font-semibold text-sage underline underline-offset-2">
                Browse Menu →
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-bone">
              {items.map(ci => (
                <div key={ci.cartId} className="px-5 py-4">
                  <div className="flex justify-between gap-3">
                    <div className="flex-1">
                      <p className="font-medium text-ink text-sm">{ci.item.name}</p>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {ci.milk      && <span className="text-[10px] bg-bone text-bark px-2 py-0.5 rounded-full">{ci.milk}</span>}
                        {ci.sweetness && <span className="text-[10px] bg-bone text-bark px-2 py-0.5 rounded-full">{ci.sweetness} sweet</span>}
                        {ci.temp      && <span className="text-[10px] bg-bone text-bark px-2 py-0.5 rounded-full">{ci.temp}</span>}
                      </div>
                      {ci.note && <p className="text-[11px] text-mist mt-1 italic">{ci.note}</p>}
                    </div>
                    <p className="text-sm font-semibold text-ink whitespace-nowrap">{fmt(ci.item.price * ci.qty)}</p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2.5">
                      <button onClick={() => setQty(ci.cartId, ci.qty - 1)}
                        className="w-6 h-6 rounded-full border border-bone flex items-center justify-center hover:bg-bone transition-colors text-ink">
                        <Minus size={10}/>
                      </button>
                      <span className="text-sm font-semibold text-ink w-3 text-center">{ci.qty}</span>
                      <button onClick={() => setQty(ci.cartId, ci.qty + 1)}
                        className="w-6 h-6 rounded-full border border-bone flex items-center justify-center hover:bg-bone transition-colors text-ink">
                        <Plus size={10}/>
                      </button>
                    </div>
                    <button onClick={() => remove(ci.cartId)} className="text-clay hover:text-rust transition-colors p-1">
                      <Trash2 size={13}/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-bone px-5 py-5 space-y-3">
            <div className="flex justify-between text-sm text-mist"><span>Subtotal</span><span>{fmt(total)}</span></div>
            <div className="flex justify-between text-sm text-mist"><span>Tax (8.75%)</span><span>{fmt(total * 0.0875)}</span></div>
            <div className="flex justify-between font-semibold text-ink border-t border-bone pt-3">
              <span>Total</span>
              <span className="font-serif text-lg">{fmt(total * 1.0875)}</span>
            </div>
            <Link href="/order" onClick={closeCart}
              className="block w-full text-center bg-ink hover:bg-ink-soft text-cream text-sm font-semibold py-3.5 rounded-sm transition-colors tracking-wide">
              Go to Checkout
            </Link>
            <p className="text-center text-[10px] text-mist">Pickup · 600 Broadway Ste A, Sacramento</p>
          </div>
        )}
      </div>
    </div>
  )
}
