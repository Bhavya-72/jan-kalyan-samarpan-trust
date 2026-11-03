/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4F1E8',
        cream: '#EAE5D8',
        ink: '#263B4A',
        muted: '#66747A',
        navy: '#173B62',
        blue: '#245B88',
        gold: '#B78A36',
        goldLight: '#E8D6A9',
        leaf: '#5E8061',
        line: '#DAD5C8',
        card: '#F9F7F0'
      },
      fontFamily: {
        sans: ['DM Sans', 'Noto Sans Devanagari', 'sans-serif'],
        display: ['Playfair Display', 'Noto Sans Devanagari', 'serif'],
        hindi: ['Noto Sans Devanagari', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 60px rgba(38, 59, 74, 0.09)'
      }
    }
  },
  plugins: []
}
