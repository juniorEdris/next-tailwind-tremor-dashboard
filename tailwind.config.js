/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    // Path to the tremor module
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        light: "#fff",
        primary: "#2b8768",
        dark: "#1b1d22",
        "primary-hover": "#1f604a",
        secondary: "#1c2e45",
      },
      colors: {
        light: "#fff",
        primary: "#2b8768",
        dark: "#1b1d22",
        "primary-hover": "#1f604a",
        secondary: "#1c2e45",
      },
    },
  },
  plugins: [],
};
