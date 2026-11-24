import { impactLegend, profile, type ImpactKind } from '../data/profileData'
import ImpactPill, { kindStyles } from './ImpactPill'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Impact() {
  return (
    <section id="impact" aria-labelledby="impact-title" className="border-y border-line/70 bg-surface-2/50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          id="impact-title"
          eyebrow="Key achievements"
          title="Selected work and its impact"
          intro="A few sourcing projects, with the outcome labelled by type."
        />

        <ul aria-label="Impact legend" className="mb-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {(Object.keys(impactLegend) as ImpactKind[]).map((k) => (
            <li key={k} className="inline-flex items-center gap-2">
              <span className={`size-2.5 rounded-full ${kindStyles[k].dot}`} aria-hidden="true" />
              {impactLegend[k]}
            </li>
          ))}
        </ul>

        <div className="grid gap-6 md:grid-cols-2">
          {profile.caseStudies.map((c, i) => (
            <Reveal as="article" key={c.title} delay={(i % 2) * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm sm:p-7">
                <p className="text-xs font-medium uppercase tracking-wider text-muted">{c.org}</p>
                <h3 className="mt-1 font-serif text-xl font-semibold text-ink">{c.title}</h3>
                <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                  <div>
                    <dt className="font-semibold text-primary">Challenge</dt>
                    <dd className="text-muted">{c.challenge}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-primary">Approach</dt>
                    <dd className="text-muted">{c.approach}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-primary">Result</dt>
                    <dd className="text-ink">{c.result}</dd>
                  </div>
                </dl>
                <ul className="mt-auto flex flex-wrap gap-2 pt-5" aria-label="Impact">
                  {c.pills.map((p) => (
                    <li key={p.label}>
                      <ImpactPill {...p} />
                      <span className="sr-only"> ({impactLegend[p.kind]})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <h3 className="font-serif text-lg font-semibold text-ink">More results</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {profile.highlights.map((h) => (
              <li key={h.text} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4 text-sm text-ink">
                <span className={`mt-1.5 size-2.5 shrink-0 rounded-full ${kindStyles[h.kind].dot}`} aria-hidden="true" />
                <span>
                  {h.text}
                  <span className="sr-only"> ({impactLegend[h.kind]})</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
