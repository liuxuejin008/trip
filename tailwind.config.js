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
        'primary-light-1': '#F6F5FF/* #F6F5FF */',
        'primary-light-2': '#624AFF/* #624AFF */',
        'primary-dark': '#7C83A4/* #7C83A4 */',
        dark: '#1D2A3B/* #1D2A3B */',
        dark2: '#2D3240/* #2D3240 */',
        dark3: '#2E2E3D/* #2E2E3D */',
        'dark-light': '#4A5562/* #4A5562 */',
        'dark-light-1': '#1C2A3A/* #1C2A3A */',
        'dark-light-2': '#1E2A3C/* #1E2A3C */',
        'dark-light-3': '#1E283C/* #1E283C */',
        'dark-light-4': '#D8D8D8/* #D8D8D8 */',
        'dark-light-5': '#979797/* #979797 */',
        'dark-light-6': '#959FB6/* #959FB6 */',
        'dark-light-7': '#C0C1C6/* #C0C1C6 */',
        'dark-77': 'rgba(29, 42, 59, 0.77)/* rgba(29, 42, 59, 0.77) */',
        'dark-light-78': 'rgba(74, 85, 98, 0.78) /* rgba(74, 85, 98, 0.78) */',
        warn: '#FECB3E/* #FECB3E */',
        'warn-light': '#FED565/* #FED565 */',
        error: '#FF752B/* #FF752B */',
        'error-light': '#FF9055/* #FF9055 */',
        'error-close': '#f87171/* #f87171 */',
        'error-delete': '#BD2626/* #BD2626 */',
        'gray-999': '#999999/* #999999 */',
        'gray-666': '#666666/* #666666 */',
        'gray-border': '#DFE3E8/* #DFE3E8 */',
      },
      fontSize: {
        '88': '88px',
        '72': '72px',
        '64': '64px',
        '56': '56px',
        '48': '48px',
        '38': '38px',
        '36': '36px',
        '34': '34px',
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
        '20': '20px',
        '30': '30px',
        '32': '32px',
        '36': '36px',
        '56': '56px',
        '64': '64px',
      },
      boxShadow: {
        button: '3px 3 4px 0px rgba(0,0,0,0.5)',
        date: '5px 5 4px 0px rgba(0,0,0,0.6)',
        pic: '2px 2 4px 0px rgba(0,0,0,0.5)',
        button2: '3px 3 2px 0px rgba(0,0,0,0.6)',  
      },
      backgroundImage: {
        date: 'linear-gradient( 180deg, rgba(58,61,75,0.82) 0%, #1D2A3B 100%)',
        line: 'linear-gradient( 180deg, rgba(146,162,255,0) 0%, #6459FF 100%)',
        'trip-title': 'linear-gradient( 180deg, #6459FF 0%, #92A2FF 100%)', 
        'trip-text': 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.55) 39%, rgba(255,255,255,0) 100%)',
        'trip-line': 'linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFFFFF 100%)',
        'trip-card': 'linear-gradient( 180deg, #E0E3FF 0%, #FFFFFF 100%)'
      },
      transitionProperty: {
        'bg': 'background-color',
        'border': 'border-color',
      },
      textShadow: {
        'dark': '3px 3px 4px #000000'
      },
      lineHeight: {
        '22': '22px',
        '96': '96px'
      },
      fontFamily: {
        'd-din': ['D-DIN', 'sans-serif']
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

