/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,astro,html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
          sans: ['Poppins'],
      },
      colors:{
        'modern-blue':'#00409A',
        'modern-pink':'#882078',
        'modern-green':'#06f960',
      },
      height:{
        '128': '28rem',
        '138': '40rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],

}
