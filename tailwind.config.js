module.exports = {
  content: [
    './src/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ["'Poppins'",'sans-serif' ]
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio'),
],
}
