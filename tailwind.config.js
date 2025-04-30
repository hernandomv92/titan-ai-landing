/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta Titan AI
        background: '#0d0d0d',
        brand: '#00ffff',
        brandSoft: '#14b8ff',
        accent: '#8b5cf6',
        textPrimary: '#e5e5e5',
        textSecondary: '#9ca3af',
        success: '#10b981',
        error: '#ef4444',
        // Conservás el slate 950 custom que ya tenías
        slate: {
          950: '#0f172a',
        },
      },
      animation: {
        float: 'float 15s linear infinite',
        gradient: 'gradient-animation 3s ease infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        glow: '0 0 15px 5px rgba(59, 130, 246, 0.3)',
      },
    },
  },
  plugins: [],
};
