import { Download, FileText } from 'lucide-react'
import { profile } from '../data/profileData'
import EmailButton from './EmailButton'
import LinkedInIcon from './LinkedInIcon'
import Reveal from './Reveal'

const btn =
  'inline-flex items-center gap-2 rounded-full border border-on-primary/30 px-5 py-2.5 text-sm font-medium text-on-primary transition-colors hover:bg-on-primary/10'

export default function Footer({ onOpenResume }: { onOpenResume: () => void }) {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="px-4 pb-10 sm:px-6">
      <Reveal className="mx-auto max-w-6xl rounded-3xl bg-primary px-6 py-14 text-center sm:px-12">
        <h2 id="contact-title" className="font-serif text-3xl font-semibold text-on-primary sm:text-4xl">
          {profile.cta.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-on-primary/85">{profile.cta.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <EmailButton className={btn} />
          <a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer" className={btn}>
            <LinkedInIcon />
            LinkedIn
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a href={profile.resumePdf} download className={btn}>
            <Download className="size-4" aria-hidden="true" />
            Download resume
          </a>
          <button type="button" onClick={onOpenResume} className={btn}>
            <FileText className="size-4" aria-hidden="true" />
            Interactive resume
          </button>
        </div>
      </Reveal>
      <p className="mx-auto mt-8 max-w-6xl text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </p>
    </footer>
  )
}
