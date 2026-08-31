import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { members } from '@/lib/data'
import { accentBg } from '@/lib/accents'

export default function DirectoryPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Profil Para Admin"
        title="Orang-orang di balik komunitas."
        description="Kenali para Admin dan para mantan Admin yang berpengaruh pada komunitas ini."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {members.map((m, i) => (
          <article
            key={m.id}
            className="group animate-fade-in-up flex gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm sm:gap-5 sm:p-6"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl sm:size-24">
              <Image
                src={m.avatar || '/placeholder.svg'}
                alt={m.name}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg font-semibold tracking-tight text-foreground">
                  {m.name}
                </h2>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${accentBg[m.accent]}`}
                >
                  {m.role}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {m.bio}
              </p>
              <Link
                href={m.href}
                className="mt-auto inline-flex w-fit items-center gap-1.5 pt-4 text-sm font-medium text-foreground"
              >
                Lihat detail
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
