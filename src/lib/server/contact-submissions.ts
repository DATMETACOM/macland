import { promises as fs } from 'fs'
import path from 'path'

export type ContactSubmission = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  createdAt: string
}

const localSubmissionsDir = path.join(/* turbopackIgnore: true */ process.cwd(), 'data')
const fallbackSubmissionsDir = path.join('/tmp', 'macland')
const submissionsFileName = 'contact-submissions.json'

function getPreferredSubmissionsDir() {
  if (process.env.VERCEL === '1') {
    return fallbackSubmissionsDir
  }

  return localSubmissionsDir
}

async function ensureStorage(submissionsDir: string) {
  const submissionsPath = path.join(submissionsDir, submissionsFileName)

  await fs.mkdir(submissionsDir, { recursive: true })

  try {
    await fs.access(submissionsPath)
  } catch {
    await fs.writeFile(submissionsPath, '[]\n', 'utf8')
  }

  return submissionsPath
}

export async function saveContactSubmission(submission: ContactSubmission) {
  let submissionsPath: string

  try {
    submissionsPath = await ensureStorage(getPreferredSubmissionsDir())
  } catch (error) {
    console.warn('Falling back to tmp contact submission storage:', error)
    submissionsPath = await ensureStorage(fallbackSubmissionsDir)
  }

  const existing = await fs.readFile(submissionsPath, 'utf8')
  const parsed = JSON.parse(existing) as ContactSubmission[]
  parsed.unshift(submission)

  await fs.writeFile(submissionsPath, `${JSON.stringify(parsed, null, 2)}\n`, 'utf8')
}

export const submissionsPath = path.join(getPreferredSubmissionsDir(), submissionsFileName)
