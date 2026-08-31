export type Accent = 'blue' | 'sage' | 'peach' | 'lilac'

export const accentBg: Record<Accent, string> = {
  blue: 'bg-pastel-blue text-pastel-blue-foreground',
  sage: 'bg-pastel-sage text-pastel-sage-foreground',
  peach: 'bg-pastel-peach text-pastel-peach-foreground',
  lilac: 'bg-pastel-lilac text-pastel-lilac-foreground',
}

export const accentRing: Record<Accent, string> = {
  blue: 'ring-pastel-blue',
  sage: 'ring-pastel-sage',
  peach: 'ring-pastel-peach',
  lilac: 'ring-pastel-lilac',
}
