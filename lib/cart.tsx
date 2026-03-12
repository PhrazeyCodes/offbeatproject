'use client'
import React, { createContext, useContext, useState, useCallback } from 'react'
import { MenuItem } from '@/lib/menu-data'

export interface CartItem {
  cartId: string
  item: MenuItem
  qty: number
  milk?: string
  sweetness?: string
  temp?: string
  note?: string
}

interface CartCtx {
  items: CartItem[]
  open: boolean
  add: (item: MenuItem, opts?: Partial<Omit<CartItem,'cartId'|'item'|'qty'>>) => void
  remove: (cartId: string) => void
  setQty: (cartId: string, qty: number) => void
  clear: () => void
  openCart: () => void
  closeCart: () => void
  total: number
  count: number
}

const Ctx = createContext<CartCtx | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [open, setOpen] = useState(false)

  const add = useCallback((item: MenuItem, opts: Partial<Omit<CartItem,'cartId'|'item'|'qty'>> = {}) => {
    const cartId = [item.id, opts.milk, opts.sweetness, opts.temp].filter(Boolean).join('-')
    setItems(prev => {
      const existing = prev.find(i => i.cartId === cartId)
      if (existing) return prev.map(i => i.cartId === cartId ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { cartId, item, qty: 1, ...opts }]
    })
    setOpen(true)
  }, [])

  const remove  = useCallback((cartId: string) => setItems(p => p.filter(i => i.cartId !== cartId)), [])
  const setQty  = useCallback((cartId: string, qty: number) => {
    if (qty <= 0) remove(cartId)
    else setItems(p => p.map(i => i.cartId === cartId ? { ...i, qty } : i))
  }, [remove])
  const clear   = useCallback(() => setItems([]), [])

  const total = items.reduce((s, i) => s + i.item.price * i.qty, 0)
  const count = items.reduce((s, i) => s + i.qty, 0)

  return (
    <Ctx.Provider value={{ items, open, add, remove, setQty, clear, openCart: () => setOpen(true), closeCart: () => setOpen(false), total, count }}>
      {children}
    </Ctx.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useCart outside CartProvider')
  return ctx
}
