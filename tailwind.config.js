/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B3A5C',
          light: '#2C5F8A',
          lighter: '#3D7AB5',
        },
        gold: {
          DEFAULT: '#C4A35A',
          light: '#D4B86A',
          dark: '#A8893E',
        },
        warm: {
          light: '#F8F6F0',
          DEFAULT: '#F0EDE5',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Microsoft YaHei', 'PingFang SC', 'Helvetica Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

