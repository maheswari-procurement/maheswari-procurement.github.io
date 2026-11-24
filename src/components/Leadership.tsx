import { Bot, LayoutDashboard, UserCheck, Users } from 'lucide-react'
import { profile } from '../data/profileData'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const icons = [Users, UserCheck, Bot, LayoutDashboard]

export default function Leadership() {
  return (
    <section aria-labelledby="leadership-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading
        id="leadership-title"
        eyebrow="Leadership"
        title="Leading teams"
        intro="Building teams, and the tools that help them work."
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {profile.leadership.map((l, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Reveal as="li" key={l.label} delay={i * 80}>
              <div className="h-full rounded-2xl border border-line bg-surface p-5">
                <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-4 font-serif text-2xl font-semibold text-primary">{l.value}</p>
                <p className="font-medium text-ink">{l.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{l.text}</p>
              </div>
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}
