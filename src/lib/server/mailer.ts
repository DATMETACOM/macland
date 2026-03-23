import nodemailer from 'nodemailer'

type MailPayload = {
  to: string
  replyTo: string
  subject: string
  text: string
  html: string
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

  await transporter.sendMail({
    from: process.env.CONTACT_FROM_EMAIL || config.auth.user,
    to: payload.to,
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
