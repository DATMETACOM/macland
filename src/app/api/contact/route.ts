import { NextResponse } from 'next/server'

import { sendContactNotification } from '@/lib/server/mailer'

const fallbackRecipient = 'datmar.coach@gmail.com'

type ContactRequestBody = {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  productContext?: {
    sourcePage?: string
    productTitle?: string
    productSlug?: string
    productUrl?: string
    actionLabel?: string
  }
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
      productContext: {
        sourcePage: normalizeField(body.productContext?.sourcePage),
        productTitle: normalizeField(body.productContext?.productTitle),
        productSlug: normalizeField(body.productContext?.productSlug),
        productUrl: normalizeField(body.productContext?.productUrl),
        actionLabel: normalizeField(body.productContext?.actionLabel),
      },
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

    const saved = false
    const hasProductContext = Boolean(
      submission.productContext.productTitle ||
      submission.productContext.productSlug ||
      submission.productContext.productUrl
    )

    const emailSubject = `[HAI PHONG INDUSTRIAL HUB] Liên hệ mới: ${submission.subject}`
    const emailText = [
      'HAI PHONG INDUSTRIAL HUB vừa nhận được thông tin liên hệ mới.',
      '',
      `Họ tên: ${submission.name}`,
      `Email: ${submission.email}`,
      `Số điện thoại: ${submission.phone}`,
      `Chủ đề: ${submission.subject}`,
      ...(hasProductContext
        ? [
            '',
            'Ngữ cảnh sản phẩm khách đang xem:',
            `Nguồn: ${submission.productContext.sourcePage || 'Trang sản phẩm'}`,
            `Hành động: ${submission.productContext.actionLabel || 'Đăng ký tư vấn'}`,
            `Tên sản phẩm: ${submission.productContext.productTitle || 'Đang cập nhật'}`,
            `Slug: ${submission.productContext.productSlug || 'Đang cập nhật'}`,
            `URL sản phẩm: ${submission.productContext.productUrl || 'Đang cập nhật'}`,
          ]
        : []),
      '',
      'Nội dung:',
      submission.message,
      '',
      `Thời gian: ${submission.createdAt}`,
    ].join('\n')

    const emailHtml = `
      <h2>HAI PHONG INDUSTRIAL HUB vừa nhận được thông tin liên hệ mới</h2>
      <p><strong>Họ tên:</strong> ${submission.name}</p>
      <p><strong>Email:</strong> ${submission.email}</p>
      <p><strong>Số điện thoại:</strong> ${submission.phone}</p>
      <p><strong>Chủ đề:</strong> ${submission.subject}</p>
      ${
        hasProductContext
          ? `
      <h3>Ngữ cảnh sản phẩm khách đang xem</h3>
      <p><strong>Nguồn:</strong> ${submission.productContext.sourcePage || 'Trang sản phẩm'}</p>
      <p><strong>Hành động:</strong> ${submission.productContext.actionLabel || 'Đăng ký tư vấn'}</p>
      <p><strong>Tên sản phẩm:</strong> ${submission.productContext.productTitle || 'Đang cập nhật'}</p>
      <p><strong>Slug:</strong> ${submission.productContext.productSlug || 'Đang cập nhật'}</p>
      <p><strong>URL sản phẩm:</strong> ${submission.productContext.productUrl || 'Đang cập nhật'}</p>
      `
          : ''
      }
      <p><strong>Nội dung:</strong></p>
      <p>${submission.message.replace(/\n/g, '<br />')}</p>
      <p><strong>Thời gian:</strong> ${submission.createdAt}</p>
    `

    let emailed = false

    try {
      const mailResult = await sendContactNotification({
        to: process.env.CONTACT_TO_EMAIL || fallbackRecipient,
        replyTo: submission.email,
        subject: emailSubject,
        text: emailText,
        html: emailHtml,
      })
      emailed = mailResult.delivered
    } catch (error) {
      console.error('Failed to send contact notification email:', error)
    }

    return NextResponse.json({
      ok: true,
      saved,
      emailed,
    })
  } catch (error) {
    console.error('Failed to handle contact submission:', error)
    return NextResponse.json(
      { error: 'Không thể gửi thông tin lúc này. Vui lòng thử lại sau.' },
      { status: 500 }
    )
  }
}
