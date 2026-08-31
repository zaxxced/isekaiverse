import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { galleryYears, getGalleryByYear } from '@/lib/data'

export default function GalleryPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Dokumentasi"
        title="Arsip kenangan per tahun."
        description="Pilih salah satu tahun untuk membuka arsip dokumentasi kegiatan komunitas pada periode tersebut."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryYears.map((year, i) => {
          const items = getGalleryByYear(year)
          const cover = items[0]?.image ?? '/placeholder.svg'
          return (
            <Link
              key={year}
              href={`/gallery/${year}`}
              className="group animate-fade-in-up relative aspect-square overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <Image
                src={cover || '/placeholder.svg'}
                alt={`Arsip kenangan tahun ${year}`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* overlay teks tahun */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/25 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <p className="text-xs font-medium uppercase tracking-widest text-background/80">
                  Arsip · {items.length} dokumentasi
                </p>
                <h2 className="mt-1 font-serif text-4xl leading-none tracking-tight text-background sm:text-5xl">
                  KENANGAN {year}
                </h2>
              </div>
              <span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
                <ArrowUpRight className="size-5" />
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
