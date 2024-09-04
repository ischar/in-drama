/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '0.5': '0.5px',
      },
      colors: {
        'light-element-gray1': '#737373',
        'light-fg-black': '#0C0C0C',
        'dark-black': '#1b1b1b',
        'dark-element-yellow': '#ffba02',
        'dark-element-gray1': '#3d3d3d'
      }
    },
  },
  plugins: [],
}

