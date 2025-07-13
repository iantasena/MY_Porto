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
const skills = [
  { name: 'JavaScript', level: 'Menengah', width:'50%' },
  { name: 'Vue.js', level: 'Menengah', width:'65%' },
  { name: 'Node.js', level: 'Menengah', width:'50%' },
  { name: 'Tailwind CSS', level: 'Menengah', width:'65%' },
  { name: 'Bootstrap', level: 'Menengah', width:'55%' },
  { name: 'Express.js', level: 'basic', width:'30%'},
  { name: 'SQL (PostgreSQL)', level: 'Menengah', width:'65%'},
  { name: 'HTML5 & CSS3', level: 'Menengah', width:'65%'},
  
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