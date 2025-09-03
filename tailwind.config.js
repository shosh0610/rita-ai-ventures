/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your exact color palette
        brand: {
          cream: '#FCF0F0',      // Light cream/pink background
          lavender: '#D1C8F4',   // Soft lavender
          purple: '#AE9DEF',     // Main purple
          wine: '#9B2929',       // Deep wine red
          plum: '#531A4A',       // Dark plum
        },
        // Extended shades for more variety
        primary: {
          50: '#FCF0F0',
          100: '#F5E0E0', 
          200: '#D1C8F4',
          300: '#AE9DEF',
          400: '#9B86D4',
          500: '#8B7AA8',
          600: '#6B5B8B',
          700: '#531A4A',
          800: '#4A1742',
          900: '#2D0E28',
        }
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px 0 rgba(174, 157, 239, 0.15)',
        'strong': '0 10px 40px 0 rgba(83, 26, 74, 0.2)',
      }
    },
  },
  plugins: [],
}