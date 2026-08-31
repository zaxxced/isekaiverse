const targetDate = new Date(new Date().getFullYear() + 1, 0, 6); // 6 Januari tahun depan
  const today = new Date();
  const diffTime = targetDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const finalDays = diffDays > 0 ? diffDays : 0;

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Users, Clock, Images, Heart, CalendarClock } from 'lucide-react'
import { members, memories, gallery } from '@/lib/data'
import { accentBg, type Accent } from '@/lib/accents'

const stats: { label: string; value: string; hint: string; accent: Accent; icon: typeof Users }[] = [
  { label: 'Anggota Aktif', value: '1400', hint: '+38 bulan ini', accent: 'blue', icon: Users },
  { label: 'Arsip Kejadian dan Peristiwa', value: '0', hint: '3 tahun perjalanan', accent: 'sage', icon: Clock },
  { label: 'Dokumentasi', value: '0', hint: 'foto & momen', accent: 'peach', icon: Images },
  { label: 'Hari lagi', value: `${finalDays}`, hint: 'hitung mundur ulang tahun ke 4', accent: 'lilac', icon: CalendarClock },
]

const quickLinks = [
  { href: '/directory', title: 'Profil Grup', desc: 'Kenali orang-orang di balik komunitas.', accent: 'blue' as Accent },
  { href: '/memories', title: 'Kenangan', desc: 'Telusuri perjalanan dari tahun ke tahun.', accent: 'sage' as Accent },
  { href: '/gallery', title: 'Dokumentasi', desc: 'Lihat galeri momen-momen berharga.', accent: 'peach' as Accent },
]

export default function DashboardPage() {
  const latestMemory = memories[0]

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="animate-fade-in-up overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-pastel-sage-foreground" />
              Selamat datang kembali
            </span>
            <h1 className="mt-5 text-balance font-serif text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl">
              Ruang hangat untuk merawat kebersamaan.
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Satu tempat untuk mengenal anggota, mengenang perjalanan, dan
              mendokumentasikan setiap momen berharga komunitas Lentera.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/directory"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
              >
                Jelajahi Anggota
                <ArrowUpRight className="size-4" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Lihat Dokumentasi
              </Link>
            </div>
          </div>

          <div className="flex -space-x-3">
            {members.slice(0, 5).map((m) => (
              <span
                key={m.id}
                className="relative size-12 overflow-hidden rounded-full ring-2 ring-card"
              >
                <Image
                  src={m.avatar || '/placeholder.svg'}
                  alt={m.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </span>
            ))}
            <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-muted-foreground ring-2 ring-card">
              +500
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s, i) => {
          const Icon = s.icon
          return (
            <div
              key={s.label}
              className="animate-fade-in-up rounded-2xl border border-border bg-card p-5"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <span
                className={`flex size-10 items-center justify-center rounded-xl ${accentBg[s.accent]}`}
              >
                <Icon className="size-5" strokeWidth={2} />
              </span>
              <p className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
                {s.value}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {s.label}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">{s.hint}</p>
            </div>
          )
        })}
      </section>

      {/* Quick links + latest memory */}
      <section className="grid gap-4 lg:grid-cols-3">
        {quickLinks.map((q, i) => (
          <Link
            key={q.href}
            href={q.href}
            className="group animate-fade-in-up flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div>
              <span className={`inline-block rounded-lg px-2.5 py-1 text-xs font-medium ${accentBg[q.accent]}`}>
                Bagian
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {q.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {q.desc}
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
              Buka bagian
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        ))}
      </section>

      {/* Latest activity preview */}
      <section className="animate-fade-in-up rounded-3xl border border-border bg-card p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl tracking-tight text-foreground">
              Sorotan {latestMemory.year}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {latestMemory.summary}
            </p>
          </div>
          <Link
            href="/memories"
            className="hidden items-center gap-1.5 text-sm font-medium text-foreground hover:underline sm:inline-flex"
          >
            Semua kenangan
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {latestMemory.entries.map((e) => (
            <div
              key={e.title}
              className="rounded-2xl border border-border bg-secondary/40 p-5"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {e.date}
              </p>
              <p className="mt-2 font-medium text-foreground">{e.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {e.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery peek */}
      <section className="animate-fade-in-up">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-serif text-2xl tracking-tight text-foreground">
            Momen Terbaru
          </h2>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline"
          >
            Galeri lengkap
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {gallery.slice(0, 4).map((g) => (
            <div
              key={g.id}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-border"
            >
              <Image
                src={g.image || '/placeholder.svg'}
                alt={g.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-3">
                <p className="text-xs font-medium text-background">{g.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
