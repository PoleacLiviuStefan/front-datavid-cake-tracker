/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        "makeFullWidth":{
          '0%': {
            width: '700px'
          },
          '100%':{
            width: "100%"
          }
        },
        "makeFullWidthMobile":{
          '0%': {
            width: '200px'
          },
          '100%':{
            width: "100%"
          }
        },
        "narrowToZero":{
          '0%': {
            width: '700px'
          },
          '100%':{
            width: "0"
          }
        },
        "narrowToZeroMobile":{
          '0%': {
            width: '200px'
          },
          '100%':{
            width: "0"
          }
        },
        "appear": {
          '0%': {
            opacity:"0"
          },
          "100%":{
            opacity:"100%"
        }
        },
        "disappear": {
          '0%': {
            opacity:"100%"
          },
          "100%":{
            opacity:"0"
        }
        },
        "extract":{
          '0%': {
            opacity:"0",
            marginLeft:"-255px"
          },
          '25%': {
            opacty:"100%"
          },
          "100%":{
            marginLeft:"-100px"
        }
        },
        "extractMobile":{
          '0%': {
            opacity:"0",
            marginLeft:"-155px"
          },
          '25%': {
            opacty:"100%"
          },
          "100%":{
            marginLeft:"-50px"
        }
        }
      }
    },
  },
  plugins: [],
}