module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'hero-image': "url('/Hero-Section.svg')",
      }
    },
  },
  variants: {
    extend: {
      colors: {
        "primary-grey": "#E9E9E9",
        "primary-black": "#101010",
        "price-yellow": "#DD954B",
      },
    },
  },
  plugins: [],
}
