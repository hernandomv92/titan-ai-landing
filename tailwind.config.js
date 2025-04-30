/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0f172a',
        },
      },
      animation: {
        'float': 'float 15s linear infinite',
        'gradient': 'gradient-animation 3s ease infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 15px 5px rgba(59, 130, 246, 0.3)',
      },
    },
  },
  plugins: [],
};