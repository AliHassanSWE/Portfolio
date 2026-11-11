/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#0F0F11',
        surface: '#161618',
        border: '#27272A',
        primary: '#E25A36', // Natural rust/orange theme
        primaryLight: 'rgba(226, 90, 54, 0.15)',
      }
    },
  },
  plugins: [],
}