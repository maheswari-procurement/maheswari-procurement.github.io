import { profile } from '../data/profileData'

// Decoded on demand so the address never sits in the HTML
export const decodeEmail = () => atob(profile.emailEncoded).split('').reverse().join('')
