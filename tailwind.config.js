/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        overflow: 'hidden',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bg: {
          default: '#f8f9ff',
          card: '#f1f3fa',
        },
        darkbg: {
          DEFAULT: '#20222f',
          card: '#252b43',
          dark: '#1d2029',
        },
        facebook: '#1791f0',
        twitter: '#1da1f5',
        maingreen: '#3fac8e',
      },
    },
  },
  plugins: [],
}
