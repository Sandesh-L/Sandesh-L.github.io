/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
    background: {
      DEFAULT: '#ffffff',
      dark: '#252525'
    },
    foreground: {
      DEFAULT: '#252525',
      dark: '#fafafa'
    },
    primary: {
      DEFAULT: '#1B4332', // Main green
      foreground: '#ffffff',
    },
    accent: {
      DEFAULT: '#2D5A40',
      foreground: '#ffffff',
    },
    // NEW: Earth tones
    earth: {
      DEFAULT: '#92400E', // Earth brown
      foreground: '#ffffff',
    },
    sky: {
      DEFAULT: '#0C4A6E', // Deep sky blue
      foreground: '#ffffff',
    },
    sage: {
      DEFAULT: '#6B7280', // Sage gray
      foreground: '#ffffff',
    },
    // NEW: Soft accent
    soft: {
      DEFAULT: '#E5E7EB', // Light gray for backgrounds
      foreground: '#374151',
    },
    muted: {
      DEFAULT: '#ececf0',
      foreground: '#717182',
    },
    border: {
      DEFAULT: 'rgba(0, 0, 0, 0.1)',
    }
      },
      borderRadius: {
        lg: '0.625rem',
        md: 'calc(0.625rem - 2px)',
        sm: 'calc(0.625rem - 4px)',
      },
    },
  },
  plugins: [],
}