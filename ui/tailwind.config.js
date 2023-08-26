/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {

      colors: {
        primary: '#F23802',
        test: '#FFF',
        ss:'text-black font-josefin-sans font-bold text-7xl'
      },

      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
      fontSize: {
        '7xl': '5rem',
      },
      fontWeight: {
        bold: '700',
      },
      customStyles: {
        common: 'text-black font-josefin-sans',
        mainTitle: 'font-bold text-7xl',
        smallText: 'font-style:italic text-base font-medium',
      },
    },
    listStyleImage: {
      checkmark: 'url("./src/assets/descriptionImg/listDecor.png")',
    },
  },
};
