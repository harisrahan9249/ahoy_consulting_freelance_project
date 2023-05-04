/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./resources/views/homepage.blade.php",
  "./resources/css/app.css",
  "./resources/js/homepage.js",
    "./resources/**/*.{jsx,ts,tsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}