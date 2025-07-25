// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        changa: ['Changa', 'sans-serif'],
        oleo: ['"Oleo Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
