'use client'

import { useState } from 'react'
import { Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'

type ContactFormProps = {
  title?: string
  className?: string
  submitLabel?: string
  locale: Locale
}

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export default function ContactForm({
  locale,
  title,
  className = 'bg-white p-8 rounded-xl shadow-md',
  submitLabel,
}: ContactFormProps) {
  const dict = getDictionary(locale)
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

    const searchParams = typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams()

    const productContext = {
      sourcePage: searchParams.get('sourcePage') || '',
      productTitle: searchParams.get('productTitle') || '',
      productSlug: searchParams.get('productSlug') || '',
      productUrl: searchParams.get('productUrl') || '',
      actionLabel: searchParams.get('actionLabel') || '',
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          productContext,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || dict.form.error)
      }

      setSubmitMessage({
        type: 'success',
        text: dict.form.success,
      })
      setFormData(initialFormData)
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: error instanceof Error ? error.message : dict.form.error,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold mb-6">{title || dict.form.title}</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {dict.form.name} <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              placeholder={dict.form.namePlaceholder}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {dict.form.email} <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              placeholder={dict.form.emailPlaceholder}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {dict.form.phone} <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
            placeholder={dict.form.phonePlaceholder}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {dict.form.subject} <span className="text-red-600">*</span>
          </label>
          <select
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
          >
            <option value="">{dict.form.chooseSubject}</option>
            <option value="dau-tu">{dict.form.subjects.investment}</option>
            <option value="thue-mua">{dict.form.subjects.rentBuy}</option>
            <option value="phap-ly">{dict.form.subjects.legal}</option>
            <option value="khac">{dict.form.subjects.other}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {dict.form.message} <span className="text-red-600">*</span>
          </label>
          <textarea
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
            placeholder={dict.form.messagePlaceholder}
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
          {isSubmitting ? dict.form.sending : (submitLabel || dict.form.submit)}
        </button>
      </form>
    </div>
  )
}
