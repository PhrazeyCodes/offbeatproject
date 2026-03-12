'use client'
import { CartProvider } from '@/lib/cart'
import CartSidebar from './CartSidebar'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartSidebar/>
    </CartProvider>
  )
}
