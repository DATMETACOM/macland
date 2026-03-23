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

const submissionsDir = path.join(process.cwd(), 'data')
const submissionsPath = path.join(submissionsDir, 'contact-submissions.json')

async function ensureStorage() {
  await fs.mkdir(submissionsDir, { recursive: true })

  try {
    await fs.access(submissionsPath)
  } catch {
    await fs.writeFile(submissionsPath, '[]\n', 'utf8')
  }
}

export async function saveContactSubmission(submission: ContactSubmission) {
  await ensureStorage()

  const existing = await fs.readFile(submissionsPath, 'utf8')
  const parsed = JSON.parse(existing) as ContactSubmission[]
  parsed.unshift(submission)

  await fs.writeFile(submissionsPath, `${JSON.stringify(parsed, null, 2)}\n`, 'utf8')
}

export { submissionsPath }
