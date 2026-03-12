# Offbeat Coffee + Tea — Website

Vietnamese-owned specialty coffee & matcha café, Midtown Sacramento.

## Stack
- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** (custom design tokens)
- **DM Serif Display + DM Sans** (Google Fonts)
- **Lucide React** icons
- **Vercel** deployment

## Pages
| Route | Description |
|-------|-------------|
| `/` | Home — hero, story, popular items, photo grid |
| `/menu` | Filterable menu with inline customization |
| `/order` | Order online with full cart + pickup form |
| `/location` | Map, real hours, Instagram community grid |

## Real Business Info
- **Address**: 600 Broadway Ste A, Sacramento, CA 95818
- **Hours**: Wed–Sun 7AM–4PM · Mon–Tue CLOSED
- **Instagram**: @offbeatcoffeee

## Deploy to Vercel (30 seconds)

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "init"
gh repo create offbeat-coffee --public --push

# 2. Import at vercel.com → New Project → select repo → Deploy
```

Or via CLI:
```bash
npm i -g vercel
npm install
vercel
```

## Local dev
```bash
npm install
npm run dev
# → http://localhost:3000
```

## Customization
- **Menu items**: `lib/menu-data.ts`
- **Hours logic**: `lib/utils.ts → getCafeStatus()`  
- **Colors/fonts**: `tailwind.config.js`
- **Images**: Replace Unsplash URLs with real Offbeat photos
