export type Category = 'matcha' | 'coffee' | 'tea' | 'bites'

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
  sweetnessOptions?: boolean
  tempOptions?: boolean
  tags?: string[]
}

export const menuItems: MenuItem[] = [
  // ── MATCHA ──
  {
    id: 'm1',
    name: 'Matcha Latte',
    description: 'Ceremonial grade matcha whisked with steamed milk. Clean, grassy, and grounding.',
    price: 6.75,
    category: 'matcha',
    popular: true,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80',
    milkOptions: true, sweetnessOptions: true, tempOptions: true,
  },
  {
    id: 'm2',
    name: 'Cloud Matcha',
    description: 'Our signature — ceremonial matcha topped with billowy house cold foam. Sweet above, earthy below.',
    price: 7.50,
    category: 'matcha',
    popular: true,
    tags: ['house special'],
    image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=600&q=80',
    milkOptions: true, sweetnessOptions: true,
  },
  {
    id: 'm3',
    name: 'Brown Sugar Matcha',
    description: 'House-made brown sugar syrup, ceremonial matcha, oat milk over ice. Balanced and deeply satisfying.',
    price: 7.25,
    category: 'matcha',
    popular: true,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
    milkOptions: true, sweetnessOptions: true, tempOptions: true,
  },
  {
    id: 'm4',
    name: 'Hojicha Latte',
    description: 'Roasted green tea — toasty, low-caffeine, and comforting. A quieter cup.',
    price: 6.75,
    category: 'matcha',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80',
    milkOptions: true, sweetnessOptions: true, tempOptions: true,
  },
  {
    id: 'm5',
    name: 'Iced Matcha Tonic',
    description: 'Ceremonial matcha over sparkling tonic with fresh yuzu. Unexpected. Refreshing. You\'ll order it twice.',
    price: 7.00,
    category: 'matcha',
    tags: ['new'],
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
    sweetnessOptions: true,
  },

  // ── COFFEE ──
  {
    id: 'c1',
    name: 'Phin Coffee',
    description: 'Traditional Vietnamese slow-drip over condensed milk and ice. Our roots in a glass — bold, sweet, aromatic.',
    price: 6.00,
    category: 'coffee',
    popular: true,
    tags: ['heritage'],
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    sweetnessOptions: true,
  },
  {
    id: 'c2',
    name: 'Cortado',
    description: 'Equal parts espresso and steamed milk. For those who know what they want.',
    price: 5.50,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80',
  },
  {
    id: 'c3',
    name: 'Oat Flat White',
    description: 'Double ristretto with velvety oat microfoam. Smooth, focused, no excess.',
    price: 6.50,
    category: 'coffee',
    popular: true,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
  },
  {
    id: 'c4',
    name: 'Cold Brew',
    description: '18-hour slow-steep served over large-format ice. Bold without the bite.',
    price: 6.00,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1517959105821-eaf2591984d2?w=600&q=80',
    milkOptions: true, sweetnessOptions: true,
  },
  {
    id: 'c5',
    name: 'Espresso',
    description: 'A clean double shot. House single-origin beans, pulled with care.',
    price: 4.00,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80',
  },

  // ── TEA / SEASONAL ──
  {
    id: 't1',
    name: 'Ube Latte',
    description: 'House-made ube paste with steamed oat milk. Purple, proud, and deeply creamy.',
    price: 7.50,
    category: 'tea',
    popular: true,
    seasonal: true,
    tags: ['seasonal'],
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80',
    milkOptions: true, sweetnessOptions: true, tempOptions: true,
  },
  {
    id: 't2',
    name: 'Pandan Coconut Matcha',
    description: 'Ceremonial matcha with pandan syrup and coconut milk. Southeast Asian warmth in every sip.',
    price: 8.00,
    category: 'tea',
    seasonal: true,
    tags: ['seasonal'],
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80',
    milkOptions: true, sweetnessOptions: true,
  },
  {
    id: 't3',
    name: 'Jasmine Green Tea',
    description: 'Fragrant loose-leaf jasmine, lightly steeped. Quiet and floral.',
    price: 5.00,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=600&q=80',
    sweetnessOptions: true, tempOptions: true,
  },

  // ── BITES ──
  {
    id: 'b1',
    name: 'Matcha Financier',
    description: 'Buttery almond cake with ceremonial matcha. Dense, moist, just a little bitter.',
    price: 4.50,
    category: 'bites',
    popular: true,
    tags: ['house-made'],
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80',
  },
  {
    id: 'b2',
    name: 'Seasonal Toast',
    description: 'Ask us what\'s on it today. Always house bread, always worth it.',
    price: 6.00,
    category: 'bites',
    seasonal: true,
    tags: ['ask us', 'house-made'],
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&q=80',
  },
  {
    id: 'b3',
    name: 'Black Sesame Cookie',
    description: 'Nutty, slightly sweet, and completely addictive. Goes with everything.',
    price: 3.50,
    category: 'bites',
    tags: ['house-made'],
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80',
  },
]

export const categoryLabels: Record<Category, string> = {
  matcha: 'Matcha',
  coffee: 'Coffee',
  tea:    'Seasonal & Tea',
  bites:  'Bites',
}

export const milkChoices     = ['Oat', 'Almond', 'Whole', 'Coconut', 'Skim']
export const sweetnessLevels = ['None', '25%', '50%', '75%', '100%']
export const tempChoices     = ['Hot', 'Iced']
