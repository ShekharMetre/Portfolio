/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      DEFAULT :{
        css:{
          p:{ }
        }
      },
      colors :{
        whites : '#fff',
        grays : '#989898',
        blacks : "#000",
        blacks_light : "#131313",
        yellows : '#ffdb44'

      }
    },
  },
  plugins: [],
}

