const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      'room-x': (value) => ({
        ["& > :first-child:not(:last-child):not([hidden])"]: {
          "padding-right": value,
        },
        ["& > :not([hidden]) ~ :not([hidden]):not(:last-child)"]: {
          "padding-right": value,
          "padding-left": value,
        },
        ["& > :last-child:not(:first-child):not([hidden])"]: {
          "padding-left": value,
        },
      })
    },
    { values: theme('space') }
  ),

  matchUtilities(
    {
      'room-y': (value) => ({
        ["& > :first-child:not(:last-child):not([hidden])"]: {
          "padding-bottom": value,
        },
        ["& > :not([hidden]) ~ :not([hidden]):not(:last-child)"]: {
          "padding-bottom": value,
          "padding-top": value,
        },
        ["& > :last-child:not(:first-child):not([hidden])"]: {
          "padding-top": value,
        },
      })
    },
    { values: theme('space') }
  )
})