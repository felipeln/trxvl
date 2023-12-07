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
        'search-icon': "url('/src/assets/search.svg')",
        'calendar-icon': "url('/src/assets/calendar.svg')",
        'person-icon': "url('/src/assets/person.svg')"
      }

    },
  },
  plugins: [],
}