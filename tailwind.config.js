/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      aspectRatio: {
        logo: '5 / 2',
        highlight: '3 / 2',
        post: '8 / 5',
        mostviewed: '10 / 7'
      },
      fontSize: {
        '0.5xs': '.575rem',
        '2xs': '.675rem',
        '2.5xs': '.725rem',
        xs: '.75rem',
        sm: '.875rem',
        lg: '1.1rem',
        xl: '1.25rem',
        '2xl': '1,5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem'
      }
    }
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
