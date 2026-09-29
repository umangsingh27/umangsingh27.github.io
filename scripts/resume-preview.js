import { execFileSync } from 'node:child_process'
import { rmSync } from 'node:fs'
import sharp from 'sharp'

const tmp = 'public/resume-preview-tmp'

execFileSync('pdftoppm', ['-png', '-scale-to-x', '1400', '-scale-to-y', '-1', '-singlefile', 'public/resume.pdf', tmp])
await sharp(`${tmp}.png`).webp({ quality: 82 }).toFile('public/resume-preview.webp')
rmSync(`${tmp}.png`)
console.log('Wrote public/resume-preview.webp')
