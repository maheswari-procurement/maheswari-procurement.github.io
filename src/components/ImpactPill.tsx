import type { ImpactKind } from '../data/profileData'

export const kindStyles: Record<ImpactKind, { pill: string; dot: string }> = {
  savings: { pill: 'bg-accent/10 text-accent border-accent/30', dot: 'bg-accent' },
  avoidance: { pill: 'bg-primary/10 text-primary border-primary/30', dot: 'bg-primary' },
  service: { pill: 'bg-neutral/10 text-neutral border-neutral/30', dot: 'bg-neutral' },
}

export default function ImpactPill({ label, kind }: { label: string; kind: ImpactKind }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${kindStyles[kind].pill}`}>
      {label}
    </span>
  )
}
