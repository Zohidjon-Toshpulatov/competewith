module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": '#725095',
        "secondary": "#fdc010",
        "cus-black": '#30273A'
      },
      backgroundImage: {
        'cards': "url('./assets/bg-primary.png')",
        'm-cards': "url('./assets/m-cards.png')",
        'm-num-cards': "url('./assets/m-bg-card.png')",
      },
      screens: {
        '1.4k': '1400px'
      }
    },
  },
  plugins: [],
}
