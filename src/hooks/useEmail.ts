import { profile } from '../data/profileData'

// Decoded on demand so contact details never sit in the HTML
const decode = (s: string) => atob(s).split('').reverse().join('')
export const decodeEmail = () => decode(profile.emailEncoded)
export const decodePhone = () => decode(profile.phoneEncoded)
