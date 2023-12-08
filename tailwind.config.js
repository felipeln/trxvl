/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '29': '29.406rem',
      },
     
      backgroundImage: {
        'search-icon': "url('/src/assets/header/search.svg')",
        'calendar-icon': "url('/src/assets/header/calendar.svg')",
        'person-icon': "url('/src/assets/header/person.svg')",
        'header-gradient': 'background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);'
      }

    },
  },
  plugins: [],
}