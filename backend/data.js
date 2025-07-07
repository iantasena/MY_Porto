// backend/data.js
const educationHistory = [
  {
    id: 1,
    period: '2015 - 2019',
    institution: 'Universitas Indonesia',
    major: 'S1 - Ilmu Komputer'
  },
  {
    id: 2,
    period: '2012 - 2015',
    institution: 'SMA Negeri 1 Depok',
    major: 'Ilmu Pengetahuan Alam'
  },
  {
    id: 3,
    period: '2009 - 2012',
    institution: 'SMP Negeri 2 Yogyakarta',
    major: 'Siswa'
  }
];

const skills = [
  { name: 'JavaScript', level: 'Mahir' },
  { name: 'Vue.js', level: 'Mahir' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'Tailwind CSS', level: 'Mahir' },
  { name: 'HTML5 & CSS3', level: 'Mahir' },
  { name: 'Express.js', level: 'Menengah'    },
  { name: 'SQL (PostgreSQL)', level: 'Menengah' },
  { name: 'Git & GitHub', level: 'Mahir' }
];
const projects = [
  {
    title: 'Website Lucien Avenue',
    image: '', // Contoh gambar dari Unsplash
    description: 'Website toko sepatu yang menyediakan berbagai macam sepatu',
    tech: ['Vue.js', 'Laravel', 'Node.js'],
    link: 'https://github.com/GITikhsan/LUCIEN-AVENUE-FRONTEND.git',
    link2: 'https://github.com/GITikhsan/LUCIEN-AVENUE-BACKEND.git' 
  },
 
];
module.exports = { educationHistory, skills, projects };