/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DM: ["DMSans_400Regular", "sans-serif"],
        DMMedium: ["DMSans_500Medium", "sans-serif"],
        DMBold: ["DMSans_700Bold", "sans-serif"],
      },
      colors: {
        highlight: "#fca34d",
        text: "#514a6b",
        btn: "#130160",
        signin: "#0d0140",
        google: "#d6cdfe",
      },
    },
  },
  plugins: [],
};
