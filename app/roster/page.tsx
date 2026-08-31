import { PageHeader } from '@/components/page-header'
import { roster } from '@/lib/data'

export default function RosterPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Daftar Anggota"
        title="Nama-nama di setiap tahun."
        description="Kartu per tahun berisi daftar nama anggota, disusun rapi satu baris satu nama."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {roster.map((block, bi) => (
          <section
            key={block.year}
            className="animate-fade-in-up rounded-2xl border border-border bg-card p-6 transition-colors duration-200 hover:border-foreground/20"
            style={{ animationDelay: `${bi * 70}ms` }}
          >
            <div className="flex items-baseline justify-between border-b border-border pb-4">
              <h2 className="font-serif text-3xl tracking-tight text-foreground">
                {block.year}
              </h2>
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {block.names.length} nama
              </span>
            </div>

            <ul className="mt-4 flex flex-col">
              {block.names.map((name, ni) => (
                <li
                  key={name}
                  className="flex items-center gap-3 border-b border-border/60 py-2.5 text-sm text-foreground last:border-0"
                >
                  <span className="w-5 shrink-0 text-xs font-medium tabular-nums text-muted-foreground">
                    {ni + 1}
                  </span>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
