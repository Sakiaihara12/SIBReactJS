// books.js
// Membuat gambar sampul (data URI SVG) agar tidak bergantung pada URL eksternal.
export const makeCover = (title, author, c1 = '#d71f3b', c2 = '#6e0f1f') => {
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
  const words = title.split(' ')
  const lines = []
  let line = ''
  words.forEach((w) => {
    if ((line + ' ' + w).trim().length > 14) { lines.push(line.trim()); line = w } else { line += ' ' + w }
  })
  lines.push(line.trim())
  const tspans = lines.slice(0, 4).map((l, i) => `<tspan x="150" dy="${i === 0 ? 0 : 34}">${esc(l)}</tspan>`).join('')
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="420" viewBox="0 0 300 420">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
<rect width="300" height="420" fill="url(#g)"/><rect x="0" y="0" width="18" height="420" fill="rgba(0,0,0,.18)"/>
<circle cx="250" cy="60" r="70" fill="rgba(255,255,255,.08)"/><circle cx="40" cy="390" r="90" fill="rgba(255,255,255,.08)"/>
<text x="150" y="150" text-anchor="middle" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="#fff1c9">${tspans}</text>
<line x1="90" y1="330" x2="210" y2="330" stroke="#f2b82e" stroke-width="2"/>
<text x="150" y="365" text-anchor="middle" font-family="Arial,sans-serif" font-size="16" fill="#fff">${esc(author)}</text></svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

const books = [
  { id: 1, title: 'Belajar JavaScript Dasar', author: 'Andi Prasetyo', year: 2021, price: 85000,
    description: 'Panduan lengkap untuk pemula yang ingin belajar JavaScript dari nol.',
    image: makeCover('Belajar JavaScript Dasar', 'Andi Prasetyo', '#d71f3b', '#6e0f1f') },
  { id: 2, title: 'React untuk Pemula', author: 'Dina Sari', year: 2022, price: 95000,
    description: 'Mengenal konsep dan praktik membuat aplikasi React modern.',
    image: makeCover('React untuk Pemula', 'Dina Sari', '#f2b82e', '#8a6408') },
  { id: 3, title: 'Desain Web Responsif', author: 'Rizky Maulana', year: 2020, price: 78000,
    description: 'Teknik membuat tampilan website yang rapi di semua ukuran layar dengan Bootstrap.',
    image: makeCover('Desain Web Responsif', 'Rizky Maulana', '#1d4f91', '#0b1f3d') },
  { id: 4, title: 'Algoritma dan Logika', author: 'Sinta Wulandari', year: 2019, price: 72000,
    description: 'Melatih cara berpikir logis lewat contoh soal algoritma yang bertahap.',
    image: makeCover('Algoritma dan Logika', 'Sinta Wulandari', '#1c1c27', '#05050a') },
  { id: 5, title: 'Basis Data untuk Semua', author: 'Budi Santoso', year: 2018, price: 88000,
    description: 'Dasar perancangan database dan query SQL dengan studi kasus nyata.',
    image: makeCover('Basis Data untuk Semua', 'Budi Santoso', '#e04a5f', '#8f1226') },
  { id: 6, title: 'Git dan GitHub Praktis', author: 'Laras Ayu', year: 2023, price: 69000,
    description: 'Kolaborasi tim dan manajemen versi kode dari commit sampai pull request.',
    image: makeCover('Git dan GitHub Praktis', 'Laras Ayu', '#c99a1e', '#3a2a05') },
  { id: 7, title: 'UI/UX Sehari-hari', author: 'Fajar Nugroho', year: 2022, price: 92000,
    description: 'Prinsip desain antarmuka yang nyaman dipakai, lengkap dengan contoh kasus.',
    image: makeCover('UI/UX Sehari-hari', 'Fajar Nugroho', '#2f6fd0', '#0b1f3d') },
  { id: 8, title: 'Python untuk Analisis Data', author: 'Maya Kusuma', year: 2021, price: 99000,
    description: 'Mengolah dan memvisualisasikan data memakai Python dan pustaka populer.',
    image: makeCover('Python untuk Analisis Data', 'Maya Kusuma', '#d71f3b', '#14141c') },
  { id: 9, title: 'Kewirausahaan Digital', author: 'Hendra Wijaya', year: 2020, price: 76000,
    description: 'Strategi memulai dan mengembangkan usaha online dari ide sampai penjualan.',
    image: makeCover('Kewirausahaan Digital', 'Hendra Wijaya', '#f2b82e', '#b8860b') },
  { id: 10, title: 'Node.js dan REST API', author: 'Putri Anjani', year: 2023, price: 97000,
    description: 'Membangun backend sederhana dan API yang siap dipakai aplikasi frontend.',
    image: makeCover('Node.js dan REST API', 'Putri Anjani', '#1c1c27', '#d71f3b') },
]

export default books
