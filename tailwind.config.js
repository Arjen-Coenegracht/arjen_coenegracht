/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E1117',
        panel: '#161B22',
        line: '#253143',
        mint: '#47DD88',
        aqua: '#3AD9AA',
        night: '#0E1A2B',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 50px rgba(71, 221, 136, 0.18)',
      },
    },
  },
  plugins: [],
};
