/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rgcRed: '#d62828',
        rgcYellow: '#ffb703',
        rgcCream: '#fff3dd',
        rgcTeal: '#2ec4b6',
      },
      boxShadow: {
        soft: '0 12px 30px -14px rgba(2, 6, 23, 0.4)',
      },
      backgroundImage: {
        'night-rooftop':
          'radial-gradient(circle at top right, rgba(46,196,182,0.22), transparent 40%), radial-gradient(circle at 20% 20%, rgba(214,40,40,0.22), transparent 35%)',
      },
    },
  },
  plugins: [],
};
