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
    id: 'azzam',
    name: 'Azzam',
    role: 'Owner',
    bio: 'Menjaga kebersamaan para member serta ketentraman komunitas.',
    avatar: '/avatars/member-1.png',
    href: '#azzam',
    accent: 'blue',
  },
  {
    id: 'zigot',
    name: 'Zigot',
    role: 'Ex Co-owner',
    bio: 'Pernah menjaga ketertiban dan berpengaruh dalam kelangsungan komunitas.',
    avatar: '/avatars/member-2.png',
    href: '#zigot',
    accent: 'sage',
  },
  {
    id: 'mar',
    name: 'Mar',
    role: 'Owner Sketchmates',
    bio: 'Mengatur dan melaksanakan Event di Sketchmates',
    avatar: '/avatars/member-3.png',
    href: '#mar',
    accent: 'peach',
  },
  {
    id: 'fahmi',
    name: 'Fahmi',
    role: 'Partner & Co-owner Gameverse',
    bio: 'Partner Bisnis serta Co-owner dari Gameverse.',
    avatar: '/avatars/member-.png',
    href: '#fahmi',
    accent: 'lilac',
  },
  {
    id: 'reja',
    name: 'Reja',
    role: 'Owner Voice Chat',
    bio: 'Menyambut anggota baru dengan ramah.',
    avatar: '/avatars/member-.png',
    href: '#reja',
    accent: 'blue',
  },
  {
    id: 'suzuya',
    name: 'Suzuya',
    role: 'Owner Gameverse',
    bio: 'Membagikan kehangatan serta menjadi ketua femboy.',
    avatar: '/avatars/member-4.png',
    href: '#suzuya',
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
    href: 'https://chat.whatsapp.com/Hu19OjP0o9K3GCOTfCwGb3?s=cl&p=a&ilr=4',
    accent: 'blue',
  },
  {
    id: 'grup-2',
    name: 'Sketchmates',
    description: 'Tempat berkumpulnya orang dengan keahlian menggambar.',
    image: '/groups/group-2.png',
    href: 'https://chat.whatsapp.com/DVa0GLFwuNj9RaBWtTulqF?s=cl&p=a&ilr=4',
    accent: 'sage',
  },
  {
    id: 'grup-3',
    name: 'Gameverse',
    description: 'Dunia tempat para Gamer adu kemahiran.',
    image: '/groups/group-3.png',
    href: 'https://chat.whatsapp.com/JzPYtz1NeIH4ki79tamN44?s=cl&p=a&ilr=4',
    accent: 'peach',
  },
  {
    id: 'grup-4',
    name: 'The Writers',
    description: 'Tempat berbagi ilmu menulis dan berbahasa.',
    image: '/groups/group-4.png',
    href: 'https://chat.whatsapp.com/I6jKRIUwlFU9ZfKpO6L7kW?s=cl&p=a&ilr=4',
    accent: 'lilac',
  },
  {
    id: 'grup-5',
    name: 'The Garden',
    description: 'Gerbang pembuka untuk yang masih malu untuk memulai.',
    image: '/groups/group-5.png',
    href: 'https://chat.whatsapp.com/LLj8QRgOpTNF6xHKedGolk?s=cl&p=a&ilr=4',
    accent: 'blue',
  },
  {
    id: 'grup-6',
    name: 'Voice Chat',
    description: 'Tempat dimana kita mengeluarkan suara.',
    image: '/groups/group-6.png',
    href: 'https://chat.whatsapp.com/H4xdx5xHTSZBJclvpz91qf?s=cl&p=a&ilr=4',
    accent: 'sage',
  },
  {
    id: 'grup-7',
    name: 'School',
    description: 'Ruang untuk belajar dan bersaing.',
    image: '/groups/group-7.png',
    href: 'https://chat.whatsapp.com/GSEzPLNfOxF5HUvvMX17zv?s=cl&p=a&ilr=4',
    accent: 'peach',
  },
]

export type RosterYear = {
  year: string
  names: string[]
}

