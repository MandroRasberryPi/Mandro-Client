module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",      
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          light: '#3B82F6',
          softer: '#60A5FA',
        },
        gray: {
          border: '#D1D5DB',
          track: '#E5E7EB',
          placeholder: '#9CA3AF',
        },
      },
      spacing: {
        '96': '24rem',
      },
      width: {
        '44p': '44%',
        '48p': '48%',
      },
      height: {
        '16': '4rem',
        '10': '2.5rem',
      },
    },
  },
  plugins: [],
}
