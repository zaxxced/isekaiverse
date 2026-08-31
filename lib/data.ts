export type Member = {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  href: string
  accent: 'blue' | 'sage' | 'peach' | 'lilac'
}

export const members: Member[] = [
  {
    id: 'aruna',
    name: 'Aruna Pramesti',
    role: 'Koordinator Komunitas',
    bio: 'Menjaga arah komunitas tetap hangat, inklusif, dan berdampak bagi setiap anggota.',
    avatar: '/avatars/member-1.png',
    href: '#aruna',
    accent: 'blue',
  },
  {
    id: 'bima',
    name: 'Bima Santoso',
    role: 'Kepala Program',
    bio: 'Merancang kegiatan dan kelas kolaboratif yang bermakna sepanjang tahun.',
    avatar: '/avatars/member-2.png',
    href: '#bima',
    accent: 'sage',
  },
  {
    id: 'citra',
    name: 'Citra Wardani',
    role: 'Kreatif & Media',
    bio: 'Menerjemahkan cerita komunitas menjadi visual yang rapi dan menyentuh.',
    avatar: '/avatars/member-3.png',
    href: '#citra',
    accent: 'peach',
  },
  {
    id: 'dimas',
    name: 'Dimas Nugroho',
    role: 'Relawan Lapangan',
    bio: 'Selalu hadir paling awal, memastikan setiap acara berjalan mulus di lapangan.',
    avatar: '/avatars/member-4.png',
    href: '#dimas',
    accent: 'lilac',
  },
  {
    id: 'elina',
    name: 'Elina Rahmawati',
    role: 'Hubungan Anggota',
    bio: 'Menyambut anggota baru dan merawat rasa memiliki di dalam komunitas.',
    avatar: '/avatars/member-5.png',
    href: '#elina',
    accent: 'blue',
  },
  {
    id: 'farid',
    name: 'Farid Hidayat',
    role: 'Penasihat Senior',
    bio: 'Membagikan pengalaman dan menjaga nilai-nilai komunitas tetap lestari.',
    avatar: '/avatars/member-6.png',
    href: '#farid',
    accent: 'sage',
  },
]

export type Group = {
  id: string
  name: string
  description: string
  image: string
  href: string
  accent: 'blue' | 'sage' | 'peach' | 'lilac'
}

export const groups: Group[] = [
  {
    id: 'grup-1',
    name: 'Isekai Verse Origin',
    description: 'Tempat dimana semuanya bermula.',
    image: '/groups/group-1.png',
    href: 'https://chat.whatsapp.com/Hu19OjP0o9K3GCOTfCwGb3?s=cl&p=a&ilr=4'
    accent: 'blue',
  },
  {
    id: 'grup-2',
    name: 'Grup Relawan',
    description: 'Tempat berkumpul para relawan sebelum setiap kegiatan.',
    image: '/groups/group-2.png',
    href: 'https://example.com',
    accent: 'sage',
  },
  {
    id: 'grup-3',
    name: 'Grup Kreatif',
    description: 'Diskusi ide, desain, dan konten media komunitas.',
    image: '/groups/group-3.png',
    href: 'https://example.com',
    accent: 'peach',
  },
  {
    id: 'grup-4',
    name: 'Grup Belajar',
    description: 'Berbagi materi dan jadwal kelas mingguan bersama.',
    image: '/groups/group-4.png',
    href: 'https://example.com',
    accent: 'lilac',
  },
  {
    id: 'grup-5',
    name: 'Grup Acara',
    description: 'Perencanaan dan koordinasi setiap event komunitas.',
    image: '/groups/group-5.png',
    href: 'https://example.com',
    accent: 'blue',
  },
  {
    id: 'grup-6',
    name: 'Grup Alumni',
    description: 'Menjaga silaturahmi para anggota lama komunitas.',
    image: '/groups/group-6.png',
    href: 'https://example.com',
    accent: 'sage',
  },
  {
    id: 'grup-7',
    name: 'Grup Dukungan',
    description: 'Ruang saling menguatkan dan berbagi cerita anggota.',
    image: '/groups/group-7.png',
    href: 'https://example.com',
    accent: 'peach',
  },
]

export type MemoryYear = {
  year: string
  summary: string
  entries: { title: string; note: string; date: string }[]
}

