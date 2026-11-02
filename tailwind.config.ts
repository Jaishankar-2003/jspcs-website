import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Atelier Palette
        ivory: {
          50: '#FAF9F6',
          100: '#F5F3EE', // Primary light background
          200: '#EAE6DC',
          300: '#D8D2C2',
          400: '#C2BCAB',
        },
        graphite: {
          500: '#4D534F',
          600: '#383D3A',
          700: '#2A2E2C',
          800: '#202321', // Primary dark surface & typography
          900: '#171918', // Deep charcoal hardware showcases
          950: '#0F100F',
        },
        burnt: {
          300: '#FF9461',
          400: '#FA7D47',
          500: '#E66A35', // Distinctive brand accent & primary actions
          600: '#CF5522',
          700: '#A94015',
        },
        sage: {
          200: '#D8E2D6',
          300: '#C2CEC0',
          400: '#A7B5A0', // Restrained secondary accent
          500: '#8A9983',
          600: '#6C7A65',
        },
        warmgrey: {
          200: '#C7C5BC',
          300: '#A8A69D',
          400: '#77766F', // Secondary text on light surfaces
          500: '#5C5B55',
          600: '#45443F',
        },
        softwhite: '#FFFFFF',
        charcoal: '#171918',
        // Backward compatibility mappings
        primary: {
          dark: '#171918',
          blue: '#E66A35', // remapped to burnt orange
          cyan: '#A7B5A0', // remapped to sage
          light: '#F5F3EE',
        },
        secondary: {
          dark: '#202321',
          gray: '#2C302D',
          sky: '#E66A35',
        },
        accent: {
          green: '#A7B5A0',
          yellow: '#E66A35',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'atelier': '0 20px 40px -15px rgba(23, 25, 24, 0.08), 0 0 1px 1px rgba(23, 25, 24, 0.05)',
        'atelier-dark': '0 24px 48px -12px rgba(0, 0, 0, 0.45), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
        'burnt-glow': '0 10px 30px -5px rgba(230, 106, 53, 0.35)',
        'sage-glow': '0 10px 25px -5px rgba(167, 181, 160, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
