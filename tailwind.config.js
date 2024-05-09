/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#515DE7',
        'primary-light': '#747DEC',
        dark: '#1D2A3B',
        'dark-light': '#4A5562',
        'dark-light-1': '#1C2A3A',
        'dark-light-2': '#1E2A3C',
        'dark-light-3': '#1E283C',
        'dark-light-4': '#D8D8D8',
        'dark-light-5': '#979797',
        'dark-77': 'rgba(29, 42, 59, 0.77)',
        warn: '#FECB3E',
        'warn-light': '#FED565',
        error: '#FF752B',
        'error-light': '#FF9055',
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
      }
    },
  },
  plugins: [],
}

