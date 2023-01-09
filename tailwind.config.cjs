/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        aquaBlue: 'rgb(218, 242, 248)',
        solidBlue: 'rgb(2, 146, 179)',
        textGrey: 'rgb(113, 128, 150)',
        lightGrey: 'rgb(74, 85, 104)',
        iconGrey: 'rgb(111, 111, 111)',
        textDark: 'rgb(38, 50, 56)'
      },
      fontFamily: {
        inter: 'Inter',
      },
      keyframes: {
        grow: {
          '0%': { 'max-height': '0', background: 'yellow' },
          '100%': { 'max-height': '100px', background: 'red' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': {opacity: 1},
          '100%': { opacity: 0}
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        'grow-anim': 'grow 5s ease-in-out infinite',
        fadeIn: 'fadeIn 0.3s cubic-bezier(0, 0, 0.2, 1)',
        fadeOut: 'fadeOut 0.2s cubic-bezier(0, 0, 0.2, 1) forwards',
        slideIn: 'slideIn .3s cubic-bezier(0, 0, 0.2, 1)',
        slideOut: 'slideIn 0.5s cubic-bezier(0, 0, 0.2, 1) reverse',
      },
      transitionTimingFunction: {
        'acclerate': 'cubic-bezier(0, 0, 0.2, 1)'
      }
    },
  },
  plugins: [],
}
