/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "blue-10": "var(--blue-10, #E5F7F9)",
      },
    },
  },
  plugins: [],
};
