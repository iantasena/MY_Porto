const express = require('express');
const cors = require('cors'); // Untuk mengizinkan akses dari frontend
const { educationHistory, skills, projects } = require('./data.js'); // Impor data

const app = express();
const port = 3000;

app.use(cors()); // Gunakan middleware CORS

// Endpoint untuk data pendidikan
app.get('/api/education', (req, res) => {
  res.json(educationHistory);
});

// Endpoint untuk data skill
app.get('/api/skills', (req, res) => {
  res.json(skills);
});

// Endpoint untuk data proyek
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(port, () => {
  console.log(`Server backend berjalan di http://localhost:${port}`);
});