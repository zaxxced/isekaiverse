export type Accent = 
  | 'blue' 
  | 'sage' 
  | 'peach' 
  | 'lilac' 
  | 'slate' 
  | 'rose' 
  | 'blush' 
  | 'pink' 
  | 'navy' 
  | 'brown'

export const accentBg: Record<Accent, string> = {
  blue: 'bg-pastel-blue text-pastel-blue-foreground',
  sage: 'bg-pastel-sage text-pastel-sage-foreground',
  peach: 'bg-pastel-peach text-pastel-peach-foreground',
  lilac: 'bg-pastel-lilac text-pastel-lilac-foreground',
  slate: 'bg-pastel-slate text-pastel-slate-foreground',
  rose: 'bg-pastel-rose text-pastel-rose-foreground',
  blush: 'bg-pastel-blush text-pastel-blush-foreground',
  pink: 'bg-pastel-pink text-pastel-pink-foreground',
  navy: 'bg-pastel-navy text-pastel-navy-foreground',
  brown: 'bg-pastel-brown text-pastel-brown-foreground',
}

export const accentRing: Record<Accent, string> = {
  blue: 'ring-pastel-blue',
  sage: 'ring-pastel-sage',
  peach: 'ring-pastel-peach',
  lilac: 'ring-pastel-lilac',
  slate: 'ring-pastel-slate',
  rose: 'ring-pastel-rose',
  blush: 'ring-pastel-blush',
  pink: 'ring-pastel-pink',
  navy: 'ring-pastel-navy',
  brown: 'ring-pastel-brown',
}
