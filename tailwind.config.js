/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ghazali: '#10b981', 
        luxury: '#020617',
      }
    },
  },
  plugins: [],
}