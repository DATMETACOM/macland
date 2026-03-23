import { NextResponse } from 'next/server'

import { saveContactSubmission } from '@/lib/server/contact-submissions'
import { sendContactNotification } from '@/lib/server/mailer'

const hiddenRecipient = 'datmar.coach@gmail.com'

type ContactRequestBody = {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

function normalizeField(value: string | undefined) {
  return value?.trim() || ''
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody

    const submission = {
      name: normalizeField(body.name),
      email: normalizeField(body.email),
      phone: normalizeField(body.phone),
      subject: normalizeField(body.subject),
      message: normalizeField(body.message),
      createdAt: new Date().toISOString(),
    }

    if (!submission.name || !submission.email || !submission.phone || !submission.subject || !submission.message) {
      return NextResponse.json(
        { error: 'Vui lòng nhập đầy đủ thông tin bắt buộc.' },
        { status: 400 }
      )
    }

    if (!isValidEmail(submission.email)) {
      return NextResponse.json(
        { error: 'Email không hợp lệ.' },
        { status: 400 }
      )
    }

    await saveContactSubmission(submission)

    const emailSubject = `[MACLAND] Liên hệ mới: ${submission.subject}`
    const emailText = [
      'MACLAND vừa nhận được thông tin liên hệ mới.',
      '',
      `Họ tên: ${submission.name}`,
      `Email: ${submission.email}`,
      `Số điện thoại: ${submission.phone}`,
      `Chủ đề: ${submission.subject}`,
      '',
      'Nội dung:',
      submission.message,
      '',
      `Thời gian: ${submission.createdAt}`,
    ].join('\n')

    const emailHtml = `
      <h2>MACLAND vừa nhận được thông tin liên hệ mới</h2>
      <p><strong>Họ tên:</strong> ${submission.name}</p>
      <p><strong>Email:</strong> ${submission.email}</p>
      <p><strong>Số điện thoại:</strong> ${submission.phone}</p>
      <p><strong>Chủ đề:</strong> ${submission.subject}</p>
      <p><strong>Nội dung:</strong></p>
      <p>${submission.message.replace(/\n/g, '<br />')}</p>
      <p><strong>Thời gian:</strong> ${submission.createdAt}</p>
    `

    const mailResult = await sendContactNotification({
      to: hiddenRecipient,
      replyTo: submission.email,
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    })

    return NextResponse.json({
      ok: true,
      saved: true,
      emailed: mailResult.delivered,
    })
  } catch (error) {
    console.error('Failed to handle contact submission:', error)
    return NextResponse.json(
      { error: 'Không thể gửi thông tin lúc này. Vui lòng thử lại sau.' },
      { status: 500 }
    )
  }
}
