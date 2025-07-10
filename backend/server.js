const express = require('express');
const cors = require('cors'); // Impor paket cors

const app = express();
const port = 3000; // Backend akan berjalan di port 3000

// --- PENTING: Aktifkan CORS ---
// Ini memberitahu server untuk mengizinkan permintaan dari alamat lain (frontend-mu)
app.use(cors());

// Contoh data yang akan dikirim
const users = [
  { id: 1, name: 'Puantorian Handoko', job: 'Galactic Developer' },
  { id: 2, name: 'Budi Santoso', job: 'Web Warrior' },
  { id: 3, name: 'Siti Aminah', job: 'UI/UX Architect' },
];

// Membuat API Endpoint
// Ini adalah "pintu" yang bisa diakses di http://localhost:3000/api/users
app.get('/api/users', (req, res) => {
  // Mengirim data users sebagai response dalam format JSON
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server backend berjalan di http://localhost:${port}`);
});