/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002547',
        accent: '#c6ab6c',
        success: '#10B981',
        foreground: '#1F2937',
        'muted-foreground': '#6B7280',
        border: '#E5E7EB',
        background: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        brand: ['Spectral', 'serif'],
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
}
