/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
    // "./node_modules/flowbite/**/*.js"
  ],
  darkMode: "class",
  theme: {

    extend: {
      boxShadow: {
        'bar-shadow': '0 30px 40px -30px #8671EC'
      },
      fontFamily: {
        poppins: ['Poppins', "sans-serif"]
      },
      colors: {
        _darkest: "#0C1033",
        _dark: "#1D234D",
        _light: "#2E335A",
        _lighter: "#454B79",
        prime: "#454B79",
        sec: "#2B2F53",
        acc1: "#8015A7",
        acc2: "#22D7FF",
      }
      // gradientColorStops: {
      //   "dark-grad": "#2B2F53 3.16%, #1D1C34 36.05%)"
      // }
    },
  },
  plugins: [require('flowbite/plugin')
  ],

};
