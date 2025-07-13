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
  {
    "name": "Vue.js",
    "level": "Mahir",
    "width": "85%",
    "colorClass": "bg-neon-green"
  },
  {
    "name": "TailwindCSS",
    "level": "Mahir",
    "width": "90%",
    "colorClass": "bg-neon-cyan"
  },
  {
    "name": "JavaScript",
    "level": "Menengah",
    "width": "75%",
    "colorClass": "bg-neon-orange"
  },
  {
    "name": "Node.js",
    "level": "Menengah",
    "width": "60%",
    "colorClass": "bg-neon-green"
  },
  {
    "name": "UI/UX Design",
    "level": "Dasar",
    "width": "50%",
    "colorClass": "bg-neon-pink"
  },
  {
    "name": "Python",
    "level": "Mahir",
    "width": "80%",
    "colorClass": "bg-neon-blue"
  }
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