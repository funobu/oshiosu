module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sp: { max: "559px" },
      tab: { min: "560px", max: "959px" },
      pc: { min: "960px" },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
