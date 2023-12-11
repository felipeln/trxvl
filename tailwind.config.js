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
        '921': '58.24525rem'
      },
     
      backgroundImage: {
        'search-icon': "url('/src/assets/top-menu/search.svg')",
        'calendar-icon': "url('/src/assets/top-menu/calendar.svg')",
        'person-icon': "url('/src/assets/top-menu/person.svg')",
        'top-menu-gradient': 'background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);'
      }

    },
  },
  plugins: [],
}