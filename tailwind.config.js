/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#376DAD',
        secondaryBlue: '#7FD0F5',
        primary: '#1c2545',
        tertiary: '#C6C4C3',
        secondary: '#046c9c'
      }
    }
  },
  plugins: []
}
