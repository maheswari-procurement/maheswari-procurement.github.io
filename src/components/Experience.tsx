import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { profile, type Role } from '../data/profileData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const PREVIEW = 2

function RoleCard({ role, current }: { role: Role; current: boolean }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const hidden = role.bullets.length - PREVIEW + (role.leadership?.length ?? 0)
  const shown = open ? role.bullets : role.bullets.slice(0, PREVIEW)

  return (
    <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-serif text-xl font-semibold text-ink">{role.title}</h3>
        <p className="text-sm font-medium text-accent">
          <time>{role.start}</time> – <time>{role.end}</time>
        </p>
      </div>
      <p className="mt-0.5 font-medium text-primary">
        {role.company} <span className="font-normal text-muted">· {role.location}</span>
      </p>
      <p className="mt-3 text-sm text-muted">{role.summary}</p>

      <div id={panelId}>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink">
          {shown.map((b) => (
            <li key={b} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        {open && role.leadership && (
          <>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">Leadership</p>
            <ul className="mt-2 space-y-2 text-sm leading-relaxed text-ink">
              {role.leadership.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {hidden > 0 && (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          {open ? 'Show less' : `Show ${hidden} more`}
          <ChevronDown className={`size-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      )}
      {current && <span className="sr-only">Current role</span>}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-y border-line/70 bg-surface-2/50">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <SectionHeading id="experience-title" eyebrow="Career" title="Experience" />
        <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
          {profile.experience.map((r, i) => (
            <Reveal as="li" key={`${r.title}-${r.start}`} className="relative">
              <span
                aria-hidden="true"
                className={`absolute top-7 -left-[31px] size-3.5 rounded-full border-2 border-bg sm:-left-[39px] ${
                  i === 0 ? 'bg-accent' : 'bg-primary'
                }`}
              />
              <RoleCard role={r} current={r.end === 'Present'} />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