export const memories: MemoryYear[] = [
  {
    year: '2025',
    summary: 'Tahun pertumbuhan — komunitas melebihi 500 anggota aktif.',
    entries: [
      {
        date: 'Maret',
        title: 'Peluncuran Ruang Belajar',
        note: 'Membuka kelas mingguan gratis untuk anggota dan warga sekitar.',
      },
      {
        date: 'Agustus',
        title: 'Festival Kolaborasi',
        note: 'Menghadirkan 12 komunitas mitra dalam satu panggung kebersamaan.',
      },
      {
        date: 'Desember',
        title: 'Retret Akhir Tahun',
        note: 'Merefleksikan perjalanan dan menyusun harapan untuk tahun depan.',
      },
    ],
  },
  {
    year: '2024',
    summary: 'Merapikan fondasi — struktur, nilai, dan ritual komunitas terbentuk.',
    entries: [
      {
        date: 'Februari',
        title: 'Perumusan Nilai Bersama',
        note: 'Menyepakati empat nilai inti yang menjadi kompas komunitas.',
      },
      {
        date: 'Juli',
        title: 'Aksi Sosial Perdana',
        note: 'Program penghijauan bersama warga di tiga titik kota.',
      },
    ],
  },
  {
    year: '2023',
    summary: 'Awal mula — sebuah ruang kecil untuk saling menguatkan.',
    entries: [
      {
        date: 'Mei',
        title: 'Pertemuan Pertama',
        note: 'Sembilan orang berkumpul dan menyalakan ide komunitas ini.',
      },
      {
        date: 'Oktober',
        title: 'Situs Komunitas Lahir',
        note: 'Rumah digital pertama untuk menyimpan cerita dan kenangan.',
      },
    ],
  },
]

export type GalleryItem = {
  id: string
  title: string
  description: string
  image: string
  date: string
  year: string
  tall?: boolean
}

export const gallery: GalleryItem[] = [
  // 2023
  {
    id: 'awal-mula',
    title: 'Pertemuan Pertama',
    description: 'Sembilan orang berkumpul dan menyalakan ide komunitas.',
    image: '/gallery/event-6.png',
    date: 'Mei 2023',
    year: '2023',
    tall: true,
  },
  {
    id: 'situs-lahir',
    title: 'Rumah Digital Pertama',
    description: 'Merayakan lahirnya situs komunitas bersama.',
    image: '/gallery/event-3.png',
    date: 'Okt 2023',
    year: '2023',
  },
  // 2024
  {
    id: 'green',
    title: 'Aksi Penghijauan',
    description: 'Menanam harapan sekaligus pohon untuk kota.',
    image: '/gallery/event-4.png',
    date: 'Jul 2024',
    year: '2024',
    tall: true,
  },
  {
    id: 'dinner',
    title: 'Makan Malam Hangat',
    description: 'Meja panjang, cerita, dan kehangatan bersama.',
    image: '/gallery/event-5.png',
    date: 'Des 2024',
    year: '2024',
  },
  // 2025
  {
    id: 'workshop',
    title: 'Lokakarya Kolaboratif',
    description: 'Sesi belajar bareng yang penuh gagasan dan tawa.',
    image: '/gallery/event-1.png',
    date: 'Mar 2025',
    year: '2025',
    tall: true,
  },
  {
    id: 'gathering',
    title: 'Temu Akbar Senja',
    description: 'Merayakan kebersamaan di bawah langit sore.',
    image: '/gallery/event-2.png',
    date: 'Agu 2025',
    year: '2025',
  },
  {
    id: 'talk',
    title: 'Panggung Cerita',
    description: 'Berbagi inspirasi dari para anggota komunitas.',
    image: '/gallery/event-3.png',
    date: 'Jun 2025',
    year: '2025',
  },
  {
    id: 'team',
    title: 'Potret Keluarga',
    description: 'Wajah-wajah di balik setiap langkah komunitas.',
    image: '/gallery/event-6.png',
    date: 'Sep 2025',
    year: '2025',
  },
  // 2026
  {
    id: 'festival-2026',
    title: 'Festival Kolaborasi',
    description: 'Belasan komunitas mitra dalam satu panggung kebersamaan.',
    image: '/gallery/event-2.png',
    date: 'Agu 2026',
    year: '2026',
    tall: true,
  },
  {
    id: 'kelas-2026',
    title: 'Kelas Terbuka',
    description: 'Ruang belajar mingguan yang makin ramai peminat.',
    image: '/gallery/event-1.png',
    date: 'Apr 2026',
    year: '2026',
  },
  // 2027
  {
    id: 'retret-2027',
    title: 'Retret Kebersamaan',
    description: 'Merefleksikan perjalanan dan menyusun harapan baru.',
    image: '/gallery/event-5.png',
    date: 'Jan 2027',
    year: '2027',
    tall: true,
  },
  {
    id: 'aksi-2027',
    title: 'Aksi Sosial Kota',
    description: 'Bergerak bersama untuk lingkungan yang lebih baik.',
    image: '/gallery/event-4.png',
    date: 'Jul 2027',
    year: '2027',
  },
]

export const galleryYears = ['2023', '2024', '2025', '2026', '2027'] as const

export function getGalleryByYear(year: string) {
  return gallery.filter((g) => g.year === year)
}
