/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rc-blue": "rgb(97, 218, 251)",
        "js-yellow": "#FCDC00",
        "tw-blue": "rgb(56, 189, 248)",
        "sc-brow": "rgb(150, 95, 57)",
        "nd-green": "rgb(62, 134, 61)",
      },
    },
  },
  plugins: [],
};
