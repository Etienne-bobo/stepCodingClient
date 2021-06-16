module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gray: {
        50: '#FBFBFB',
        100: '#FBFBFB',
        200: '#EAEAEA',
        300: '#DFDFDF',
        400: '#999999',
        500: '#7F7F7F',
        600: '#666666',
        700: '#4C4C4C',
        800: '#333333',
        900: '#191919',
      },
      yellow: {
        50: '#FFFBE5',
        100: '#FFF7CC',
        200: '#FFEE99',
        300: '#FFE666',
        400: '#FFDD33',
        500: '#FFD500',
        600: '#CCAA00',
        700: '#998000',
        800: '#665500',
        900: '#332B00',
      },
      indigo: {
        50: '#E2CBFF',
        100: '#D3B1FF',
        200: '#B77EFF',
        300: '#9A4BFF',
        400: '#7D18FF',
        500: '#6400E4',
        600: '#4E00B1',
        700: '#37007E',
        800: '#21004B',
        900: '#0B0018',
      },
      red: {
        20: '#FFA500',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
