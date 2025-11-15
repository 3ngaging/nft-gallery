// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Power Grinders Brand Colors
        primary: {
          dark: '#454731',      // Main dark olive
          medium: '#6B7160',    // Secondary gray-green
          light: '#F2ECC8',     // Cream/beige
        },
        accent: '#F2ECC8',      // CTA green
        // Backgrounds
        dark: {
          bg: '#0a0a0a',
          surface: '#1a1a1a',
          elevated: '#2a2a2a',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Rajdhani', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
