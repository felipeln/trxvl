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
        'mountain-gif': "url('/src/assets/gif-bg.gif')",
        'header-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);',
        'search-icon': "url('/src/assets/search.svg')",
        'calendar-icon': "url('/src/assets/calendar.svg')",
        'person-icon': "url('/src/assets/person.svg')"
      }

    },
  },
  plugins: [],
}