/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#d94948',
        secondary: '#112435',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(135deg, #112435 0%, #1a3449 100%)',
      },
    },
  },
  plugins: [],
};