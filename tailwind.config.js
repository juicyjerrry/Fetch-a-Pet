/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.handlebars, ./views/**/*.handlebars, ./public/js/*.js"],
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