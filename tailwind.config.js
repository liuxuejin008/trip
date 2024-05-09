import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#515DE7/* #515DE7 */',
        'primary-light': '#747DEC/* #747DEC */',
        'primary-dark': '#7C83A4/* #7C83A4 */',
        dark: '#1D2A3B/* #1D2A3B */',
        'dark-light': '#4A5562/* #4A5562 */',
        'dark-light-1': '#1C2A3A/* #1C2A3A */',
        'dark-light-2': '#1E2A3C/* #1E2A3C */',
        'dark-light-3': '#1E283C/* #1E283C */',
        'dark-light-4': '#D8D8D8/* #D8D8D8 */',
        'dark-light-5': '#979797/* #979797 */',
        'dark-77': 'rgba(29, 42, 59, 0.77)/* rgba(29, 42, 59, 0.77) */',
        'dark-light-78': 'rgba(74, 85, 98, 0.78) /* rgba(74, 85, 98, 0.78) */',
        warn: '#FECB3E/* #FECB3E */',
        'warn-light': '#FED565/* #FED565 */',
        error: '#FF752B/* #FF752B */',
        'error-light': '#FF9055/* #FF9055 */',
      },
      fontSize: {
        '48': '48px',
        '36': '36px',
        '32': '32px',
        '30': '30px',
        '28': '28px',
        '24': '24px',
        '20': '20px',
        '18': '18px',
        '16': '16px',
        '14': '14px',
        '12': '12px',
      },
      borderRadius: {
        '18': '18px',
        '30': '30px',
        '36': '36px',
      },
      boxShadow: {
        button: '3px 3 4px 0px rgba(0,0,0,0.5)',
        date: '5px 5 4px 0px rgba(0,0,0,0.6)'
      },
      backgroundImage: {
        date: 'linear-gradient( 180deg, rgba(58,61,75,0.82) 0%, #1D2A3B 100%)'
      },
      transitionProperty: {
        'bg': 'background-color',
        'border': 'border-color',
      },
      textShadow: {
        'dark': '3px 3px 4px #000000'
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities({
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
        { values: theme('textShadow') })
    })
  ],
}

