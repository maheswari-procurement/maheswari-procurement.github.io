import { useState } from 'react'
import { Check, Copy, Mail } from 'lucide-react'
import { decodeEmail } from '../hooks/useEmail'

interface Props {
  className?: string
}

export default function EmailButton({ className = '' }: Props) {
  const [email, setEmail] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    if (!email) return
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard blocked; address is still visible */
    }
  }

  if (!email) {
    return (
      <button type="button" onClick={() => setEmail(decodeEmail())} className={className}>
        <Mail className="size-4" aria-hidden="true" />
        Show email
      </button>
    )
  }

  return (
    <span className={className}>
      <Mail className="size-4" aria-hidden="true" />
      <a href={`mailto:${email}`} className="underline-offset-2 hover:underline">
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="ml-1 rounded p-0.5 opacity-80 hover:opacity-100"
        aria-label={copied ? 'Email copied' : 'Copy email'}
      >
        {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Copied to clipboard' : ''}
      </span>
    </span>
  )
}
