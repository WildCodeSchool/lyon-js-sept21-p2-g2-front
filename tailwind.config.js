/* eslint-disable */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'english-red': '#B23A48',
        'melon-pink': '#FCB9B2',
        'dark-sienna': '#461220',
        'apricot-pink': '#FFE4D8',
      },
      spacing: {
        500: '500px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
