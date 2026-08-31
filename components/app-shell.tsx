'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  Clock,
  Images,
  Link2,
  Sparkles,
  Menu,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/directory', label: 'Profil Grup', icon: Users },
  { href: '/groups', label: 'Grup', icon: Link2 },
  { href: '/memories', label: 'Kenangan', icon: Clock },
  { href: '/gallery', label: 'Dokumentasi', icon: Images },
]

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => {
        const active =
          item.href === '/'
            ? pathname === '/'
            : pathname.startsWith(item.href)
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? 'page' : undefined}
            className={cn(
              'group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200',
              active
                ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-sm'
                : 'text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground',
            )}
          >
            <Icon
              className={cn(
                'size-[18px] transition-colors',
                active
                  ? 'text-sidebar-accent-foreground'
                  : 'text-muted-foreground group-hover:text-sidebar-accent-foreground',
              )}
              strokeWidth={2}
            />
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <Sparkles className="size-[18px]" strokeWidth={2} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-serif text-xl tracking-tight text-foreground">
          Lentera
        </span>
        <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          Ruang Komunitas
        </span>
      </span>
    </Link>
  )
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-svh">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-sidebar-border bg-sidebar px-4 py-6 lg:flex">
        <div className="px-2">
          <Brand />
        </div>
        <div className="mt-8 px-1">
          <NavLinks />
        </div>
        <div className="mt-auto rounded-2xl border border-sidebar-border bg-secondary/60 p-4">
          <p className="text-sm font-medium text-foreground">Tetap terhubung</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Simpan cerita, rawat kenangan, dan rayakan setiap momen bersama.
          </p>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-background/80 px-4 py-3 backdrop-blur-md lg:hidden">
        <Brand />
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-accent"
          aria-label="Buka menu navigasi"
        >
          <Menu className="size-5" />
        </button>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            'absolute inset-0 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300',
            open ? 'opacity-100' : 'opacity-0',
          )}
        />
        <aside
          className={cn(
            'absolute inset-y-0 left-0 flex w-72 max-w-[82%] flex-col bg-sidebar px-4 py-6 shadow-xl transition-transform duration-300 ease-out',
            open ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <div className="flex items-center justify-between px-2">
            <Brand />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="Tutup menu navigasi"
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="mt-8 px-1">
            <NavLinks onNavigate={() => setOpen(false)} />
          </div>
        </aside>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <main className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
          {children}
        </main>
      </div>
    </div>
  )
}
