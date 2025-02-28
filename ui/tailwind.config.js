/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffffff',
          dark: '#111827',
        },
        accent: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa'
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.9)',
          dark: 'rgba(255, 255, 255, 0.05)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

