module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#252525',
        'secundary': '#F5F5F5',
        'general': '#F5A700',
        'danger': '#F58E00'
      },
      textColor: {
        'danger': '#F58E00',
        'general': '#F5A700',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
