module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'thor': 'url("./img/Decoration.png")',
        'purp': 'url("./img/bg-purp.png")',
        'avenge': 'url("./img/Avengers.png")',
        'logo': 'url("./img/Avengers logo.png")',
        'btn-red': 'url("./img/BG-red.png")',
        'btn-gray': 'url("./img/BG-gray.png")'
      },
      backgroundPosition: {
        'thor-pos': '94% 75%',
        'main-pos': '100% 100%'
      },
      maxHeight: {
        'content': 'max-content'
      },
      dropShadow: {
        'card': '0px 5px 20px #9F0013',
        'test': '-1px 6px 3px rgba(50, 50, 0, 0.5)'
      },
      boxShadow: {
        'main': '5px 5px 20px rgba(0, 0, 0, 0.25)',
        'comics-item': '0px 4px 4px 0px #00000040'

},
      spacing: {
        '13p': '13px',
        '15p': '15px',
        '18p': '18px',
        '22p': '22px',
        '25p': '25px',
        '35p': '35px',
        '30p': '30px',
        '38p': '38px',
        '101p': '101px',
        '150p': '150px',
        '180p': '180px',
        '200p': '200px',
        '250p': '250px'
      },
      fontSize: {
        'header': '22px',
        'header-s': '18px',
        'rnd-card': '24px',
        'comix-name': '14px'
      }
    },
    fontFamily: {
      'sans': ['"Roboto Condensed"', 'sans-serif'],
    }
  },
  variants: {
    extend: {
      dropShadow: ['hover', 'focus'],
      backgroundColor: ['active', 'disabled'],
      transform: ['hover'],
      outline: ['active', 'focus', 'hover'],
    },
  },
  plugins: [],
}
