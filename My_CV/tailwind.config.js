/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet Warna Space & Neon
        'space-dark': '#0D0D2B',    // Latar belakang utama (biru sangat gelap)
        'space-panel': '#161633',   // Latar belakang panel/kartu
        'space-border': '#3a3a5e',  // Warna border
        'space-text': '#D0D0FF',     // Warna teks utama (putih kebiruan)
        'space-heading': '#FFFFFF', // Warna judul (putih bersih)

        // Aksen Neon Utama
        'neon-cyan': '#00FFFF',

      },
      fontFamily: {
        // Tetap menggunakan font Star Wars Anda
        starwars: ['SFDistantGalaxy', 'sans-serif'],
        sans: ['"Segoe UI"', 'Roboto', 'system-ui'], // Font standar untuk paragraf
      },
      // Menambahkan efek "glow" untuk teks neon
      dropShadow: {
        'glow-cyan': '0 0 8px rgba(0, 255, 255, 0.7)',
        'glow-white': '0 0 10px rgba(255, 255, 255, 0.5)',
      }
    },
  },
  plugins: [],
}
