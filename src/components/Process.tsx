import { ClipboardList, Compass, Handshake, Search, ShieldCheck } from 'lucide-react'
import { profile } from '../data/profileData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const icons = [Search, Compass, ClipboardList, Handshake, ShieldCheck]

export default function Process() {
  return (
    <section aria-labelledby="process-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading id="process-title" eyebrow="Approach" title="How I source" />
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {profile.process.map((s, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Reveal as="li" key={s.title} delay={i * 80}>
              <div className="relative h-full rounded-2xl border border-line bg-surface p-5">
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-serif text-2xl font-semibold text-line" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-ink">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            </Reveal>
          )
        })}
      </ol>
    </section>
  )
}
