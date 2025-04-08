/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        merriweather: ['Merriweather Sans', 'sans-serif'],
        hind: ['Hind Madurai', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#1f7abc',
          light: '#f0f7fc',
          dark: '#1866a3',
          hover: '#1557a0'
        }
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem'
      }
    },
  },
  plugins: []
};
