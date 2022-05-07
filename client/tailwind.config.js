const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Raleway', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        waves: "url('./src/assets/waves.svg')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
