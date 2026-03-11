/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d9ecff",
          200: "#baddff",
          300: "#8bc7ff",
          400: "#56a8ff",
          500: "#2d88f3",
          600: "#176ad3",
          700: "#1355a9",
          800: "#154988",
          900: "#183e70"
        },
        mist: "#f4f7fb",
        slatewash: "#6d7a91"
      },
      boxShadow: {
        panel: "0 24px 80px rgba(20, 46, 88, 0.12)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(21,73,136,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(21,73,136,0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
