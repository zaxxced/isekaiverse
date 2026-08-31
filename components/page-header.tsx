export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="animate-fade-in-up max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-pretty font-serif text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}
