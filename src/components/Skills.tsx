import { Award, BookOpen, GraduationCap, Languages } from 'lucide-react'
import { profile } from '../data/profileData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading id="skills-title" eyebrow="Expertise" title="Skills & credentials" />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {profile.skillGroups.map((g, i) => (
          <Reveal key={g.name} delay={(i % 3) * 80}>
            <div className="h-full rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-semibold text-primary">{g.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li key={s} className="rounded-full bg-surface-2 px-3 py-1 text-sm text-ink">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <Reveal>
          <div className="h-full rounded-2xl border border-line bg-surface p-6">
            <h3 className="flex items-center gap-2 font-semibold text-primary">
              <GraduationCap className="size-5" aria-hidden="true" /> Education
            </h3>
            {profile.education.map((e) => (
              <div key={e.degree} className="mt-4">
                <p className="font-medium text-ink">{e.degree}</p>
                <p className="text-sm text-muted">{e.school}</p>
                <p className="text-sm text-accent">{e.period}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={60}>
          <div className="h-full rounded-2xl border border-line bg-surface p-6">
            <h3 className="flex items-center gap-2 font-semibold text-primary">
              <BookOpen className="size-5" aria-hidden="true" /> Professional development
            </h3>
            <ul className="mt-4 space-y-3">
              {profile.development.map((d) => (
                <li key={d.title}>
                  <p className="font-medium text-ink">{d.title}</p>
                  <p className="text-sm text-muted">{d.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="h-full rounded-2xl border border-line bg-surface p-6">
            <h3 className="flex items-center gap-2 font-semibold text-primary">
              <Award className="size-5" aria-hidden="true" /> Awards
            </h3>
            <ul className="mt-4 space-y-3">
              {profile.awards.map((a) => (
                <li key={a.title}>
                  <p className="font-medium text-ink">{a.title}</p>
                  <p className="text-sm text-muted">{a.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="h-full rounded-2xl border border-line bg-surface p-6">
            <h3 className="flex items-center gap-2 font-semibold text-primary">
              <Languages className="size-5" aria-hidden="true" /> Languages
            </h3>
            <ul className="mt-4 space-y-3">
              {profile.languages.map((l) => (
                <li key={l.name} className="flex justify-between gap-4">
                  <span className="font-medium text-ink">{l.name}</span>
                  <span className="text-sm text-muted">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
