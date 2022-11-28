/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        primary: '#334155',
        primaryHover: '#475569',
        secondary: '#94a3b8',
        secondaryHover: '#cbd5e1',
      },
      fontFamily: {
        Philosopher: ['Philosopher', 'sans-serif'],
        Quicksand: ['Quicksand', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
