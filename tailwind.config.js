/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily:{
        'sans':['Yekan']
      },
      colors:{
        'Orange-700': '#DE3618',
        'Orange-600': '#FC5858',
        'Orange-500': '#F25E57',
        'Orange-400': '#FF755C',
        'Orange-300': '#FF9F8E',
        'Orange-100': '#FFCBCB',
        'Slate-900' : '#161D25',
        'Slate-800' : '#222F5D',
        'Slate-700' : '#606060',
        'Slate-200' : '#E2E2E2',
        'Stone-100' : '#F4F4F4',
        'Stone-50' : '#FDFDFD',
        'Gray-300' : '#AFAFAF',
        'Gray-200' : '#EBEBEB',
        'Indigo-600': '#8750FB',
        'Yellow-400': '#FFDE74'
      }
    },
    
    dropShadow:{
      '4xl':'0px 4px 4px rgba(0, 0, 0, 0.25)',
      '5xl':'0px 3.09px 6.18px rgba(0, 0, 0, 0.08)'
    },
    backgroundImage:{
      'logo': "url('/assets/img/Logo.svg')",
    }
  },
  plugins: []
}