export const roster: RosterYear[] = [
  {
    year: '2023',
    names: ['Arun', 'Pencatat Dosa mem GC', 'Abil', 'Dapin', 'Dazo', 'Fauzan', 'Elsa', 'Pica', 'Ruma', 'Adit', 'Fira', 'Casey', 'Desta', 'Rexxy', 'Eki', 'Lea', 'Rezky', 'Shanks', 'Harith', 'Rosadi', 'Marvin', 'Sora', 'Zenzz', 'Ray', 'Ahnaf', 'Felix',],
  },
  {
    year: '2024',
    names: [
      'Gibran',
      'Ryze',
      'PCC',
      'Bara',
      'Rayas',
    ],
  },
  {
    year: '2025',
    names: [
      'Xio',
      'Arsa',
      'Ajam',
      'Fazz',
      'Zuma',
      'DES',
      'Ken',
      'Momonn',
      'Haknif',
      'Adrian',
      'Aqyl',
      'Jambu',
      'Noe',
      'Agha',
      'Raven',
      'Vfaey',
      'Amira',
      'Rina',
      'Cindy',
      'Febry',
      'Joseph',
      'Ahmad',
      'Maulana',
      'Azka',
      'Kila',
      'Nopal',
      'Nabil',
      'Zeline',
      'Ikan',
      'Rahil',
      'Asya',
      'Dimas',
      'Asep Lubis',
      'Taca',
      'Lana',
      'Miwa',
      'Mita',
      'Rena',
      'Nayy',
      'Rehan',
      'Madoka',
      'Amira',
      'Luciven',
      'Dapa',
      'Rehan',
      'Anugrah',
      'Risky',
    ],
  },
  {
    year: '2026',
    names: ['Danzyy',
            'Pawzy', 
            'Kenko',
            'Kiaya',
            'Garit',
            'Water',
            'Pia',
            'Kei',
            'Shubells',
           ],
  },
  {
    year: '2027',
    names: ['Belom jir',],
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
    summary: 'Titik balik, komunitas melebihi 1000 anggota aktif.',
    entries: [
      {
        date: 'April',
        title: 'Benerapa cabang dibuat',
        note: 'Berharap akan mengembalikan masa kejayaan namun berakhir sepi.',
      },
      {
        date: 'Juni',
        title: 'Keputusasaan',
        note: 'Total member hanya sekitar 100, semua mengira ini akhir dari Isekai Verse',
      },
      {
        date: 'Juli',
        title: 'Trampolin',
        note: 'Satu video berhasil fyp di tiktok Isekai Verse, jumlah member menaik dengan sangat drastis.',
      },
      {
        date: 'Agustus-Desember',
        title: 'Masa Kejayaan',
        note: '1000 Lebih member berhasil mengembalikan kejayaan Isekai Verse, serta mewujudkan mimpi para admin..',
      },
    ],
  },
  {
    year: '2024',
    summary: 'Api yang masih menyala.',
    entries: [
      {
        date: 'April',
        title: 'Tour Free Fire',
        note: 'Salah satu momen paling menyenangkan dan sangat ramai meskipun dengan jumlah member yang sedikit.',
      },
      {
        date: 'November',
        title: 'Api kecil',
        note: 'Jumlah member naik meskipun tak seberapa.',
      },
    ],
  },
  {
    year: '2023',
    summary: 'Awal dari Awal.',
    entries: [
      {
        date: 'Januari',
        title: 'Tombol "Buat Grup" ditekan',
        note: 'Dari hitungan jari sampai puluhan member terkumpul.',
      },
      {
        date: 'April',
        title: 'Link Grup Rusak',
        note: 'Penyebab kebuntuan member pada masa itu, perlahan jumlah member menurun..',
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
    id: 'octagram',
    title: 'Pembuatan Octagram',
    description: 'Tempat dimana para admin berkumpul dan berdiskusi.',
    image: '/gallery/octagram.png',
    date: 'April 2023',
    year: '2023',
    tall: true,
  },
  {
    id: 'situs-lahir',
    title: 'belom, ini cuma tes',
    description: 'testing.',
    image: '/gallery/event-3.png',
    date: 'Okt 2023',
    year: '2023',
  },
  // 2024
  {
    id: 'member2023',
    title: 'Asal kota',
    description: 'Jarak yang memisahkan kita, ini mencakup member 2023 sampai 2024.',
    image: '/gallery/member2023.png',
    date: 'Mar 2024',
    year: '2024',
    tall: true,
  },
  {
    id: 'ivfft',
    title: 'Tournament Free Fire',
    description: 'Persaingan ibarat turnamen di anime.',
    image: '/gallery/ivfft.png',
    date: 'April 2024',
    year: '2024',
  },
  // 2025
  {
    id: 'drama',
    title: 'Percobaan menggulingkan Zigot',
    description: 'Perbedaan pendapat serta Ragebaiter yang membuat kita tidak kompak, berakhir dengan satu grup yang sempat di Disband sementara.',
    image: '/gallery/drama.png',
    date: 'Jul 2025',
    year: '2025',
    tall: true,
  },
  {
    id: 'test',
    title: 'Belum',
    description: 'Belum ada.',
    image: '/gallery/event-2.png',
    date: 'Agu 2025',
    year: '2025',
  },
  {
    id: 'talk',
    title: 'Belum',
    description: 'Belum ada.',
    image: '/gallery/event-3.png',
    date: 'Jun 2025',
    year: '2025',
  },
  {
    id: 'team',
    title: 'Belum',
    description: 'Belum.',
    image: '/gallery/event-6.png',
    date: 'Sep 2025',
    year: '2025',
  },
  // 2026
  {
    id: 'meet',
    title: 'Meet Up',
    description: 'Pertemuan langsung yang dilakukan member serta admin.',
    image: '/gallery/meet.jpg',
    date: 'Agu 2026',
    year: '2026',
    tall: true,
  },
  {
    id: 'biggesttour',
    title: 'Turnamen Terbesar',
    description: 'Momen pertama kali dilaksanakannya turnamen terbesar Isekai Verse.',
    image: '/gallery/biggesttour.png',
    date: 'Mei 2026',
    year: '2026',
  },
  {
    id: 'member2025',
    title: 'Asal kota pt 2',
    description: 'Jarak kami mulai berdekatan, mencakup member dari 2025.',
    image: '/gallery/member2025.png',
    date: 'Jan 2026',
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
