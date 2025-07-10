// Salin dan ganti seluruh isi file backend/index.js dengan ini:

const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data'); // Pastikan file data.js ada di folder backend
const app = express();

app.use(cors());
app.use(express.json());

// --- API Endpoints ---
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));

// Ekspor aplikasi agar bisa digunakan oleh Vercel
module.exports = app;   