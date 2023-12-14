/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Note the addition of the `app` directory.
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7856ff"
      }
    },
  },
  plugins: [],
}


