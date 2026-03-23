'use client'

import { useState } from 'react'

type ContactFormProps = {
  title?: string
  className?: string
  submitLabel?: string
}

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export default function ContactForm({
  title = 'Gửi tin nhắn cho chúng tôi',
  className = 'bg-white p-8 rounded-xl shadow-md',
  submitLabel = 'Gửi tin nhắn',
}: ContactFormProps) {
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error'
    text: string
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Gửi thông tin thất bại.')
      }

      setSubmitMessage({
        type: 'success',
        text: 'Cảm ơn bạn đã liên hệ. Thông tin đã được ghi nhận, chúng tôi sẽ phản hồi sớm nhất.',
      })
      setFormData(initialFormData)
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Không thể gửi thông tin lúc này.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Họ tên <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              placeholder="Nhập họ tên của bạn"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              placeholder="email@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Số điện thoại <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
            placeholder="09xx xxx xxx"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Chủ đề <span className="text-red-600">*</span>
          </label>
          <select
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
          >
            <option value="">Chọn chủ đề</option>
            <option value="dau-tu">Tư vấn đầu tư</option>
            <option value="thue-mua">Thuê/Mua bất động sản</option>
            <option value="phap-ly">Thủ tục pháp lý</option>
            <option value="khac">Khác</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nội dung <span className="text-red-600">*</span>
          </label>
          <textarea
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
            placeholder="Nhập nội dung tin nhắn..."
          />
        </div>

        {submitMessage && (
          <div
            className={`rounded-lg px-4 py-3 text-sm ${
              submitMessage.type === 'success'
                ? 'bg-green-50 text-green-700'
                : 'bg-red-50 text-red-700'
            }`}
          >
            {submitMessage.text}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Đang gửi...' : submitLabel}
        </button>
      </form>
    </div>
  )
}
