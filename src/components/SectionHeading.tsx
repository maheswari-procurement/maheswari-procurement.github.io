interface Props {
  id: string
  eyebrow: string
  title: string
  intro?: string
}

export default function SectionHeading({ id, eyebrow, title, intro }: Props) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 id={id} className="mt-2 font-serif text-3xl font-semibold text-ink sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-3 text-muted">{intro}</p>}
    </div>
  )
}
