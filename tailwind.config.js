/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      maxWidth: {
        base: '87.5rem',
      },
      screens: {
        '2xl': '90rem',
      },
      fontFamily: {
        manrope: ['Manrope', 'Sans-serif'],
        forma: ['Forma DJR Cyrilic Variable', 'Sans-serif'],
      },
      colors: {
        brand: {
          primary: '#1F5D46',
          'light-primary': '#F1FCF8',
          'light-input': '#F7F9FA',
          whitish: '#F9FCFB',
          dark: '#0B0B0B',
          'light-green': '#9DDC21',
          gray: {
            100: '#999999',
            200: '#5E5E5E',
            300: '#4B4B4B',
          },
        },
      },
      fontSize: {
        30: '1.875rem',
      },
      padding: {
        base: '3.75rem',
      },
      borderRadius: {
        20: '1.25rem',
        30: '1.875rem',
      },
    },
  },
  plugins: [],
};
