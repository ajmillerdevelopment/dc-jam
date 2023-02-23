module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Righteous', 'Arial', 'sans-serif'],
      'body': ['Oswald', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        'background-black': '#0E0E0E',
        'highlight-red': '#EE3450'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
