/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily : {
        marcellus: ['Marcellus', 'Georgia', 'serif'],
        handwritten: ['"Playwrite AU VIC Guides"', 'sans-serif'],
      },

      colors: {
        main: '#9D7B17',
        secondary: '#957528',
        bg: '#333333',
        secondaryBg: '#4a4a4a',
        tertiaryBg: '#1a1a1a',
      },
      backgroundImage: {
        'bg-image': "url('@/assets/4.jpg')",
        'bg-main': "url('@/assets/black-bg.jpg')",
        'bg-vector' : "url('@/assets/vector-bg.png')",
        'bg-golden' : "url('@/assets/golden-gradient.jpg')",
        'bg-test' : "url('@/assets/product_image.png')",
      },
    },
  },
  plugins: [],
}


