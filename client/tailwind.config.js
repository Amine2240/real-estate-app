/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myblack: "#000000ee",
        navblack: "#000000e3",
      },
    },
  },
  plugins: [],
};
