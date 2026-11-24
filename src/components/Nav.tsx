import { useState } from 'react'
import { FileText, Menu, Moon, Sun, X } from 'lucide-react'
import { profile } from '../data/profileData'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#impact', label: 'Impact' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

interface Props {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
  onOpenResume: () => void
}

export default function Nav({ theme, onToggleTheme, onOpenResume }: Props) {
  const [open, setOpen] = useState(false)
  const initials = profile.name.split(' ').map((p) => p[0]).join('')

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#about" className="flex items-center gap-2 font-serif text-lg font-semibold text-primary">
          <span className="grid size-9 place-items-center rounded-lg bg-primary text-sm text-on-primary">{initials}</span>
          <span className="hidden sm:inline">{profile.name.split(' ')[0]}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun className="size-5" aria-hidden="true" /> : <Moon className="size-5" aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={onOpenResume}
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-on-primary transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <FileText className="size-4" aria-hidden="true" />
            Resume
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-full text-muted hover:bg-surface-2 md:hidden"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-line/70 px-4 py-2 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block rounded-md px-2 py-3 text-ink">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                onOpenResume()
              }}
              className="w-full rounded-md px-2 py-3 text-left font-medium text-primary"
            >
              View resume
            </button>
          </li>
        </ul>
      )}
    </header>
  )
}
