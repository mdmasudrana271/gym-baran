/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#8382EB",
        secondaryColor: "#264373",
        primaryText: "#262524",
      },
      fontFamily: {
        sporting: ["Sporting"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
