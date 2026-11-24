import { ArrowDown, Download, FileText, MapPin } from 'lucide-react'
import { profile } from '../data/profileData'
import EmailButton from './EmailButton'
import LinkedInIcon from './LinkedInIcon'
import Reveal from './Reveal'

const pill =
  'inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink transition-colors hover:border-primary/60'

export default function Hero({ onOpenResume }: { onOpenResume: () => void }) {
  return (
    <section id="about" aria-labelledby="hero-name" className="relative overflow-hidden">
      {/* Soft decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-64 size-80 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {profile.headline}
          </p>
          <h1 id="hero-name" className="font-serif text-4xl font-semibold leading-tight text-ink sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 inline-flex items-center gap-1.5 text-muted">
            <MapPin className="size-4" aria-hidden="true" />
            {profile.location}
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{profile.shortSummary}</p>
        </Reveal>

        <Reveal delay={100} className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-on-primary transition-opacity hover:opacity-90"
          >
            <ArrowDown className="size-4" aria-hidden="true" />
            View flagship work
          </a>
          <a href={profile.resumePdf} download className={`${pill} font-medium`}>
            <Download className="size-4" aria-hidden="true" />
            Download resume
          </a>
          <button type="button" onClick={onOpenResume} className={`${pill} font-medium`}>
            <FileText className="size-4" aria-hidden="true" />
            Interactive resume
          </button>
        </Reveal>

        <Reveal delay={150} className="mt-3 flex flex-wrap gap-3">
          <a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer" className={pill}>
            <LinkedInIcon />
            LinkedIn
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <EmailButton className={pill} />
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profile.metrics.map((m, i) => (
            <Reveal as="li" key={m.label} delay={150 + i * 80}>
              <div className="h-full rounded-2xl border border-line bg-surface p-5 shadow-sm">
                <p className="font-serif text-3xl font-semibold text-primary">{m.value}</p>
                <p className="mt-1 font-medium text-ink">{m.label}</p>
                {m.detail && <p className="mt-1 text-sm text-muted">{m.detail}</p>}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
