/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {  fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },},
    listStyleImage: {
      checkmark: 'url("./src/assets/descriptionImg/listDecor.png")',
    },

  },
  plugins: [],
}

