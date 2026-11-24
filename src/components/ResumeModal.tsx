import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Download, Printer, X } from 'lucide-react'
import { profile } from '../data/profileData'
import { decodeEmail, decodePhone } from '../hooks/useEmail'

interface Props {
  open: boolean
  onClose: () => void
}

function SheetHeading({ children }: { children: string }) {
  return (
    <h3
      className="mb-2 border-b pb-1 text-[0.85em] font-bold uppercase"
      style={{ color: 'var(--sheet-ink)', borderColor: 'var(--sheet-line)' }}
    >
      {children}
    </h3>
  )
}

function Appendix() {
  const p = profile
  const cards = [
    ...p.flagshipWorks.map((w) => ({
      title: w.title,
      period: w.period,
      meta: [w.org, ...w.tags].join(' · '),
      text: w.subtitle,
      bullets: w.contributions,
    })),
    ...p.caseStudies.map((c) => ({
      title: c.title,
      period: '',
      meta: c.org,
      text: `${c.challenge} ${c.approach}`,
      bullets: [c.result],
    })),
  ]

  return (
    <section className="appendix mt-8">
      <SheetHeading>Portfolio Appendix</SheetHeading>
      <div className="grid gap-2.5 sm:grid-cols-2">
        {cards.map((c) => (
          <article
            key={c.title}
            className="avoid-break rounded-md border p-2.5"
            style={{ borderColor: 'var(--sheet-line)', background: 'var(--sheet-tint)' }}
          >
            <div className="flex items-baseline justify-between gap-2">
              <h4 className="text-[0.95em] font-bold leading-snug">{c.title}</h4>
              {c.period && (
                <span className="shrink-0 font-mono text-[0.78em]" style={{ color: 'var(--sheet-muted)' }}>
                  {c.period}
                </span>
              )}
            </div>
            <p className="text-[0.85em] font-semibold" style={{ color: 'var(--sheet-primary)' }}>
              {c.meta}
            </p>
            <p className="mt-1 text-[0.9em]">{c.text}</p>
            <ul className="sheet-bullets mt-1 space-y-0.5 text-[0.88em]">
              {c.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function Sheet({ email, appendix }: { email: string; appendix: boolean }) {
  const p = profile
  const phone = decodePhone()

  return (
    <article className="sheet mx-auto w-full max-w-[210mm] p-[12mm] shadow-xl" aria-label="Printable resume">
      <header
        className="flex flex-col gap-2 border-b-2 pb-3 sm:flex-row sm:items-end sm:justify-between"
        style={{ borderColor: 'var(--sheet-primary)' }}
      >
        <div>
          <h2 className="font-serif text-[2.2em] font-semibold leading-none">{p.name}</h2>
          <p className="mt-1.5 font-semibold" style={{ color: 'var(--sheet-primary)' }}>
            {p.headline}
          </p>
        </div>
        <p className="text-[0.88em] leading-snug sm:text-right" style={{ color: 'var(--sheet-muted)' }}>
          {p.location}
          <br />
          <a href={`tel:${phone.replace(/[^+\d]/g, '')}`} style={{ color: 'var(--sheet-primary)' }}>
            {phone}
          </a>
          <br />
          <a href={`mailto:${email}`} style={{ color: 'var(--sheet-primary)' }}>
            {email}
          </a>
          <br />
          <a href={p.linkedin.url} style={{ color: 'var(--sheet-primary)' }}>
            {p.linkedin.label}
          </a>
        </p>
      </header>

      <p className="mt-3" style={{ color: 'var(--sheet-muted)' }}>
        {p.summary}
      </p>

      {/* Headline metrics above experience */}
      <ul
        className="avoid-break mt-3 grid grid-cols-2 gap-2 rounded-md border p-2 sm:grid-cols-4"
        style={{ borderColor: 'var(--sheet-line)', background: 'var(--sheet-tint)' }}
      >
        {p.metrics.map((m) => (
          <li key={m.label} className="border-l-2 pl-2" style={{ borderColor: 'var(--sheet-accent)' }}>
            <p className="font-bold leading-tight">{m.value}</p>
            <p className="text-[0.82em] leading-tight" style={{ color: 'var(--sheet-muted)' }}>
              {m.label}
            </p>
          </li>
        ))}
      </ul>

      {/* Single column keeps ATS reading order intact */}
      <section className="avoid-break mt-4">
        <SheetHeading>Skills</SheetHeading>
        <div className="space-y-1">
          {p.skillGroups.map((g) => (
            <div key={g.name} className="flex flex-wrap items-baseline gap-1">
              <span className="mr-1 text-[0.88em] font-bold">{g.name}:</span>
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-sm border px-1.5 text-[0.8em] leading-snug"
                  style={{ borderColor: 'var(--sheet-line)', background: 'var(--sheet-tint)' }}
                >
                  {s}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-4">
        <SheetHeading>Professional Experience</SheetHeading>
        <div className="space-y-2.5">
          {p.experience.map((r) => (
            <section key={`${r.title}-${r.start}`}>
              <div className="avoid-break flex flex-wrap items-baseline justify-between gap-x-3">
                <h4 className="font-bold">
                  {r.title} <span style={{ color: 'var(--sheet-primary)' }}>| {r.company}</span>
                  <span className="font-normal" style={{ color: 'var(--sheet-muted)' }}>
                    {' '}
                    | {r.location}
                  </span>
                </h4>
                <p className="font-mono text-[0.8em]" style={{ color: 'var(--sheet-muted)' }}>
                  {r.start} – {r.end}
                </p>
              </div>
              <ul className="sheet-bullets mt-0.5">
                {[...r.bullets, ...(r.leadership ?? [])].map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="avoid-break mt-4">
        <SheetHeading>Education, Development & Awards</SheetHeading>
        <ul className="space-y-0.5">
          {p.education.map((e) => (
            <li key={e.degree}>
              <strong>{e.degree}</strong>, {e.school} ({e.period})
            </li>
          ))}
          <li>
            <strong>Professional development: </strong>
            {p.development.map((d) => `${d.title} (${d.detail})`).join('; ')}
          </li>
          <li>
            <strong>Awards: </strong>{p.awards.map((a) => `${a.title}, ${a.detail}`).join('; ')}
          </li>
          <li>
            <strong>Languages: </strong>{p.languages.map((l) => `${l.name} (${l.level})`).join(', ')}
          </li>
        </ul>
      </section>

      {appendix && <Appendix />}
    </article>
  )
}

const check = 'size-4 rounded accent-[var(--primary)]'

export default function ResumeModal({ open, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)
  const email = useMemo(() => (open ? decodeEmail() : ''), [open])
  const [withAppendix, setWithAppendix] = useState(false)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])

  // Lock page scroll behind the dialog
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return createPortal(
    <dialog
      ref={ref}
      onClose={onClose}
      aria-labelledby="resume-dialog-title"
      className="resume-dialog"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {open && (
        <div className="print-reset flex h-full flex-col">
          <div className="no-print border-b border-line bg-surface px-4 py-3 sm:px-6">
            <h2 id="resume-dialog-title" className="sr-only">
              Interactive resume
            </h2>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink">
              <label className="inline-flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className={check}
                  checked={withAppendix}
                  onChange={(e) => setWithAppendix(e.target.checked)}
                />
                Include full portfolio appendix
              </label>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <a
                href={profile.resumePdf}
                download
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink hover:border-primary/60"
              >
                <Download className="size-4" aria-hidden="true" />
                Direct download PDF
              </a>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-on-primary hover:opacity-90"
              >
                <Printer className="size-4" aria-hidden="true" />
                Print / Save custom PDF
              </button>
              <button
                type="button"
                onClick={onClose}
                className="ml-auto grid size-10 place-items-center rounded-full text-muted hover:bg-surface-2 hover:text-ink"
                aria-label="Close resume"
                autoFocus
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="print-reset flex-1 overflow-y-auto bg-surface-2 px-2 py-6 sm:px-6">
            <Sheet email={email} appendix={withAppendix} />
          </div>
        </div>
      )}
    </dialog>,
    document.body,
  )
}
