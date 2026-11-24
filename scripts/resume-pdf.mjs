// Renders the public resume (no appendix) to public/ as a static PDF
import { createServer } from 'vite'
import { chromium } from 'playwright'

const server = await createServer({ logLevel: 'error', server: { port: 5199 } })
await server.listen()
const { profile } = await server.ssrLoadModule('/src/data/profileData.ts')
const url = server.resolvedUrls.local[0]

const browser = await chromium.launch()
try {
  const page = await browser.newPage({ colorScheme: 'light' })
  await page.goto(`${url}#resume`, { waitUntil: 'networkidle' })
  await page.locator('.sheet').waitFor()
  await page.evaluate(() => document.fonts.ready)
  const out = `public/${profile.resumePdf}`
  await page.pdf({ path: out, format: 'A4', printBackground: true })
  console.log(`Saved ${out}`)
} finally {
  await browser.close()
  await server.close()
}
