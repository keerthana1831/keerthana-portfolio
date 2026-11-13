/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Palette
        sage: {
          50: '#F4F8F1',
          100: '#E7EFE1',
          200: '#D3E2C7',
          300: '#B8D0A5',
          400: '#9FBE86',
          500: '#87A96B', // Sage Green (Primary Background)
          600: '#759759',
          700: '#5F7D45',
          800: '#4A6235',
          900: '#344724',
          950: '#202C15',
        },
        walnut: {
          50: '#F8F5F2',
          100: '#EFE8E3',
          200: '#DDD0C5',
          300: '#C3B1A2',
          400: '#A48F7E',
          500: '#7E6451',
          600: '#5A3E2B', // Walnut Brown (Wordings / Text)
          700: '#4A3222',
          800: '#3A2619',
          900: '#2B1B10',
          950: '#1D110A',
        },
        amberGlow: {
          50: '#FEF8EE',
          100: '#FDF0DC',
          200: '#FADDB7',
          300: '#F6C48B',
          400: '#EEA758',
          500: '#D5851F', // Amber Glow (Highlighting)
          600: '#BC6F13',
          700: '#965410',
          800: '#774110',
          900: '#603310',
          950: '#381C06',
        },

        // Backward compatibility mappings
        mocha: {
          600: '#87A96B',
          700: '#759759',
          800: '#5F7D45',
          900: '#344724',
          950: '#202C15',
        },
        lavender: {
          50: '#2B1B10',
          100: '#3A2619',
          200: '#5A3E2B', // Walnut Brown
          300: '#7E6451',
          400: '#A48F7E',
        },
        silver: {
          200: '#FADDB7',
          300: '#D5851F', // Amber Glow
          400: '#BC6F13',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(43, 27, 16, 0.08), 0 2px 6px -1px rgba(43, 27, 16, 0.04)',
        'card': '0 10px 30px -4px rgba(43, 27, 16, 0.12), 0 4px 10px -2px rgba(43, 27, 16, 0.06)',
        'card-hover': '0 20px 40px -6px rgba(43, 27, 16, 0.18), 0 8px 16px -3px rgba(43, 27, 16, 0.08)',
        'featured': '0 20px 45px -8px rgba(43, 27, 16, 0.22), 0 0 25px 0px rgba(213, 133, 31, 0.35)',
        'amber-glow': '0 0 25px rgba(213, 133, 31, 0.45)',
      },
    },
  },
  plugins: [],
}
