/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
  extend: {
      colors: {
        White: 'hsl(342, 0%, 100%)',
        brightRedLight: 'hsl(352, 100%, 68%)',
        blackGrayish: 'hsl(357, 0%, 28%)'
      }
    },
  },
  plugins: [],
}

