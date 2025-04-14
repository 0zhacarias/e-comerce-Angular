/** @type {import('tailwindcss').Config} */
import PrimeUI from 'tailwindcss-primeui';

module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {
        maxWidth: {
         '8xl': '96rem',
    'custom-max': '1500px',
        },
      },
    },
    darkMode: ['selector', '[class~="my-app-dark"]'],
    plugins: [PrimeUI],
    
  }