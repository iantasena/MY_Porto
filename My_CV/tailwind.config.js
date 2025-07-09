/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sw-dark': '#080808', // Latar utama yang sangat gelap
        'sw-panel': '#1a1a1a', // Latar untuk panel/kartu
        'sw-border': '#333333', // Warna border
        'sw-text': '#c0c0c0',   // Teks umum
        'sw-yellow': '#ffe81f', // Aksen utama (seperti judul)
        'sw-blue': '#49daff',   // Aksen kedua (seperti link/lightsaber biru)
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'], // Font biasa untuk paragraf
        'starwars': ['"SF Distant Galaxy"', 'sans-serif'], // Font judul
      },
      textShadow: {
        'glow-yellow': '0 0 8px #ffe81f',
        'glow-blue': '0 0 8px #49daff',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow') // Kamu perlu install ini: npm install -D tailwindcss-textshadow
  ],
}
