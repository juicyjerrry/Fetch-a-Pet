/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/css/style.css, ./views/*/.{handlebars} "],
  theme: {
    extend: {
      backgroundImage: {
      'hero-pattern': "url('./public/images/geck.jpg')",
      // 'footer-texture': "url('/img/footer-texture.png')",
    }
  },
  },
  plugins: [],
}