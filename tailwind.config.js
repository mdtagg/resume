/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
    'sm': {
      'raw': `only screen and (max-height: 980px) and (max-width:480px)`
      },
    'wide': {
      'raw': `only screen and (max-height: 480px) and (max-width: 960px)`
    },
    'lg': {
      'min': '1023px'
    },
  },
  plugins: [],
}
}
