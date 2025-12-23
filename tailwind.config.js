/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        sbMove: {
          '0%, 100%': { transform: 'translateY(0px)', filter: 'drop-shadow(0 0 0px #fff)' },
          '50%': { transform: 'translateY(-2px)', filter: 'drop-shadow(0 0 6px #fff)' },
        },
      },
      animation: {
        'sb-animate': 'sbMove 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
