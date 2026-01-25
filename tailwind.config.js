/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Jost'],
        main: ['Plus Jakarta Sans'],
        // text: ['Karla'],
        // text: ['DM Sans'],
        // text: ['Inter'],
        text: ['Montserrat'],
      },
      colors: {
        mainDark: '#212121',
        accentGreen: '#0BEBAF',
        darkerGreen: '#00B27A',
        accentPurple: '#6C4EE4',
      },
      backgroundImage: {
        dotsPattern: "url('/src/assets/Dots_Pattern.svg)",
        /// greenGradient: "url('/src/assets/greenGradient.jpg)",
        darkBackground: "url('/darkBackground.jpg')",
        greenGradient: "url('/greenGradient.jpg')",
        grainyDark: "url('/grainy_dark.jpg)",
      },
    },
  },
  plugins: [],
};
