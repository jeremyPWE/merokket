module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#063F58",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
