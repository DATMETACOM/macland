import nodemailer from 'nodemailer'

const auditRecipient = 'datmar.coach@gmail.com'

type MailPayload = {
  to: string
  replyTo: string
  subject: string
  text: string
  html: string
}

function normalizeRecipients(value: string) {
  return value
    .split(',')
    .map((recipient) => recipient.trim())
    .filter(Boolean)
}

function readSmtpConfig() {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || '587')
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    return null
  }

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE === 'true' || port === 465,
    auth: {
      user,
      pass,
    },
  }
}

export async function sendContactNotification(payload: MailPayload) {
  const config = readSmtpConfig()

  if (!config) {
    return {
      delivered: false,
      reason: 'missing_smtp_config',
    } as const
  }

  const transporter = nodemailer.createTransport(config)
  const toRecipients = normalizeRecipients(payload.to)
  const recipients = Array.from(new Set([...toRecipients, auditRecipient]))

  await transporter.sendMail({
    from: process.env.CONTACT_FROM_EMAIL || config.auth.user,
    to: recipients.join(', '),
    replyTo: payload.replyTo,
    subject: payload.subject,
    text: payload.text,
    html: payload.html,
  })

  return {
    delivered: true,
    reason: 'sent',
  } as const
}
