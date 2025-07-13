// backend/data.js
const educationHistory = [
  {
    id: 1,
    period: '2019 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Informatika'
  },
  {
    id: 2,
    period: '2019-2022',
    institution: 'SMA Negeri 2 Magelang',
    major: 'Ilmu Pengetahuan Alam'
  },
];

const projects = [
  {
    title: 'Website Lucien Avenue',
    image: 'images/projek1.png', 
    description: 'Website toko sepatu yang menyediakan berbagai macam sepatu',
    tech: ['Vue.js', 'Laravel', 'Node.js'],
    link: 'https://github.com/GITikhsan/LUCIEN-AVENUE-FRONTEND.git',
    link2: 'https://github.com/GITikhsan/LUCIEN-AVENUE-BACKEND.git' 
  },
 
];
module.exports = { educationHistory, skills, projects };