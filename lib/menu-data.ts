export type Category = 'matcha' | 'coffee' | 'favorites' | 'bites'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: Category
  popular?: boolean
  seasonal?: boolean
  image: string
  milkOptions?: boolean
  syrupOptions?: boolean
  tempOptions?: boolean
  tags?: string[]
  note?: string
}

export const menuItems: MenuItem[] = [
  // ── MATCHA + HOJICHA ──
  { id: 'm1', name: 'Matcha Tea', description: 'Matcha + water. Pure, clean, and grassy. The most honest cup we make.', price: 4.00, category: 'matcha', image: 'https://images.unsplash.com/photo-1648711745291-a1aca66ceb5b?w=600&q=80&auto=format&fit=crop' },
  { id: 'm2', name: 'Matcha Latte', description: 'Matcha with whole or oat milk, hot or iced. Simple and grounding.', price: 6.00, category: 'matcha', popular: true, image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80&auto=format&fit=crop', milkOptions: true, syrupOptions: true, tempOptions: true, note: 'Milk options: whole, oat' },
  { id: 'm3', name: 'Hojicha Latte', description: 'Roasted green tea with whole or oat milk. Toasty, low-caffeine, comforting.', price: 6.00, category: 'matcha', popular: true, image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80&auto=format&fit=crop', milkOptions: true, syrupOptions: true, tempOptions: true, note: 'Milk options: whole, oat' },
  { id: 'm4', name: 'Twice Matcha', description: 'Matcha latte + matcha cream top. Iced only. Creamtops made with dairy — sip without a straw to get the full cream-to-latte ratio.', price: 7.50, category: 'matcha', popular: true, tags: ['fan favorite'], image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=600&q=80&auto=format&fit=crop', milkOptions: true, note: 'Iced only · whole or oat milk · dairy creamtop' },
  { id: 'm5', name: 'Twice Hojicha', description: 'Hojicha latte + hojicha cream top. Iced only. Creamtops made with dairy — recommended to sip without a straw.', price: 7.50, category: 'matcha', popular: true, tags: ['fan favorite'], image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&q=80&auto=format&fit=crop', milkOptions: true, note: 'Iced only · whole or oat milk · dairy creamtop' },

  // ── COFFEE ──
  { id: 'c1', name: 'Drip', description: "Single-origin drip on the Fellow Aiden Precision Coffee Maker. Clean and nuanced.", price: 4.00, category: 'coffee', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80&auto=format&fit=crop' },
  { id: 'c2', name: 'Espresso', description: 'Single-origin on a 2-group Modbar. Bright and balanced.', price: 4.00, category: 'coffee', note: 'Single origin · Modbar', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80&auto=format&fit=crop' },
  { id: 'c3', name: 'Americano', description: 'Espresso over hot water. Bold and clean.', price: 4.00, category: 'coffee', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80&auto=format&fit=crop' },
  { id: 'c4', name: 'Cortado', description: 'Equal parts espresso and steamed milk. For those who know what they want.', price: 5.00, category: 'coffee', popular: true, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80&auto=format&fit=crop' },
  { id: 'c5', name: 'Cappuccino / Flat White', description: 'Espresso with velvety steamed milk. Classic, done right.', price: 6.00, category: 'coffee', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80&auto=format&fit=crop', milkOptions: true },
  { id: 'c6', name: 'Latte', description: 'Espresso and steamed milk. Add vanilla bean or agave to taste.', price: 5.50, category: 'coffee', image: 'https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?w=600&q=80&auto=format&fit=crop', milkOptions: true, syrupOptions: true, tempOptions: true },
  { id: 'c7', name: 'Cold Brew', description: 'Slow-steeped cold brew. Bold and smooth over ice.', price: 7.00, category: 'coffee', image: 'https://images.unsplash.com/photo-1517959105821-eaf2591984d2?w=600&q=80&auto=format&fit=crop' },
  { id: 'c8', name: 'Mocha', description: 'Espresso with 81% TCHO dark chocolate and steamed milk. Rich and indulgent.', price: 7.00, category: 'coffee', image: 'https://images.unsplash.com/photo-1572286258217-215cf8e8d176?w=600&q=80&auto=format&fit=crop', milkOptions: true, tempOptions: true, note: '81% TCHO dark chocolate' },

  // ── OUR FAVORITES ──
  { id: 'f1', name: 'Cold Brew + Hojicha Cream Top', description: 'Our cold brew with a silky hojicha creamtop. The contrast is the point — bold coffee beneath, roasty cream on top.', price: 7.00, category: 'favorites', popular: true, tags: ['house special'], image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80&auto=format&fit=crop' },
  { id: 'f2', name: 'Saigon Cinnamon', description: 'Espresso, condensed milk, and Saigon cinnamon. A Vietnamese-inspired classic. Hot or iced.', price: 7.00, category: 'favorites', popular: true, tags: ['heritage', 'house special'], image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80&auto=format&fit=crop', milkOptions: true, tempOptions: true, note: 'choose whole or oat milk · hot/iced' },
  { id: 'f3', name: 'BSL', description: 'House banana bread syrup, banana chip garnish, and cinnamon with your choice of espresso, matcha, or hojicha. Hot or iced.', price: 7.00, category: 'favorites', popular: true, tags: ['house special'], image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80&auto=format&fit=crop', milkOptions: true, tempOptions: true, note: 'choose: espresso, matcha, or hojicha · whole or oat · hot/iced' },
  { id: 'f4', name: 'Mint Matcha', description: 'Matcha with house-made peppermint syrup and your choice of milk. Cool, bright, and refreshing.', price: 7.00, category: 'favorites', tags: ['house special'], image: 'https://images.unsplash.com/photo-1590080874088-eec64895b423?w=600&q=80&auto=format&fit=crop', milkOptions: true, tempOptions: true, note: 'choose whole or oat milk · hot/iced' },

  // ── BITES ──
  { id: 'b1', name: 'Cheese Waffle', description: 'A savory-sweet house waffle. One of the most talked-about things we make.', price: 6.00, category: 'bites', popular: true, tags: ['house-made'], image: 'https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=600&q=80&auto=format&fit=crop' },
  { id: 'b2', name: 'Banana Pudding', description: 'House-made banana pudding. Creamy, layered, deeply comforting. Weekend special — sells out fast.', price: 6.00, category: 'bites', popular: true, tags: ['house-made', 'weekend'], image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?w=600&q=80&auto=format&fit=crop', note: 'Weekend only — sells out early' },
  { id: 'b3', name: 'Matcha Financier', description: 'Buttery almond cake with matcha. Dense, moist, just a little bitter — perfect with a latte.', price: 4.50, category: 'bites', tags: ['house-made'], image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80&auto=format&fit=crop' },
]

export const categoryLabels: Record<Category, string> = {
  matcha:    'Matcha + Hojicha',
  coffee:    'Coffee',
  favorites: 'Our Favorites',
  bites:     'Bites',
}

export const milkChoices  = ['Whole', 'Oat']
export const syrupChoices = ['No syrup', 'Vanilla bean (+$1)', 'Agave (+$0.50)']
export const tempChoices  = ['Hot', 'Iced']
