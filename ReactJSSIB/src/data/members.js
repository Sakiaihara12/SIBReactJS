// Ganti nama, peran, dan deskripsi sesuai anggota tim kamu.
export const members = [
  { id: 'anggota-1', name: 'Nama Anggota 1', role: 'Project Lead', bio: 'Mengatur alur kerja tim dan memastikan project selesai tepat waktu.', skills: ['Planning', 'Git', 'React'], color: ['#4f46e5', '#7c3aed'] },
  { id: 'anggota-2', name: 'Nama Anggota 2', role: 'Frontend Developer', bio: 'Menyusun komponen React dan tampilan responsif dengan Bootstrap.', skills: ['React', 'Bootstrap', 'JavaScript'], color: ['#0ea5e9', '#2563eb'] },
  { id: 'anggota-3', name: 'Nama Anggota 3', role: 'UI/UX Designer', bio: 'Merancang tampilan yang rapi, konsisten, dan nyaman dipakai.', skills: ['Figma', 'Wireframe', 'CSS'], color: ['#ec4899', '#f43f5e'] },
  { id: 'anggota-4', name: 'Nama Anggota 4', role: 'Content Writer', bio: 'Menulis materi dan konten agar mudah dipahami semua kalangan.', skills: ['Copywriting', 'Riset', 'Dokumentasi'], color: ['#10b981', '#059669'] },
]

export const initials = (name) => name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
