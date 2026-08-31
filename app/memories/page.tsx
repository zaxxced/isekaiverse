import { PageHeader } from '@/components/page-header'
import { memories } from '@/lib/data'

export default function MemoriesPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Kenangan"
        title="Perjalanan yang layak dikenang."
        description="Setiap tahun menyimpan cerita, langkah, dan orang-orang yang membuat komunitas ini bertumbuh. Telusuri kembali momen-momennya."
      />

      <div className="relative">
        {/* vertical line */}
        <span
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[calc(6rem+7px)]"
        />

        <div className="space-y-12">
          {memories.map((yearBlock, yi) => (
            <section
              key={yearBlock.year}
              className="animate-fade-in-up"
              style={{ animationDelay: `${yi * 90}ms` }}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-8">
                {/* year marker */}
                <div className="flex items-center gap-4 sm:w-24 sm:shrink-0 sm:flex-col sm:items-start">
                  <span className="relative z-10 flex size-4 items-center justify-center rounded-full border-2 border-background bg-primary" />
                  <span className="font-serif text-3xl tracking-tight text-foreground">
                    {yearBlock.year}
                  </span>
                </div>

                <div className="flex-1 pl-8 sm:pl-0">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {yearBlock.summary}
                  </p>

                  <div className="mt-5 grid gap-3">
                    {yearBlock.entries.map((e) => (
                      <div
                        key={e.title}
                        className="group flex flex-col gap-1 rounded-2xl border border-border bg-card p-5 transition-colors duration-200 hover:bg-accent/50 sm:flex-row sm:items-center sm:gap-6"
                      >
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:w-20 sm:shrink-0">
                          {e.date}
                        </span>
                        <div className="min-w-0">
                          <p className="font-medium text-foreground">
                            {e.title}
                          </p>
                          <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                            {e.note}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
