import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { galleryYears, getGalleryByYear } from '@/lib/data'

export function generateStaticParams() {
  return galleryYears.map((year) => ({ year }))
}

export default async function GalleryYearPage({
  params,
}: {
  params: Promise<{ year: string }>
}) {
  const { year } = await params

  if (!galleryYears.includes(year as (typeof galleryYears)[number])) {
    notFound()
  }

  const items = getGalleryByYear(year)

  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
  {items.map((g, i) => (
    <figure
      key={g.id}
      className="group animate-fade-in-up relative block break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card"
      style={{ animationDelay: `${i * 60}ms` }}
    >
      {/* Ubah bagian pembungkus gambar ini agar mengikuti ukuran asli foto */}
      <div className="relative w-full overflow-hidden">
        <Image
          src={g.image || '/placeholder.svg'}
          alt={g.title}
          width={800} // Berikan estimasi ukuran dasar
          height={600}
          className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute right-3 top-3 z-10 rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur-sm">
          {g.date}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <figcaption className="absolute inset-x-0 bottom-0 z-10 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="font-medium text-background">{g.title}</p>
          <p className="mt-0.5 text-sm leading-relaxed text-background/80">
            {g.description}
          </p>
        </figcaption>
      </div>

      {/* static caption for touch devices / no-hover */}
      <div className="p-4 group-hover:opacity-0 sm:transition-opacity sm:duration-300">
        <p className="font-medium text-foreground">{g.title}</p>
        <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
          {g.description}
        </p>
      </div>
    </figure>
  ))}
</div>

  )
}
