import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { groups } from '@/lib/data'

export default function GroupsPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Grup"
        title="Pintu menuju setiap ruang."
        description="Pilih grup yang ingin kamu tuju. Setiap kartu akan mengarahkanmu langsung ke tautan grup tersebut."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <a
            key={g.id}
            href={g.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group animate-fade-in-up flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl">
              <Image
                src={g.image || '/placeholder.svg'}
                alt={g.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="64px"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
              <h2 className="text-base font-semibold tracking-tight text-foreground">
                {g.name}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {g.description}
              </p>
            </div>

            <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
          </a>
        ))}
      </div>
    </div>
  )
}
