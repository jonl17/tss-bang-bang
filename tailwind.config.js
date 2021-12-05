module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      fontFamily: {
        body: ['Oswald', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
