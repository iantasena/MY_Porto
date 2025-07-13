/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'sw-dark': '#111827',     // Hitam untuk teks
        'sw-panel': '#ffffff',    // Putih untuk panel/kartu
        'sw-border': '#e5e7eb',  // Abu-abu muda untuk border
        'sw-text': '#374151',     // Abu-abu gelap untuk teks paragraf
        'sw-accent': '#3b82f6',   // Biru sebagai aksen utama
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'starwars': ['"SF Distant Galaxy"', 'sans-serif'],
      },
      dropShadow: {
        'glow': '0 0 8px rgba(59, 130, 246, 0.4)', // Efek glow biru
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'slidein-left': 'slidein-left 1s ease-out forwards',
        'slidein-right': 'slidein-right 1s ease-out forwards',
      },
      keyframes: {
        'fade-in': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'slidein-left': { '0%': { transform: 'translateX(-100px)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
        'slidein-right': { '0%': { transform: 'translateX(100px)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
      },
    },
  },
  plugins: [], // Pastikan kosong
}
