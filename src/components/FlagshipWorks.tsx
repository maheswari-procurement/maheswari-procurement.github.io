import { CircleCheck } from 'lucide-react'
import { profile } from '../data/profileData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function FlagshipWorks() {
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        id="work-title"
        eyebrow="Flagship work"
        title="Recent work I'm proud of"
        intro="AI tools built for the team, plus the latest sourcing wins at AirAsia."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {profile.flagshipWorks.map((w, i) => (
          <Reveal as="article" key={w.title} delay={(i % 2) * 100}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <p className="font-mono text-sm text-accent">
                  {w.org}
                  {w.period && ` · ${w.period}`}
                </p>
                <ul className="flex flex-wrap gap-1.5" aria-label="Tags">
                  {w.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line bg-surface-2 px-2.5 py-0.5 font-mono text-xs text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug text-ink">{w.title}</h3>
              <p className="mt-2 font-semibold text-ink">{w.subtitle}</p>
              <p className="mt-2 text-muted">{w.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Outcomes">
                {w.outcomes.map((o) => (
                  <li
                    key={o}
                    className="inline-flex items-center gap-1.5 rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs font-medium text-primary"
                  >
                    <CircleCheck className="size-3.5" aria-hidden="true" />
                    {o}
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-line pt-4">
                <p className="font-mono text-xs uppercase tracking-wider text-muted">Key contributions & outcomes</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink">
                  {w.contributions.map((c) => (
                    <li key={c} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
