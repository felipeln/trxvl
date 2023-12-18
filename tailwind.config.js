/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '464': '29.406rem',
        '601': '37.621rem',
        '921': '58.24525rem',
        '582': '36.375rem'
      },
      width: {
        '162': '10.125rem',
        '300': '20rem',
        '418': '26.125rem',
        '512': '32rem',
        '726': '45.388rem',
        '840': '52rem',

      },
      padding: {'120': '7.5rem'},
      
      backgroundImage: {
        'search-icon': "url('/src/assets/top-menu/search.svg')",
        'calendar-icon': "url('/src/assets/top-menu/calendar.svg')",
        'person-icon': "url('/src/assets/top-menu/person.svg')",
        'top-menu-gradient': 'background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);',
        'phone-mockup': "url('/src/assets/travel-app/phone-mockup.png')",
        'travel-expert': "url('/src/assets/trip.png')"
      },
      boxShadow: {
        'offer': '0px 4.428px 17.712px 0px rgba(158, 158, 158, 0.25)'
      }

    },
  },
  plugins: [],
}