/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Offbeat's actual palette from photos
        sand:    '#F2EDE4',   // warm off-white walls
        bone:    '#E8E0D0',   // slightly darker warm white
        clay:    '#C8B99A',   // warm tan / wood tones
        bark:    '#8B7355',   // darker wood
        ink:     '#1A1A18',   // near-black for text
        'ink-soft': '#3D3D38', // softer body text
        mist:    '#9A9890',   // neutral grey
        sage:    '#7A9E6E',   // muted matcha/sage green
        'sage-dark': '#5A7A50',
        'sage-pale': '#B8CFB0',
        rust:    '#C4704A',   // warm terracotta accent
        cream:   '#FAF7F2',   // lightest background
      },
      fontFamily: {
        // DM Serif Display for editorial headings — vintage but not pretentious
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        // DM Sans for clean readable body
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
        // Instrument Serif for italic accents
        italic: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'widest2': '0.2em',
        'widest3': '0.3em',
      },
      animation: {
        'fade-up':   'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
        'marquee':   'marquee 28s linear infinite',
        'float':     'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
